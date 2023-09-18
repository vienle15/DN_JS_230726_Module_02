let number = 20;

let username: string = "John";

number = 30;
function sum(a: number, b: number): number {
  return a + b;
}

const test_sum = sum(1, 2);
console.log(1111, test_sum);

// Khai báo 1 sinh viên với các trường thông tin
const student: { name: string; age: number; cmnd: number; address: string } = {
  name: "Do",
  age: 30,
  cmnd: 2228889797,
  address: "DN",
};

// tạo funciton tính diện tích hình chữ nhật
let a: number = 10;
let b: number = 20;
function rectangle(a: number, b: number): number {
  return a * b;
}
console.log(rectangle(5, 10));

// khai báo danh sách sản phẩm
const products: string[] = ["shoes", "t-shirt", "coca", "red bull"];
console.log(products);
