"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
}
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    display() {
        const rectangle = document.querySelector(".asd");
        rectangle.style.width = `${this.width}px`;
        rectangle.style.height = `${this.height}px`;
        rectangle.style.backgroundColor = this.getColor;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    display() {
        const circle = document.querySelector(".cirlce");
        circle.style.width = `${this.radius * 2}px`;
        circle.style.height = `${this.radius * 2}px`;
        circle.style.backgroundColor = this.getColor;
        circle.style.borderRadius = "50%";
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
const circle = new Circle(100, "red");
console.log("1111111111", circle.getArea());
circle.display();
const rectangle = new Rectangle(100, 200, "gray");
rectangle.display();
