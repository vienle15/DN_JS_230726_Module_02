"use strict";
const user = {
    name: "Nguyen Van Teo",
};
console.log(1111111, user);
class Animal {
}
class Person {
    constructor(name, age, id, gender) {
        this.id = id;
        this.gender = gender;
        this.getID = () => this.id;
        this.getName = () => this.name;
        this.setName = (name) => {
            this.name = name;
        };
        this.getGender = () => this.gender;
        this.name = name;
        this.age = age;
        this.id = id;
        this.gender = gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
}
const user_1 = new Person("Nguyen Van Ti", 20, "3902S", true);
console.log("check user", user_1);
