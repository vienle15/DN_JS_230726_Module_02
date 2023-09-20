"use strict";
class Circle {
    constructor(radius, color) {
        this.getRadius = () => this.radius;
        this.getColor = () => this.color;
        this.setRadius = (radius) => {
            this.radius = radius;
        };
        this.setColor = (color) => {
            this.color = color;
        };
        this.getPerimeter = () => this.radius * Math.PI * 2;
        this.getArea = () => Math.PI * this.radius * this.radius;
        this.getInput = () => {
            const radiusInput = Number(prompt("radius :"));
            const colorInput = String(prompt("color:"));
            this.radius = radiusInput;
            this.color = colorInput;
        };
        this.radius = radius;
        this.color = color;
    }
}
const circle = new Circle(2, "red");
console.log("fdgjhk", circle.getArea());
circle.getInput();
