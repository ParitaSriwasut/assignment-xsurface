import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div className="bg-white text-start gap-10">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-secondary-500 text-4xl font-semibold py-6">
            Product List
          </h2>
          <Link to="/create">
            <button className="bg-primary-500 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-primary-600 transition-colors">
              Create Product
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-70 h-70 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-2 my-4"
            >
              <img
                className="h-56 w-full object-cover rounded-t-xl"
                src={product.image}
                alt={product.name}
              />
              <div className="px-4 py-3">
                <h3 className="text-secondary-400 text-lg font-bold truncate block capitalize">
                  {product.name}
                </h3>
                <p className="text-secondary-400 text-md font-semibold cursor-auto my-3">
                  {product.code}
                </p>
                <p className="text-primary-600 text-lg font-semibold cursor-auto my-3">
                  ฿ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
