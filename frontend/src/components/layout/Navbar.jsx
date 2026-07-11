const Navbar = () => {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg-primary)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="text-3xl font-bold tracking-widest text-[var(--accent)]"
        >
          StrideX
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a className="transition hover:text-[var(--accent)]" href="#">
              Shop
            </a>
          </li>

          <li>
            <a className="transition hover:text-[var(--accent)]" href="#">
              Collections
            </a>
          </li>

          <li>
            <a className="transition hover:text-[var(--accent)]" href="#">
              About
            </a>
          </li>

          <li>
            <a className="transition hover:text-[var(--accent)]" href="#">
              Contact
            </a>
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
