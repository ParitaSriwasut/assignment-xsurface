import { useState, useEffect } from "react";
import CreateProduct from "../components/product/CreateProduct";
import { useParams } from "react-router-dom";

export function CreateProductContainer() {
  const { name, code } = useParams();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("code", code);
    formData.append("price", price);

    try {
      const headers = {
        // Add your headers if needed
      };

      const response = await fetch("/product", {
        method: "POST",
        headers: headers,
        body: formData,
      });

      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }
      // Handle success
      console.log("Product created successfully");

      // Clear the form or reset state
      setName("");
      setCode("");
      setPrice("");
      setFile(null);
      setPreviewSrc("");
    } catch (err) {
      console.error("Error creating product:", err.message);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      if (name && code) {
        try {
          const response = await fetch(`/product/${code}`);

          if (!response.status === 200) {
            throw new Error("Network response was not 200");
          }

          const data = await response.json();
          setName(data.product.name);
          setCode(data.product.code);
          setPrice(data.product.price);
          setPreviewSrc(data.product.image);
        } catch (err) {
          console.error("Error fetching product details:", err.message);
        }
      }
    }

    fetchProduct();
  }, [code]);

  return (
    <CreateProduct
      handleNameChange={handleNameChange}
      handleCodeChange={handleCodeChange}
      handlePriceChange={handlePriceChange}
      handleFileChange={handleFileChange}
      handleSubmitForm={handleSubmitForm}
      name={name}
      code={code}
      price={price}
      previewSrc={previewSrc}
    />
  );
}
