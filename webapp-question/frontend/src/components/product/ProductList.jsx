import { FaCircleInfo } from "react-icons/fa6";
import Modal from "../Modal";

export default function ProductList({ products }) {
  return (
    <>
      <div className="bg-white text-start">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <h2 className="flex text-secondary-500 text-4xl font-semibold py-6">
            Product List
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-72 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-2 my-2" // Added mx-2 and my-2 for margin
              >
                <img
                  className="h-80 w-72 object-cover rounded-t-xl"
                  src={product.image}
                  alt={product.name}
                />
                <div className="px-4 py-3">
                  <h3 className="text-secondary-400 text-lg font-bold truncate block capitalize">
                    {product.name}
                  </h3>
                  <p className="text-primary-700 text-lg font-semibold cursor-auto my-3">
                    ฿ {product.price}
                  </p>
                  <p className="text-secondary-400 text-md font-semibold cursor-auto ml-3">
                    {product.code}
                  </p>
                  <div className="ml-56">
                    <FaCircleInfo
                      className="flex text-xl font-bold text-secondary-400 cursor-pointer duration-500 hover:scale-105"
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
