import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import api from "../../data/api/axiosinstance";
export default function ProductDetails() {
  const [product, setProduct] = React.useState(null);
  const [error, setError] = React.useState("");
  //get id from route
  const { id } = useParams();

  async function fetchProduct() {
    try {
      const response = await api.get("/products/" + id);
      if (response.status === 200) {
        setProduct(response.data);
        setError("");
      } else {
        setError("Failed to fetch product");
        setProduct(null);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  React.useEffect(() => {
    fetchProduct();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="mt-4 text-red-500">Error: {error}</p>
      </div>
    );
  }
  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />

          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      )}
    </div>
  );
}
