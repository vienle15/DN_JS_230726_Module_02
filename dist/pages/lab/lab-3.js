"use strict";
class Fan {
    constructor(speed, status, color, radius) {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this.speed = speed;
        this.status = status;
        this.color = color;
        this.radius = radius;
    }
    getSpeed() {
        switch (this.speed) {
            case this.FAST:
                return "fast";
        }
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getColor() {
        return this.color;
    }
    getRadius() {
        return this.radius;
    }
    getInfo(speed, status, color, radius) {
        return {
            speed: this.speed,
            status: this.status,
            radius: this.radius,
            color: this.color,
        };
    }
}
