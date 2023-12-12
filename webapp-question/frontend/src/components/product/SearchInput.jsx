import { GrSearch } from "react-icons/gr";

export default function SearchInput({ handleSearchInputChange, searchInput }) {
  return (
    <div className="sm:w-640 md:w-768 lg:w-1024 xl:w-1280 2xl:w-1536 mx-auto flex items-center justify-center pt-6 px-12 bg-white">
      <div className="relative top-2 inset-y-0 flex items-center w-[80%]">
        <GrSearch className="absolute left-3 flex text-2xl font-bold text-secondary-400" />
        <input
          className="appearance-none border-2 border-secondary-400 hover:border-secondary-200 w-full transition-colors rounded-2xl py-2 pl-10 pr-4 text-secondary-500 leading-tight focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:shadow-outline"
          type="text"
          placeholder="Search by Product name, Product code"
          onChange={handleSearchInputChange}
          value={searchInput}
        />
      </div>
    </div>
  );
}
