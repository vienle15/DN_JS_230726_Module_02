class Animal {
  weight: number;
  constructor(weight: number) {
    this.weight = weight;
  }
}

class Carnivore extends Animal {
  gender: boolean;
  constructor(weight: number, gender: boolean) {
    super(weight);
    this.gender = gender;
  }
}
