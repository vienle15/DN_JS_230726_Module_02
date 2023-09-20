"use strict";
class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA() {
        return this.a;
    }
    setA(a) {
        this.a = a;
    }
    getB() {
        return this.b;
    }
    setB(b) {
        this.b = b;
    }
    getC() {
        return this.c;
    }
    setC(c) {
        this.c = c;
    }
    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }
    getRoot1() {
        if (this.getDiscriminant() >= 0) {
            return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
        }
        else {
            return 0;
        }
    }
    getRoot2() {
        if (this.getDiscriminant() >= 0) {
            return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
        }
        else {
            return 0;
        }
    }
}
const quadraticEquation = new QuadraticEquation(6, -6, -6);
console.log("delta", quadraticEquation.getDiscriminant());
console.log("x1", quadraticEquation.getRoot1());
console.log("x2", quadraticEquation.getRoot2());
