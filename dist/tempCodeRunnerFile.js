"use strict";
class cloneArray {
    constructor() {
        this.value = [];
    }
    add(item) {
        this.value.push(item);
    }
    getArray() {
        return this.value;
    }
}
const num_1 = new cloneArray();
num_1.add(2);
num_1.add(3);
num_1.add(4);
console.log(num_1.getArray());
