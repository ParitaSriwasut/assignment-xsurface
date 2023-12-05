import { useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SearchInput from "../components/product/SearchInput";

export default function searchBar() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // fetch the product
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("/products");
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setLoading(false);
      setProducts(data.orders);
    }

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filteredProductItems = products.filter((product) =>
      product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProductItems);
  };
  return SearchInput({ handleInputChange, filteredProductItems });
}
