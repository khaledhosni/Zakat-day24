import React from "react";
import api from "../../data/api/axiosinstance";
import { useEffect } from "react";
export default function ProductScreen() {
  const [products, setProducts] = React.useState([]);
  async function fetchProducts() {
    const response = await api.get("/products");
    console.log(response.status);
    console.log(response.headers);
    console.log(response.data);
    setProducts(response.data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      ProductScreen
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
