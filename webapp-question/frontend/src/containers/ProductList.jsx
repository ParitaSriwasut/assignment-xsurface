import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";

export function ProductListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:4000/api/products");

        if (!response.status === 200) {
          throw new Error("Network response was not 200");
        }

        const data = await response.json();
        setLoading(false);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ProductList products={products} />;
}
