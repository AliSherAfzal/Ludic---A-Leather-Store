# ADR-003 — State Management

**Status:** Accepted

---

# Decision

Global application state will initially use the React Context API.
Persistence Strategy

Shopping cart persistence is encapsulated inside CartContext through a dedicated persistence layer. UI components remain unaware of storage implementation details.

---

# Rationale

Current application complexity does not justify introducing Redux or Zustand.

Context provides sufficient capability for:

- Shopping Cart
- Authentication (future)
- Theme (future)

---

# Future

If application complexity increases significantly, a dedicated state management library may be introduced.
Current Context Usage

- Shopping Cart