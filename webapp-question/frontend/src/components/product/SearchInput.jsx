import { GrSearch } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SearchInput({ handleSearchInputChange, searchInput }) {
  return (
    <form>
      <div className="sm:w-640 md:w-768 lg:w-1024 xl:w-1280 2xl:w-1536 mx-auto flex items-center justify-center pt-16 p-12">
        <button
          className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-secondary-100 bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400"
          type="button"
        >
          Search by
          <RiArrowDropDownLine className="text-secondary-500 flex text-2xl font-bold" />
        </button>
        <div className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow">
          <ul className="py-2 text-sm text-secondary-500">
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-secondary-100 "
              >
                Product name
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-secondary-100 "
              >
                Product code
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            className="z-20 block w-full rounded-e-lg border-2 p-2.5 text-sm text-secondary-500 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Name, Code "
            required
          />
          <button
            type="submit"
            className="absolute end-0 top-0 h-full rounded-e-lg border border-primary-500 bg-primary-500 p-2.5 text-md font-bold text-white hover:bg-primary-400"
          >
            <GrSearch className="flex " />
          </button>
        </div>
      </div>
    </form>
  );
}
