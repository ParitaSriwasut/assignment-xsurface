import { LuUpload } from "react-icons/lu";
import { Link } from "react-router-dom";

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
      <div className="sm:w-640 md:w-768 lg:w-1024 xl:w-1280 2xl:w-1536 mx-auto pt-4 p-4">
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col w-full max-auto justify-center h-screen items-center gap-2"
        >
          <div className="sm:text-3xl font-bold text-secondary-500 mr-[485px] mb-6">
            Upload Product
          </div>

          <label
            htmlFor="text"
            className="sm:text-sm text-secondary-400 text-light font-semibold mb-2 text-left mr-[600px]"
          >
            Upload image
          </label>
          <div className="sm:w-full max-w-[700px] mb-8 items-center justify-center gap-40">
            <label className="mx-auto flex flex-col border-4 border-dashed w-full h-60 rounded-lg hover:border-primary-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md border-secondary-300 p-4 text-center group">
              <div className="mx-auto flex flex-col justify-center items-center gap-4">
                {previewSrc ? (
                  <img
                    src={previewSrc}
                    alt="Preview"
                    className="max-h-32 gap-4"
                  />
                ) : (
                  <>
                    <LuUpload className="flex items-center justify-center text-2xl font-bold text-secondary-400 gap-4" />
                    <div className="flex mt-2">
                      <p className="text-sm font-semibold text-secondary-300">
                        Drag & Drop or&nbsp;
                      </p>
                      <p className="text-sm font-semibold text-secondary-600 underline">
                        Choose file
                      </p>
                      <p className="text-sm font-semibold text-secondary-300">
                        &nbsp;to upload
                      </p>
                    </div>
                    <p className="text-xs font-semibold text-secondary-300 mt-2">
                      JPG or PNG. Maximum file size 50MB.
                    </p>
                  </>
                )}
              </div>
              <input
                type="file"
                className="opacity-0 absolute"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
            </label>
            <div>
              <span className="text-xs text-secondary-300 text-right">
                Image upload (0/6)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 mx-auto w-[700px]">
            <label
              htmlFor="productName"
              className="md:text-sm text-sm text-secondary-400 text-light font-semibold"
            >
              Product name
            </label>
            <input
              type="text"
              className="h-[50px] p-4 rounded-3xl border-2 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Product name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 mx-auto w-[700px]">
            <label
              htmlFor="productCode"
              className="md:text-sm text-sm text-secondary-400 text-light font-semibold"
            >
              Code
            </label>
            <input
              type="text"
              className="h-[50px] p-4 rounded-3xl border-2 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Product code"
              value={code}
              onChange={handleCodeChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 mx-auto w-[700px]">
            <label
              htmlFor="productPrice"
              className="md:text-sm text-sm text-secondary-400 text-light font-semibold"
            >
              Product price
            </label>

            <input
              type="number"
              className="h-[50px] p-4 rounded-3xl border-2 border-secondary-100 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Product price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>

          <div className="flex flex-col w-full sm:flex-row items-center justify-center gap-14 mt-4 md:mt-10">
            <Link to="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-7 py-3 text-sm font-medium rounded-3xl bg-white text-primary-600 border border-gray-100 leading-6 capitalize duration-100 transform shadow cursor-pointer focus:ring-4 focus:ring-primary-400 focus:ring-opacity-50 focus:outline-none hover:shadow-lg hover:-translate-y-1">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 text-sm font-medium rounded-3xl bg-primary-400 text-white border border-gray-100 leading-6 capitalize duration-100 transform shadow cursor-pointer focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none hover:shadow-lg hover:-translate-y-1"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
