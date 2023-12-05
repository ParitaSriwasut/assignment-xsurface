export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div className="border rounded shadow-lg p-4 flex flex-col items-center" key={product.id}>
          <div className="w-32 h-32 mb-4 flex justify-center items-center overflow-hidden"> {/* Adjust the w-32 and h-32 to the desired size */}
            <img
              className="max-w-full max-h-full object-contain" // Use object-contain to fit the image within the container without cropping
              src={product.image}
              alt={product.name}
            />
          </div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
          <p className="text-gray-600">{product.code}</p>
        </div>
      ))}
    </div>
  );
}
