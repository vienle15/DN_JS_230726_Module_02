// BÀI 1. Viết 1 một hàm sort dữ liệu trong mảng  yêu cầu truyền vào kiểu sort là tăng dần hoặc giảm dần
// sortData(data)
// sortData(data)
// Input: arr = [1,3,10,20,5]
// Output: [1,3,5, 10,20]
// Input: arr = [“a”, “b”, “d”, “c”]
// Output: arr = [“a”, “b”, “c”, “d”]

function sortData<T>(arr: T[]): T[] {
  arr.sort();
  return arr;
}

sortData([1, 3, 4, 9, 5]);
sortData<number>([1, 3, 4, 9, 5]);

sortData(["a", "c", "e", "b"]);
sortData<string>(["a", "c", "e", "b"]);

// BÀI 2. Viết 1 một hàm để push() dữ liệu vào trong mảng

// Input arr = [1,2]
// addData(arr, 10)  arr = [1,2,10]
function addData<T>(target: T[], data: T) {
  target.push(data);
  return target;
}
// const arr: (number | string)[] = [1, 2, 4, "str"];
const arr = [1, 2, 4];
const arr_2 = [1, 2, 4, "string"];
arr_2.push("string");
addData<number>([1, 2, 4], 2);
addData([1, 2, 4], 2);
addData(["s", "b"], " c");

// Bài 3: Duyệt qua các phần tử trong object

// User = {
// name: “Nguyễn Văn A”,
// age: 20
// }
// readObject(user)
//     Output:         name là “Nguyễn Văn A”
// age là 20
function forObj<T>(object: T) {
  for (const key in object) {
    console.log(key + " " + "have value:" + object[key]);
  }
}
forObj({ name: "Lê Tèo", age: 55 });
// BÀI 4:  Viết function kiểm tra phần tử có trong mảng hay không
// Ví dụ: contanierValue(value, target)  trả về boolean
// Value là giá trị cần kiểm tra, target là mảng cần kiểm tra

function isExist<T>(value: T, target: T[]): boolean {
  for (const lelele of target) {
    if (lelele === value) return true;
  }
  return false;
}

let iii = isExist(5, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(iii);

// Bài 5:  function tìm giá trị lớn nhất trong mảng
// findMax([1,3,4,5])  5
// findMax([“a”, “b”,”d”])  “d”
function findMax<T>(target: T[]): T {
  let max = target[0];
  for (const item of target) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}
let aaa = findMax([12, 3312312, 12, 3121, 45, 66, 9999]);
console.log("max là", aaa);

// bài 6: tạo 1 class là cloneArray, tạo các phương thức add(),sum() cho cloneArray
// add(): thêm phần tử vào mảng
//  sum(): nếu phần tử mảng là number thì cộng vào, ngược lại thông báo không sum được

class cloneArray {
  private value: number[] = [];

  add(item: number) {
    this.value.push(item);
  }
  sum() {}

  getArray() {
    return this.value;
  }
}
const num_1 = new cloneArray();
num_1.add(2);
num_1.add(3);
num_1.add(4);
console.log(num_1.getArray());
