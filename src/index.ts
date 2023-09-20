const user = {
  name: "Nguyen Van Teo",
};
console.log(1111111, user);

abstract class Animal {
  abstract speak: (voice: string) => {};
}

class Person {
  public age;
  public name;
  constructor(
    name: string,
    age: number,
    readonly id: string,
    private gender: boolean
  ) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.gender = gender;
  }
  getID = (): string => this.id;
  getName = (): string => this.name;
  setName = (name: string): void => {
    this.name = name;
  };
  setGender(gender: boolean) {
    this.gender = gender;
  }
  getGender = (): boolean => this.gender;
}

const user_1 = new Person("Nguyen Van Ti", 20, "3902S", true);
console.log("check user", user_1);
