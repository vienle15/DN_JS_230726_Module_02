type TInfo = {
  name: string;
  price: number;
  description: string;
};
type TBook = {
  author: string;
  pageCount: number;
};
type TPhone = {
  camera: number;
  brand: string;
};
type TLaptop = {
  brand: string;
  CPU: string;
  Ram: number;
};
type Tproduct = TInfo & (TPhone | TBook | TLaptop);

const productList: object[] = [
  {
    name: "Đắc Nhân Tâm",
    price: 5,
    description: "Đây là sách hay",
    author: "John",
    pageCount: 300,
  },
  {
    name: "Đắc Tâm Nhân",
    price: 10,
    description: "Đây là sách hay",
    author: "John",
    pageCount: 400,
  },
  {
    name: "Iphone 15",
    price: 1299,
    description: "Đây là điện thoại mắc",
    camera: 3,
    brand: "Apple",
  },
  {
    name: "Iphone FLIP Z",
    price: 1299,
    description: "Đây là điện thoại mắc",
    camera: 9,
    brand: "Samsung",
  },
  {
    name: "HP elitebook",
    price: 1299,
    description: "Đây là laptop  mắc",
    CPU: "4 nhân 8 luồng",
    brand: "HP",
    RAM: 16,
  },
  {
    name: "Macbook pro",
    price: 2199,
    description: "Đây là laptop  mắc kinh",
    CPU: "4 nhân 8 luồng",
    brand: "Apple",
    RAM: 16,
  },
];

function pushProduct() {
  const typeProduct = prompt("Nhập loại sản phẩm: book/phone/laptop") || "";
  if (
    typeProduct !== "book" &&
    typeProduct !== "phone" &&
    typeProduct !== "laptop"
  ) {
    alert("nhập lại");
    return;
  }

  const name = prompt("Nhập Tên sp") || "";
  const price = prompt("Nhập giá SP") || 0;
  const description = prompt("Nhập mô tả") || "";

  switch (typeProduct) {
    case "book":
      const author = prompt("Nhập tên tác giả") || "";
      const pageCount = Number(prompt("Nhập số trang")) || 0;
      productList.push({
        name,
        price,
        description,
        author,
        pageCount,
      });
      break;
    case "phone":
      const camera = Number(prompt("Nhập camera")) || 0;
      productList.push({ name, price, description, camera });
      break;
    case "laptop":
      const brand = prompt("Nhập thương hiệu") || "";
      const CPU = prompt("Nhập CPU") || "";
      const RAM = Number(prompt("Nhập RAM")) || 0;
      productList.push({ name, price, description, brand, CPU, RAM });
      break;
  }
}
pushProduct();

function renderProduct() {
  productList.forEach((product, index) => {
    console.log("Tên", product.name);
    console.log("Giá", product.price);
    console.log("Mô tả", product.description);
  });
}
