class Employee {
  private employeeId: string;
  private employeeName: string;
  private age: number;
  private gen: string;
  private rate: number;
  private salary: number;

  constructor(
    employeeId: string,
    employeeName: string,
    age: number,
    gen: string,
    rate: number
  ) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.age = age;
    this.gen = gen;
    this.rate = rate;
    this.salary = 0;
  }

  inputData() {
    this.employeeId = prompt("Nhập mã nhân viên: ") || "";
    this.employeeName = prompt("Nhập tên nhân viên: ") || "";
    this.age = parseInt(prompt("Nhập tuổi: ") || "0");
    this.gen = prompt("Nhập giới tính: ") || "";
    this.rate = parseFloat(prompt("Nhập hệ số lương: ") || "0");
  }

  calSalary() {
    this.salary = this.rate * 1300000;
  }

  displayData() {
    console.log("Mã nhân viên:", this.employeeId);
    console.log("Tên nhân viên:", this.employeeName);
    console.log("Tuổi:", this.age);
    console.log("Giới tính:", this.gen);
    console.log("Hệ số lương:", this.rate);
    console.log("Lương:", this.salary);
  }
}

class Company {
  company() {
    const employees: Employee[] = [];

    for (let i = 1; i <= 5; i++) {
      const emp = new Employee("", "", 0, "", 0);
      emp.inputData();
      emp.calSalary();
      employees.push(emp);
    }

    for (const emp of employees) {
      emp.displayData();
    }
  }
}
const company = new Company();
