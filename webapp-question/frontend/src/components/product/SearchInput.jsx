export default function SearchInput({
  handleSearchInputChange,
  searchInput,
}) {
  return (
    <div className="p-4">
    <input
      className="w-full p-2 border rounded"
      type="text"
      placeholder="Search..."
      onChange={handleSearchInputChange}
      value={searchInput}
    />
  </div>
  );
}
