import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";
import { config } from "../configs/config";
import axios from "axios";
import SearchInput from "../components/product/SearchInput";

export function ProductListContainer() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${config.backendUrl}/products?name=${searchInput}`);
        if (!response.status === 200) {
          throw new Error("Network response was not 200");
        }

        setLoading(false);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    }

    fetchProducts();
  }, [searchInput]);

  const handleSearchInputChange = async (e) => {
    setSearchInput(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <><SearchInput handleSearchInputChange={handleSearchInputChange} searchInput={searchInput} /><ProductList products={products} /></>
  );
}
