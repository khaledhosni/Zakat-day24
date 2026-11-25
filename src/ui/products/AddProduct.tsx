// AddProduct component for adding a new product

import React from "react";
import api from "../../data/api/axiosinstance";
export default function AddProduct() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(0);

  async function addProduct() {
    const response = await api.post("/products/add", {
      title,
      description,
      price,
    });
    console.log(response.data);
  }

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
