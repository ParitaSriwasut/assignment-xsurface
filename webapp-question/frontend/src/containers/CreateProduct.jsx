import { useState, useEffect } from "react";
import axios from "../configs/axios";
import CreateProduct from "../components/product/CreateProduct";
import { useParams } from "react-router-dom";

export function CreateProductContainer() {
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

    //Image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("file", file);
    formData.append("code", productCode);
    formData.append("productPrice", productPrice);

    try {
      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let response;
      if (id) {
        response = await axios.put("/product/" + id, formData, headers);
      } else {
        response = await axios.post("/product", formData, headers);
      }

      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get("/product/" + id); // product/2
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;

      setProductName(data.product.productName);
      setProductCode(data.product.guide);
      setProductPrice(data.product.productPrice);
      setPreviewSrc(data.product.image);
    }

    fetchProduct();
  }, [id]);

  return CreateProduct({
    handleProductNameChange,
    handleProductCodeChange,
    handleProductPriceChange,
    handleFileChange,
    handleSubmitForm,

    productName,
    productCode,
    productPrice,
    previewSrc,
  });
}
