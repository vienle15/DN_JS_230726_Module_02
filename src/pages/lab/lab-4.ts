function handleCRUD(): void {
  const selected = prompt("chọn C/R/U/D");
  const myClass = new ClassRoom();
  switch (selected) {
    case "C":
      myClass.addStudent(new Student("A", "AAA", 20, false, "DN", 999999999));
      break;
    case "R":
      break;
    case "U":
      break;
    case "D":
      break;
    default:
      alert("chọn đúng C/R/U/D");
  }
}

class Student {
  readonly id;
  private name;
  private age;
  private gender;
  private address;
  private phone;
  constructor(
    id: string,
    name: string,
    age: number,
    gender: boolean,
    address: string,
    phone: number
  ) {
    id = this.id;
    name = this.name;
    age = this.age;
    gender = this.gender;
    address = this.address;
    phone = this.phone;
  }
  getInfo(): {
    id: string;
    name: string;
    age: string;
    gender: boolean;
    address: string;
    phone: number;
  } {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      gender: this.gender,
      address: this.address,
      phone: this.phone,
    };
  }
  get getId(): string {
    return this.id;
  }
  get getName(): string {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
  get getAge(): number {
    return this.age;
  }
  get getGender(): boolean {
    return this.gender;
  }
  get getAddress(): string {
    return this.address;
  }
  set setAddress(address: string) {
    this.address = address;
  }
  get getPhone(): number {
    return this.phone;
  }
  set setPhone(phone: number) {
    this.phone = phone;
  }
}
const student_1 = new Student("abcd1234", "Lele", 20, false, "DN", 999999999);
class ClassRoom {
  private students: Student[] = [];
}
