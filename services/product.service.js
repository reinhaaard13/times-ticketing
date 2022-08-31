import axios from "axios";

class ProductService {
  async getAllProducts() {
    const response = await axios.get("/api/products");
    return response.data
  }

  async getAllSubproducts() {
    const response = await axios.get("/api/subproducts");
    return response.data
  }
}

export default new ProductService()