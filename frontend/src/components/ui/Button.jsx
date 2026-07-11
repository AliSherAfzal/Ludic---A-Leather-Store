const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        rounded-xl
        bg-[var(--accent)]
        px-8
        py-3
        font-medium
        text-[var(--bg-primary)]
        transition-all
        duration-300
        hover:bg-[var(--accent-hover)]
      "
    >
      {children}
    </button>
  );
};

export default Button;
