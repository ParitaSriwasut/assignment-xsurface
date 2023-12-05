import { useState, useEffect } from "react";
import ProductDetail from "../components/product/ProductDetail";

export function ProductDetailContainer({ name, code }) {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(
          `http://localhost:4000/api/products/${name}/${code}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setLoading(false);
        setProductDetail(data.product);
      } catch (error) {
        console.error("Error fetching product details:", error.message);
      }
    }

    fetchProductDetails();
  }, [name, code]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  return <ProductDetail details={productDetail} />;
}
