function TableProductsFilter({ columnFilters, setColumnFilters }) {
    const taskName =
        columnFilters.find((f) => f.id === 'productName')?.value || '';

    const onFilterChange = (id, value) =>
        setColumnFilters((prev) =>
            prev.filter((f) => f.id !== id).concat({ id, value })
        );

    return (
        <input
            type="text"
            placeholder="Search product"
            value={taskName}
            onChange={(e) => onFilterChange('productName', e.target.value)}
        />
    );
}

export default TableProductsFilter;
