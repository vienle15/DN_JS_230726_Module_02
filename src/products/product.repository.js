import { getDataLocalStorage } from "../utils/method";

class ProductRepository {
  getProducts() {
    const products = getDataLocalStorage("products");
  }
}

export class ProductService {
  getHTMLproducts() {
    const product = [];
    const productRepository = new ProductRepository();
    const response = productRepository.getProducts();
    if (response.result.length > 0) {
      const html = response.result.map((item) => `html`).join("");
      return {
        status: "successed",
        message: "get product successful",
        result: { html },
      };
    }
  }
}
