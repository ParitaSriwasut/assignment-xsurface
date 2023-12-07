// import { useState } from "react";
// import Modal from "../Modal";

// export default function ProductList({ products }) {
//   return (
//     <div className="bg-white text-start gap-10">
//       <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
//         <h2 className="flex text-secondary-500 text-4xl font-semibold py-6">
//           Product List
//         </h2>
//         <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="w-70 bg-white shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-2 my-4"
//             >
//               <img
//                 className="h-70 w-74 object-cover rounded-t-xl"
//                 src={product.image}
//                 alt={product.name}
//               />
//               <div className="px-4 py-3">
//                 <h3 className="text-secondary-400 text-lg font-bold truncate block capitalize">
//                   {product.name}
//                 </h3>
//                 <p className="text-secondary-400 text-md font-semibold cursor-auto my-3">
//                   {product.code}
//                 </p>
//                 <p className="text-primary-700 text-lg font-semibold cursor-auto my-3">
//                   ฿ {product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Modal from "../Modal";
import Loading from "../Loading";

export default function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = async (name, code) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/products/${name}/${code}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSelectedProduct(data.product);
      setIsOpen(true);
    } catch (error) {
      console.error("Error fetching product details:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white text-start gap-10">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="flex text-secondary-500 text-4xl font-semibold py-6">
          Product List
        </h2>
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
                onClick={() => openModal(product.name, product.code)}
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

        {isOpen && (
          <Modal onClose={closeModal}>
            {loading ? (
              <div>
                <Loading />{" "}
              </div>
            ) : (
              <div className="mx-auto mt-20 inset-0 z-60">
                <div className="bg-white p-4 rounded-lg shadow-xl gap-10">
                  <div className="flex flex-row justify-center items-center gap-20">
                    <div className="items-center">
                      <p className="flex justify-center text-center text-lg text-secondary-400 font-semibold">
                        Product image :
                      </p>
                      <img
                        src={selectedProduct?.image}
                        alt="Product image"
                        className="w-[200px] h-[200px] border border-primary-200"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-6">
                    <p className="text-3xl font-extrabold text-secondary-400">
                      Product name: {selectedProduct?.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-6">
                    <p className="text-3xl font-extrabold text-secondary-400">
                      Product code: {selectedProduct?.code}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center mt-6">
                    <p className="text-3xl font-extrabold text-secondary-400">
                      Product price: {selectedProduct?.price}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        )}
      </div>
    </div>
  );
}
