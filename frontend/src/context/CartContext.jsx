import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "stridex-cart";
const CartContext = createContext(undefined);

const removeStoredCart = () => {
  try {
    window.localStorage.removeItem(CART_STORAGE_KEY);
  } catch {
    // Storage can be unavailable while the in-memory cart remains usable.
  }
};

const getInitialCartItems = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart = JSON.parse(storedCart);

    if (Array.isArray(parsedCart)) {
      return parsedCart;
    }
  } catch {
    removeStoredCart();
    return [];
  }

  removeStoredCart();
  return [];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCartItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((currentItems) => {
      if (quantity <= 0) {
        return currentItems.filter((item) => item.id !== productId);
      }

      return currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (cartItems.length === 0) {
      removeStoredCart();
      return;
    }

    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Storage can be unavailable while the in-memory cart remains usable.
    }
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      totalItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [cartItems, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// The context consumer is intentionally colocated with its provider.
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
};
