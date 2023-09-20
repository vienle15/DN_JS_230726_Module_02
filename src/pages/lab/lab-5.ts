// // function handleCRUD(): void {
// //   const selected = prompt("chọn C/R/U/D");

// //   switch (selected) {
// //     case "C":
// //       break;
// //     case "R":
// //       break;
// //     case "U":
// //       break;
// //     case "D":
// //       break;
// //     default:
// //       alert("chọn đúng C/R/U/D");
// //   }
// // }

// class Employee {
//   public id: number;
//   public name: string;
//   public age: number;
//   public gender: string;
//   public rate: number;
//   public salary: number;

//   constructor(
//     id: number,
//     name: string,
//     age: number,
//     gender: string,
//     rate: number,
//     salary: number
//   ) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.rate = rate;
//     this.salary = salary;
//   }

//   getId(): number {
//     return this.id;
//   }

//   getName(): string {
//     return this.name;
//   }

//   setName(name: string) {
//     this.name = name;
//   }

//   getAge(): number {
//     return this.age;
//   }

//   setAge(age: number) {
//     this.age = age;
//   }

//   getGender(): string {
//     return this.gender;
//   }

//   setGender(gender: string) {
//     this.gender = gender;
//   }

//   getRate(): number {
//     return this.rate;
//   }

//   setRate(rate: number) {
//     this.rate = rate;
//   }

//   getSalary(): number {
//     return this.salary;
//   }

//   setSalary(salary: number) {
//     this.salary = salary;
//   }
// }

// class Company {
//   public companyName: string;

//   constructor(companyName: string) {
//     this.companyName = companyName;
//   }

//   company() {
//     const employees: Employee[] = [
//       new Employee(1, "Trần Hạo Nam", 25, "Nam", 5, 1),
//       new Employee(2, "Triệu Sơn Hà", 23, "Nam", 5, 2),
//       new Employee(3, "Nguyễn Văn Tèo", 28, "Nam", 5, 3),
//       new Employee(4, "Nguyễn Văn Teo", 30, "Nam", 5, 4),
//       new Employee(5, "Đinh Thị Tẻo", 27, "Nữ", 5, 5),
//     ];

//     for (const employee of employees) {
//       employee.salary = Number(employee.rate) * 1300000;
//     }

//     console.log("Danh sách nhân viên công ty", this.companyName);
//     for (const employee of employees) {
//       console.log(
//         "Mã: ",
//         employee.id,
//         ";",
//         "Tên: ",
//         employee.name,
//         ";",
//         "Tuổi: ",
//         employee.age,
//         ";",
//         "Giới tính : ",
//         employee.gender,
//         ";",
//         "Hệ số Lương: ",
//         employee.rate,
//         ";",
//         "Mức lương: ",
//         employee.salary
//       );
//     }
//   }
// }

// const company = new Company("RA");
// company.company();
