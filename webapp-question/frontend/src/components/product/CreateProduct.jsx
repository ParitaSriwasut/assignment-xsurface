import { RxUpload } from "react-icons/rx";

export default function CreateProduct({
  productName,
  productPrice,
  productCode,
  previewSrc,
  onClick,
}) {
  return (
    <section className="section flex flex-col gap-12 pb-20 desktop:pt-16">
      <div className="max-w-md mx-auto p-6 bg-primary-50 rounded-md shadow-md flex">
        <div className="grid bg-primary-50 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 ">
          <div className="flex justify-start">
            <div className="flex">
              <h1 className="flex items-start justify-start text-xl font-medium text-secondary-500">
                Upload Product
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5 mx-7">
            <label className="md:text-sm text-xs text-secondary-500 text-light font-semibold mb-1">
              Upload image:
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-secondary-100 hover:border-secondary-300 group" />
              <div className="flex flex-col items-center justify-center pt-7">
                <div className="flex justify-center py-4">
                  <div className="flex bg-secondary-400 rounded-full md:p-4 p-2 border-2 border-secondary-200">
                    <RxUpload className="flex items-center justify-center text-xl font-semibold text-secondary-400" />
                  </div>
                  <input type="file" className="hidden" value={previewSrc} />
                </div>
                <p className="mb-2 block text-sm font-semibold text-secondary-300">
                  Drag & Drop or
                </p>
                <p className="mb-2 block text-sm font-semibold text-secondary-600 underline">
                  Choose file
                </p>
                <p className="mb-2 block text-sm font-semibold text-secondary-300">
                  to upload
                </p>
                <p className="mb-2 block text-xs font-semibold text-secondary-300">
                  JPG. or PNG Maximum file size 50MB.
                </p>
              </div>
            </div>
          </div>
          <span className="flex items-end text-end justify-center text-xs text-secondary-300">
            Image upload (0/6)
          </span>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label
              htmlFor="productName"
              className="uppercase md:text-sm text-xs text-secondary-500 text-light font-semibold"
            >
              Product name
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-lg border-2 border-secondary-300 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label
              htmlFor="productCode"
              className="uppercase md:text-sm text-xs text-secondary-500 text-light font-semibold"
            >
              Code
            </label>
            <input
              type="text"
              className="py-2 px-3 rounded-lg border-2 border-secondary-300 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="Product code"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 mt-5 mx-7">
            <label
              htmlFor="productPrice"
              className="uppercase md:text-sm text-xs text-secondary-500 text-light font-semibold"
            >
              Product price
            </label>
            <input
              type="number"
              className="py-2 px-3 rounded-lg border-2 border-secondary-300 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="Product price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex gap-5 flex-col w-full sm:w-auto sm:flex-row p-4">
          <button className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-medium rounded-lg bg-primary-50 text-primary-600 leading-6 capitalize duration-100 transform shadow cursor-pointer focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1">
            Cancel
          </button>
          <button className=" text-white bg-primary-500 flex items-center justify-center w-full px-4 py-4 text-sm font-bold rounded-lg leading-6 capitalize duration-100 transform border-2 cursor-pointer border-primary-400 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-1">
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}
