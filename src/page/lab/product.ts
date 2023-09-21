class Product {
  readonly id: number;
  private name: string;
  private price: number;
  private quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
  }

  get info(): { id: number; name: string; price: number; quantity: number } {
    return {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      id: this.id,
    };
  }
  set setName(name: string) {
    this.name = name;
  }
  set setPrice(price: number) {
    this.price = price;
  }
  set setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}

class Bakery {
  private productList: Product[] = [];

  createProduct(data: { name: string; price: number; quantity: number }) {
    let id: number = 1;
    if (this.productList.length > 0) {
      id = this.productList[this.productList.length - 1].id + 1;
    }

    const newProduct = new Product(id, data.name, data.price, data.quantity);
    this.productList.push(newProduct);
  }
  showAllProduct() {
    const products = this.productList.map((product) => product.info);
    return products;
  }
  deleteProduct(id: number) {
    // const index = this.productList.findIndex((product) => product.id === id);
    // this.productList.splice(index, 1);

    const newList = this.productList.filter((product) => product.id !== id);
    this.productList = newList;
  }

  updateProduct(data: any) {
    if (data?.id) {
      const product = this.productList.find((product) => product.id == data.id);
      const index = this.productList.findIndex(
        (product) => product.id == data.id
      );

      const newProduct = { ...product?.info, ...data };
      const productAdd = new Product(
        newProduct.id,
        newProduct.name,
        newProduct.price,
        newProduct.quantity
      );

      this.productList.splice(index, 1, productAdd);
    }
  }

  buyProduct(id: number): undefined | Product {
    const product = this.productList.find((prduct) => prduct.id == id);
    if (product === undefined) {
      alert("Sản phẩm không tồn tại");
      return;
    }

    if (product.info.quantity > 0) {
      // Giảm số lượng trong Bakery
      product.setQuantity = product.info.quantity - 1;
      //   this.updateProduct(product);
      console.log(11111, this.showAllProduct());

      //   Phải tạo sản phẩm mới với số lượng mới
      const newProduct = new Product(
        product.info.id,
        product.info.name,
        product.info.price,
        1
      );
      return newProduct;
    } else {
      alert("Sản phẩm hết hàng");
    }
  }
  returnProduct(id: number, quantity: number) {
    const product: any = this.productList.find((prduct) => prduct.id == id);
    product.setQuantity = product.info.quantity + quantity;
  }
}

const store = new Bakery();

store.createProduct({ name: "Bánh mì", price: 20000, quantity: 50 });

store.createProduct({ name: "Bánh bao", price: 15000, quantity: 0 });
store.createProduct({ name: "Bánh trung thu", price: 150000, quantity: 200 });

store.updateProduct({ id: 3, price: 80000 });
store.deleteProduct(1);

console.log(store.showAllProduct());

const store_2 = new Bakery();

class MyCart {
  private myCart: Product[] = [];

  buyProduct(id: number) {
    // Trừ sản phẩm
    const product = store.buyProduct(id);
    // name, id, price từ --> Bakery --> tạo 1 sản phẩm mới với số lượng là 1 --> cart

    if (!product) {
      return;
    }

    const productCart = this.myCart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (productCart) {
      productCart.setQuantity = productCart.info.quantity + 1;
    } else {
      this.myCart.push(product);
    }
  }

  showAllCart() {
    const products = this.myCart.map((product) => product.info);
    return products;
  }
  deleteCart(id: number) {
    const productCart = this.myCart.find(
      (productInCart) => productInCart.id === id
    );

    if (!productCart) {
      return;
    }

    this.myCart.splice(this.myCart.indexOf(productCart), 1);
  }

  updateCart(id: number, quantity: number) {
    this.myCart.forEach((product) => {
      if (product.info.id === id) {
        product.setQuantity = product.info.quantity + quantity;
        store.returnProduct(id, quantity - 1);
        console.log(333, product.info.quantity);
      }
    });
  }
}

const user_1 = new MyCart();
user_1.buyProduct(3);
user_1.buyProduct(3);

console.log("22222", user_1.showAllCart());

user_1.deleteCart(1);

console.log("33333", user_1.showAllCart());
let product: Product[] = [new Product()];
