/* eslint-disable react/prop-types */
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <>
      <section className="section flex flex-col gap-12 pb-20 desktop:pt-16">
        <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-primary-50 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="flex justify-center text-secondary-500 text-stone text-4xl font-semibold py-10">
              Product list
            </h2>
            <SearchInput />
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 cursor-pointer">
              {products.map((product) => (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <a key={product.id} href={product.href} className="group">
                      <div className="h-48 w-full object-cover object-center aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="mt-4 text-sm text-secondary-5000">
                          {product.productName}
                        </h3>
                        <p className="mt-1 text-lg font-medium text-secondary-500">
                          {product.productCode}
                        </p>
                        <p className="mt-1 text-lg font-medium text-secondary-500">
                          ฿{product.productPrice}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <div className="mt-4">
                    <Link to={`/product/${product.id}`}>
                      <button className="bg-primary-400 text-primary-50 py-2 px-6 rounded-full">
                        <i style={{ color: "#78716c" }}></i> Product details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
