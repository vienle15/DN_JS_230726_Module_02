"use strict";
function handleCRUD() {
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
    constructor(id, name, age, gender, address, phone) {
        id = this.id;
        name = this.name;
        age = this.age;
        gender = this.gender;
        address = this.address;
        phone = this.phone;
    }
    getInfo() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            gender: this.gender,
            address: this.address,
            phone: this.phone,
        };
    }
    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getAge() {
        return this.age;
    }
    get getGender() {
        return this.gender;
    }
    get getAddress() {
        return this.address;
    }
    set setAddress(address) {
        this.address = address;
    }
    get getPhone() {
        return this.phone;
    }
    set setPhone(phone) {
        this.phone = phone;
    }
}
const student_1 = new Student("abcd1234", "Lele", 20, false, "DN", 999999999);
class ClassRoom {
    constructor() {
        this.students = [];
    }
}
