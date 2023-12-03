export default function ProductList() {
  return (
    <>
      <section className="section flex flex-col gap-12 pb-20 desktop:pt-16">
        <div className="container flex justify-center gap-8 pt-10">
          <div className="text-2xl text-gray-800 gap-4 items-start">
            Product List
          </div>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-500 border border-red-500 rounded-xl bg-white focus:ring-red-500 focus:border-red-500 md:w-80"
                placeholder="Name, Catalogue, Code"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Product name
              </h5>
              <p className="mb-3 text-sm text-gray-700 ">Code</p>
              <p className="mb-3 text-lg text-red-700 ">B</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
