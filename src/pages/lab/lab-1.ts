class Circle {
  public radius;
  public color;
  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }
  getRadius = (): number => this.radius;
  getColor = (): string => this.color;
  setRadius = (radius: number): void => {
    this.radius = radius;
  };
  setColor = (color: string): void => {
    this.color = color;
  };
  getPerimeter = () => this.radius * Math.PI * 2;
  getArea = () => Math.PI * this.radius * this.radius;
  getInput = () => {
    const radiusInput = Number(prompt("radius :"));
    const colorInput = String(prompt("color:"));
    this.radius = radiusInput;
    this.color = colorInput;
  };
  getInfo = (
    radius: number,
    color: string,
    perimeter: number,
    area: number
  ) => {
    radius = this.radius;
    color = this.color;
    area = this.getArea();
    perimeter = this.getPerimeter();
  };
}

const circle = new Circle(2, "red");
console.log("fdgjhk", circle.getArea());
circle.getInput();

// class Circle {
//   public radius: number;
//   public color: string;

//   constructor(public radius: number, public color: string) {}

//   getRadius(): number {
//     return this.radius;
//   }

//   setRadius(radius: number) {
//     this.radius = radius;
//   }

//   getColor(): string {
//     return this.color;
//   }

//   setColor(color: string) {
//     this.color = color;
//   }

//   chuVi(): number {
//     return 2 * Math.PI * this.radius;
//   }

//   dienTich(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   inputData(): void {
//     const radiusInput = Number(prompt("radius :"));
//     const colorInput = String(prompt("color:"));

//     this.radius = radiusInput;
//     this.color = colorInput;
//   }

//   displayData(): void {
//     console.log(`Radius: ${this.radius}`);
//     console.log(`Color: ${this.color}`);
//     console.log(`Chu vi: ${this.chuVi()}`);
//     console.log(`Diện tích: ${this.dienTich()}`);
//   }
// }
