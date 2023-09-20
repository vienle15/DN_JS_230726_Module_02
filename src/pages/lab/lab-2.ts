class QuadraticEquation {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getA(): number {
    return this.a;
  }

  setA(a: number) {
    this.a = a;
  }

  getB(): number {
    return this.b;
  }

  setB(b: number) {
    this.b = b;
  }

  getC(): number {
    return this.c;
  }

  setC(c: number) {
    this.c = c;
  }
  getDiscriminant(): number {
    return this.b * this.b - 4 * this.a * this.c;
  }
  getRoot1(): number {
    if (this.getDiscriminant() >= 0) {
      return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    } else {
      return 0;
    }
  }

  getRoot2(): number {
    if (this.getDiscriminant() >= 0) {
      return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    } else {
      return 0;
    }
  }
}
const quadraticEquation = new QuadraticEquation(6, -6, -6);
console.log("delta", quadraticEquation.getDiscriminant());
console.log("x1", quadraticEquation.getRoot1());
console.log("x2", quadraticEquation.getRoot2());
