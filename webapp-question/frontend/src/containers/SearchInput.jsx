import { useState, useEffect } from "react";
import SearchInput from "../components/product/SearchInput";

export default function SearchBar() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products");
        if (!response.status === 200) {
          throw new Error("Network response was not 200");
        }

        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    }

    fetchProducts();
  }, []);

  const handleInputChange = async (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    try {
      const response = await fetch(
        `/search?name=${searchTerm} && /search?code=${searchTerm}`
      );
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const searchData = await response.json();
      setFilteredProducts(searchData.products);
    } catch (error) {
      console.error("Error searching for products:", error.message);
    }
  };

  return (
    <SearchInput
      handleInputChange={handleInputChange}
      filteredProducts={filteredProducts}
    />
  );
}
