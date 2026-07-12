const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <section className="mt-12 flex items-center justify-center gap-3">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-xl border border-[var(--border)] px-4 py-2 transition hover:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`h-10 w-10 rounded-xl transition ${
            currentPage === index + 1
              ? "bg-[var(--accent)] text-[var(--bg-primary)]"
              : "border border-[var(--border)] hover:border-[var(--accent)]"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-xl border border-[var(--border)] px-4 py-2 transition hover:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>

    </section>
  );
};

export default Pagination;