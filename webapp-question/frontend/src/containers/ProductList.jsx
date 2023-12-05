import { useState, useEffect } from "react";
import axios from "../configs/axios";
import ProductList from "../components/product/ProductList";
import Loading from "../components/Loading";

export function ProductListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("/product");
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setLoading(false);
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return ProductList({ products });
}
