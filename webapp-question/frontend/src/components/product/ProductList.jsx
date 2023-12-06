import { FaCircleInfo } from "react-icons/fa6";
import Modal from "../Modal";

export default function ProductList({ products }) {
  return (
    <>
      <div className="bg-white text-start p-10">
        <h1 className="font-bold text-4xl mb-4">Product List</h1>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="w-72 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          {products.map((product) => (
            <div className="" key={product.i}>
              <img
                className="h-80 w-72 object-cover rounded-t-xl" // Use object-contain to fit the image within the container without cropping
                src={product.image}
                alt={product.name}
              />

              <div className="px-4 py-3 w-72">
                <h3 className="text-secondary-400 text-lg font-bold truncate block capitalize">
                  {product.name}
                </h3>
                <p className="text-primary-700 text-lg font-semibold cursor-auto my-3">
                  {product.price}
                </p>
                <p className="text-secondary-400 text-md font-semibold cursor-auto ml-2">
                  {product.code}
                </p>
                <div className="ml-32">
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
      </section>
    </>
  );
}
