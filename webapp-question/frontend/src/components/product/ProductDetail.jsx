import { useState } from "react";
import Modal from "../Modal";

export default function ProductDetail({ product }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal onClose={() => setIsOpen(false)}>
      <div className="sm:w-640 md:w-768 lg:w-1024 xl:w-1280 mx-auto flex items-center justify-center pt-6 mt-20 inset-0 z-60">
        {/* Assuming product is an array and you want to map over it */}
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-xl gap-10"
          >
            <div className="flex flex-row justify-center items-center gap-20">
              <div className="items-center">
                <p className="flex justify-center text-center text-lg text-secondary-400 font-semibold">
                  Product image
                </p>
                <img
                  src={item.image}
                  alt="Product image"
                  className="w-[200px] h-[200px] border border-primary-200"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="text-3xl font-extrabold text-secondary-400">
                Product name: {item.name}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="text-3xl font-extrabold text-secondary-400">
                Product code: {item.code}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="text-3xl font-extrabold text-secondary-400">
                Product price: {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
