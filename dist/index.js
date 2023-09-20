"use strict";
class Animal {
    constructor(weight) {
        this.weight = weight;
    }
}
class Carnivore extends Animal {
    constructor(weight, gender) {
        super(weight);
        this.gender = gender;
    }
}
