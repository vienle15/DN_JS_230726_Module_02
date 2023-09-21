abstract class Shape {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  get getColor() {
    return this.color;
  }
  set setColor(color: string) {
    this.color = color;
  }
  abstract getArea(): number;
  abstract display(): void;
}
class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number, color: string) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  display(): void {
    const rectangle = document.querySelector(".asd") as HTMLDivElement;
    rectangle.style.width = `${this.width}px`;
    rectangle.style.height = `${this.height}px`;
    rectangle.style.backgroundColor = this.getColor;
  }
}
class Circle extends Shape {
  private radius: number;
  constructor(radius: number, color: string) {
    super(color);
    this.radius = radius;
  }
  display(): void {
    const circle = document.querySelector(".cirlce") as HTMLDivElement;
    circle.style.width = `${this.radius * 2}px`;
    circle.style.height = `${this.radius * 2}px`;
    circle.style.backgroundColor = this.getColor;
    circle.style.borderRadius = "50%";
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}
const circle = new Circle(100, "red");
console.log("1111111111", circle.getArea());
circle.display();
const rectangle = new Rectangle(100, 200, "gray");
rectangle.display();
