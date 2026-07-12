import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import stridexLogo from "../../assets/images/stridex.png";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

const navLinks = [
  { name: "Shop", path: "/products" },
  { name: "Collections", path: "/collections" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `relative pb-1 transition-all duration-300 hover:text-[var(--accent)] ${isActive
    ? "text-[var(--accent)] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[var(--accent)] after:content-['']"
    : "text-[var(--text-primary)]"
  }`;

const iconButtonClass =
  "rounded-full p-2 transition-all duration-300 hover:bg-[var(--surface)] hover:text-[var(--accent)]";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)] backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={stridexLogo}
              alt="StrideX"
              className="h-16 w-auto"
            />
          </Link>

        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={navLinkClass}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-2">

          <button
            type="button"
            className={iconButtonClass}
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          <Link
            to="/cart"
            className={iconButtonClass}
            aria-label="Cart"
          >
            <ShoppingBag size={22} />
          </Link>

          <button
            type="button"
            className={iconButtonClass}
            aria-label="Login"
          >
            <User size={22} />
          </button>

        </div>

      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${mobileMenuOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
          }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-[var(--bg-secondary)] p-6 shadow-2xl transition-transform duration-300 ${mobileMenuOpen
          ? "translate-x-0"
          : "-translate-x-full"
          }`}
      >

        {/* Drawer Header */}
        <div className="mb-12 flex items-center justify-between">

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src={stridexLogo}
              alt="StrideX"
              className="h-12 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>

        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col gap-6">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

      </aside>

    </header>
  );
};

export default Navbar;