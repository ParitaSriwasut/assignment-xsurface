import Modal from "../Modal";

export default function ProductDetail({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen)
    return (
      <Modal onClose={() => setIsOpen(false)}>
        <div className="mx-auto mt-20 inset-0 z-60">
          {/* map product details  key={product.id} */}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-xl gap-10">
          <div className="flex flex-row justify-center items-center gap-20">
            <div className="items-center">
              <p className="flex justify-center text-center text-lg text-secondary-400 font-semibold">
                Product image
              </p>
              <img
                src={product.image}
                alt="Product image"
                className="w-[200px] h-[2o0px] border border-primary-200"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-3xl font-extrabold text-secondary-400">
              Product name : {product.name}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-3xl font-extrabold text-secondary-400">
              Product code : {product.code}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="text-3xl font-extrabold text-secondary-400">
              Product price : {product.price}
            </p>
          </div>
        </div>
      </Modal>
    );
}
