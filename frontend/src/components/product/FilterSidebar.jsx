const FilterSidebar = () => {
  return (
    <aside className="rounded-2xl bg-[var(--surface)] p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Filters
      </h2>

      <ul className="space-y-4">

        <li>Men</li>

        <li>Women</li>

        <li>Formal</li>

        <li>Casual</li>

      </ul>

    </aside>
  );
};

export default FilterSidebar;