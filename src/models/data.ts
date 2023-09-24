interface Product {
  productID: string;
  productName: string;
  productPrice: number;
  productSize: string;
  productQuantity: number;
  productCode: string;
  productImg: string;
}

const productArr: Product[] = [
  {
    productID: "111",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl001",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "222",
    productName: "giày da",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gd001",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "333",
    productName: "giày nhảy",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gn001",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "444",
    productName: "giày chạy",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gc001",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "555",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl002",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "666",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl003",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "777",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl004",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "888",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl005",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "999",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl006",
    productImg: "./images/giay quan jean.webp",
  },
  {
    productID: "000",
    productName: "giày lười",
    productPrice: 5000,
    productSize: "XL",
    productQuantity: 200,
    productCode: "gl007",
    productImg: "./images/giay quan jean.webp",
  },
];

const productDB = JSON.parse(localStorage.getItem("productList"));
if (!productDB) {
  localStorage.setItem("productList", JSON.stringify(productArr));
}
