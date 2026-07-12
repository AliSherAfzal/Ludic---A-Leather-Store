import classicOxford from "../assets/images/products/classic oxford.jpg";
import chelseaBoot from "../assets/images/products/chelsea boot.jpg";
import leatherLoafer from "../assets/images/products/leather loafer.jpg";
import monkStrap from "../assets/images/products/monk strap.jpg";
import sneaker from "../assets/images/products/sneaker.jpg";
import derby from "../assets/images/products/derby.jpg";

const products = [
  {
    id: 1,
    name: "Classic Oxford",
    category: "Men",
    price: 189,
    rating: 4.8,
    badge: "Premium",
    image: classicOxford,
  },
  {
    id: 2,
    name: "Chelsea Boot",
    category: "Men",
    price: 229,
    rating: 4.9,
    badge: "Best Seller",
    image: chelseaBoot,
  },
  {
    id: 3,
    name: "Leather Loafer",
    category: "Casual",
    price: 169,
    rating: 4.7,
    badge: "New",
    image: leatherLoafer,
  },
  {
    id: 4,
    name: "Monk Strap",
    category: "Formal",
    price: 199,
    rating: 4.8,
    badge: "Premium",
    image: monkStrap,
  },
  {
    id: 5,
    name: "Premium Sneaker",
    category: "Casual",
    price: 179,
    rating: 4.6,
    badge: "Trending",
    image: sneaker,
  },
  {
    id: 6,
    name: "Luxury Derby",
    category: "Formal",
    price: 249,
    rating: 4.9,
    badge: "Premium",
    image: derby,
  },
];

export default products;