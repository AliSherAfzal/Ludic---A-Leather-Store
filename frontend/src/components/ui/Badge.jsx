const Badge = ({ children }) => {
  return (
    <span className="inline-block rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-[var(--bg-primary)]">
      {children}
    </span>
  );
};

export default Badge;