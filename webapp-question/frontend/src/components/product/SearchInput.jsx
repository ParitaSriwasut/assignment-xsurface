import { GrSearch } from "react-icons/gr";

export default function SearchInput({ handleSearchInputChange, searchInput }) {
  return (
    <div className="bg-white">
      <div className="sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto relative flex items-center justify-center pt-6 px-6 md:px-12">
        <div className="absolute left-3 inset-y-0 flex items-center">
          <GrSearch className="flex text-2xl font-bold text-secondary-400" />
        </div>
        <input
          className="appearance-none border-2 border-secondary-400 hover:border-secondary-200 transition-colors rounded-2xl w-full md:w-[640px] py-2 pl-10 pr-4 text-secondary-500 leading-tight focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:shadow-outline"
          type="text"
          placeholder="Search by Product name, Product code"
          onChange={handleSearchInputChange}
          value={searchInput}
        />
      </div>
    </div>
  );
}
