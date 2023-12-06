import { GrSearch } from "react-icons/gr";

export default function SearchInput({ handleSearchInputChange, searchInput }) {
  return (
    <section className="bg-white">
      <div className="items-center justify-center pt-4 p-48">
        <div className="relative">
          <input
            className="appearance-none border-2 pl-10 border-secondary-400 hover:border-secondary-200 transition-colors rounded-2xl w-[800px] py-2 px-3 text-secondary-500 leading-tight focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:shadow-outline"
            type="text"
            placeholder="Name, Catalogue, Code"
            onChange={handleSearchInputChange}
            value={searchInput}
          />
          <div className="absolute left-3 inset-y-0 flex items-center">
            <GrSearch className="flex text-2xl font-bold text-secondary-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
