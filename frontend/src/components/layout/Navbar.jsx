import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg-primary)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-3xl font-bold tracking-widest text-[var(--accent)]"
        >
          StrideX
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              to="/products"
              className="transition hover:text-[var(--accent)]"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/collections"
              className="transition hover:text-[var(--accent)]"
            >
              Collections
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="transition hover:text-[var(--accent)]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="transition hover:text-[var(--accent)]"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <button>Search</button>

          <button>Cart</button>

          <button>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;