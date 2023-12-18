import { useState } from "react";
import CreateProduct from "../components/product/CreateProduct";
import axios from "axios";
import { config } from "../configs/config";
import { useNavigate } from "react-router-dom";

export function CreateProductContainer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file.size > 50 * 1024 * 1024) {
      console.log(
        "To upload images : The image size should not over than 50MB."
      );
    }

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setFile(file);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("code", code);
    formData.append("price", price);

    try {
      const response = await axios.post(
        `${config.backendUrl}/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }
      response.data.product;

      // Clear the form or reset state
      setName("");
      setCode("");
      setPrice("");
      setFile(null);
      setPreviewSrc("");

      alert("Product created successfully");
      navigate("/");
    } catch (err) {
      console.error("Error creating product:", err.message);
    }
  };
  // Render the CreateProduct component with props and event handlers
  return (
    <CreateProduct
      name={name}
      code={code}
      price={price}
      previewSrc={previewSrc}
      handleNameChange={handleNameChange}
      handleCodeChange={handleCodeChange}
      handlePriceChange={handlePriceChange}
      handleFileChange={handleFileChange}
      handleSubmitForm={handleSubmitForm}
    />
  );
}
