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
      <div className="max-w-[1504px] h-screen items-center pt-10 p-12">
        <div className="text-4xl font-medium text-secondary-500">
          Upload Product
        </div>
        <form
          onSubmit={handleSubmitForm}
          className="items-center justify-center w-full max-auto pt-6 p-44"
        >
          <div className="pt-2">
            <label className="flex flex-col border-4 border-dashed w-full-[600px] h-60 rounded-lg hover:border-primary-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md border-secondary-300 p-20 text-center group">
              <div className="flex flex-col justify-center items-center px-20">
                {previewSrc ? (
                  <img src={previewSrc} alt="Preview" className="max-h-32" />
                ) : (
                  <>
                    <LuUpload className="flex items-center justify-center text-2xl font-bold text-secondary-400" />
                    <div className="flex">
                      <p className="mb-2 block text-sm font-semibold text-secondary-300">
                        Drag & Drop or
                      </p>
                      <p className="mb-2 block text-sm font-semibold text-secondary-600 underline">
                        Choose file
                      </p>
                      <p className="mb-2 block text-sm font-semibold text-secondary-300">
                        to upload
                      </p>
                    </div>
                    <p className="mb-2 block text-xs font-semibold text-secondary-300">
                      JPG. or PNG Maximum file size 50MB.
                    </p>
                  </>
                )}
              </div>
              <input
                type="file"
                className="opacity-0 absolute"
                onChange={handleFileChange}
                accept="image/*" // Optionally ensure only image file types are selectable
              />
            </label>
            <div className="mb-8">
              <span className="items-start text-xs text-secondary-300 text-right">
                Image upload (0/6)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-4 mx-2">
            <label
              htmlFor="productName"
              className=" md:text-sm text-xs text-secondary-400 text-light font-semibold"
            >
              Product name:
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-3xl border-2 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Product name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="grid grid-cols-1 mt-4 mx-2">
            <label
              htmlFor="productCode"
              className=" md:text-sm text-xs text-secondary-400 text-light font-semibold"
            >
              Code:
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-3xl border-2 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Product code"
              value={code}
              onChange={handleCodeChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-4 mx-2">
            <label
              htmlFor="productPrice"
              className=" md:text-sm text-xs text-secondary-400 text-light font-semibold"
            >
              Product price:
            </label>
            <input
              type="number"
              className="py-2 px-3 rounded-3xl border-2 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Product price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>

          <div className="flex gap-10 flex-col w-full sm:w-auto sm:flex-row p-4 justify-center items-center pt-10">
            <button className="flex flex-row items-center justify-center w-full px-4 py-3 mb-4 text-sm font-medium rounded-3xl bg-white text-primary-600 border border-gray-100 leading-6 capitalize duration-100 transform shadow cursor-pointer focus:ring-4 focus:ring-primary-400 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1">
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
