import { GrSearch } from "react-icons/gr";

export default function SearchInput({ handleSearchInputChange, searchInput }) {
  return (
    <form>
      <div className="sm:w-640 md:w-768 lg:w-1024 xl:w-1280 mx-auto flex items-center justify-center pt-6">
        <button
          className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-secondary-100 bg-white px-4 py-2.5 text-center text-sm font-medium text-secondary-500 hover:bg-secondary-200 focus:outline-none focus:ring-4 focus:ring-primary-400"
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
            className="z-20 block w-full rounded-e-lg border border-s-2 border-secondary-100 bg-white p-2.5 text-sm text-secondary-500 focus:border-secondary-300 focus:ring-primary-500"
            placeholder="Name, Catalogue, Code "
            required
          />
          <button
            type="submit"
            className="absolute end-0 top-0 h-full rounded-e-lg border border-primary-500 bg-primary-600 p-2.5 text-sm font-medium text-white hover:bg-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            <GrSearch className="flex text-2xl font-bold text-secondary-400" />
          </button>
        </div>
      </div>
    </form>
  );
}

{
  /* <div className="sm:w-640 md:w-768 lg:w-1024 xl:-1280 mx-auto flex items-center justify-center pt-6">
<div className="left-3 inset-y-0 flex items-center">
  <GrSearch className="flex text-2xl font-bold text-secondary-400" />
</div>
<input
  className="appearance-none border-2 border-secondary-400 hover:border-secondary-200 transition-colors rounded-2xl w-[800px] py-2 pl-10 pr-4 text-secondary-500 leading-tight focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:shadow-outline"
  type="text"
  placeholder="Name, Catalogue, Code"
  onChange={handleSearchInputChange}
  value={searchInput}
/>
</div> */
}
