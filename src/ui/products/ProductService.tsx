import axios from "axios";

class ProductService {
  async getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  getProducts();
}

export default new ProductService();
