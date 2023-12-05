export default function ProductDetail({ product }) {
  return (
    <>
      <div className="mt-20 bg-primary-50">
        <div className="container mx-auto p-4">
          <div className="md:w-12/12">
            <section className="bg-primary-50 rounded-lg shadow-md">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                  <div className="pro-img-details">
                    <img src={product.image} alt={product.productName} />
                  </div>
                </div>
                <div className="w-full md:w-6/12 p-6">
                  <h2 className="text-2xl font-bold text-secondary-500 mb-2">
                    {product.productName}
                  </h2>
                  <p className="text-secondary-500 text-md mb-2 leading-loose">
                    {product.code}
                  </p>
                  <p className="text-md font-semibold text-secondary-500 mb-2 leading-loose">
                    {product.shortDescription}
                  </p>
                  <div className="text-2xl font-bold text-secondary-500 mb-2 mt-4">
                    <strong>Price: ${product.productPrice}</strong>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
