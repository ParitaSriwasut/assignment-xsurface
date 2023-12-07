import { LuUpload } from "react-icons/lu";

export default function CreateProduct({
  name,
  code,
  price,
  previewSrc,
  handleNameChange,
  handleCodeChange,
  handlePriceChange,
  handleFileChange,
  handleSubmitForm,
}) {
  return (
    <section className="bg-white">
      <div className="sm:w-640 md:w-768 lg:w-1024 xl:w-1280 mx-auto flex flex-col items-center pt-10 h-screen p-12">
        <div className="text-4xl font-medium text-secondary-500 mb-6">
          Upload Product
        </div>
        <form onSubmit={handleSubmitForm} className="w-full max-auto pt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
              <label
                htmlFor="text"
                className="text-sm text-secondary-400 text-light font-semibold block mb-2"
              >
                Upload Product
              </label>
              <label className="flex flex-col border-4 border-dashed w-full h-60 rounded-lg hover:border-primary-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md border-secondary-300 p-20 text-center group">
                {/* ... Your existing image upload code */}
              </label>
              <div className="mt-2">
                <span className="text-xs text-secondary-300 text-right">
                  Image upload (0/6)
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="productName"
                className="text-sm text-secondary-400 text-light font-semibold block mb-2"
              >
                Product name
              </label>
              <input
                type="text"
                className="py-2 px-3 rounded-3xl border-2 border-secondary-100 w-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="Product name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productCode"
                className="text-sm text-secondary-400 text-light font-semibold block mb-2"
              >
                Code
              </label>
              <input
                type="text"
                className="py-2 px-3 rounded-3xl border-2 border-secondary-100 w-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="Product code"
                value={code}
                onChange={handleCodeChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="productPrice"
                className="text-sm text-secondary-400 text-light font-semibold block mb-2"
              >
                Product price
              </label>
              <input
                type="number"
                className="py-2 px-3 rounded-3xl border-2 border-secondary-100 w-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="Product price"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>

          <div className="flex gap-10 flex-col w-full sm:w-auto sm:flex-row p-4 justify-center items-center pt-10">
            <button
              type="button"
              className="flex flex-row items-center justify-center w-full px-4 py-3 mb-4 text-sm font-medium rounded-3xl bg-white text-primary-600 border border-gray-100 leading-6 capitalize duration-100 transform shadow cursor-pointer focus:ring-4 focus:ring-primary-400 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex flex-row items-center justify-center w-full px-4 py-3 mb-4 text-sm font-medium rounded-3xl bg-primary-400 text-white border border-gray-100 leading-6 capitalize duration-100 transform shadow cursor-pointer focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
