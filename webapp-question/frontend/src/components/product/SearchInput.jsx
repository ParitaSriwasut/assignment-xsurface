import { RxMagnifyingGlass } from "react-icons/rx";

export default function SearchInput({
  handleChange,
  searchInput,
  filteredProductItems,
}) {
  return (
    <div className="w-full h-10 pl-3 pr-2 bg-primary-50 border rounded-full flex justify-between items-center">
      <div className="flex justify-end gap-6 py-2 px-6 mt-4">
        <RxMagnifyingGlass className="text-secondary-400 text-3xl" />
      </div>
      <input
        type="search"
        placeholder="Product name, Code"
        className="py-2 px-4 rounded-xl border border-secondary-300 focus:ring-2 focus:ring-secondary-500 appearance-none w-full outline-none focus:outline-none active:outline-none"
        onChange={handleChange}
        value={searchInput}
      />
      {filteredProductItems.map((product) => (
        <li key={product.id}>{product.productName}</li>
      ))}
    </div>
  );
}
