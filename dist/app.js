"use strict";
function sortData(arr) {
    arr.sort();
    return arr;
}
sortData([1, 3, 4, 9, 5]);
sortData([1, 3, 4, 9, 5]);
sortData(["a", "c", "e", "b"]);
sortData(["a", "c", "e", "b"]);
function addData(target, data) {
    target.push(data);
    return target;
}
const arr = [1, 2, 4];
const arr_2 = [1, 2, 4, "string"];
arr_2.push("string");
addData([1, 2, 4], 2);
addData([1, 2, 4], 2);
addData(["s", "b"], " c");
function forObj(object) {
    for (const key in object) {
        console.log(key + " " + "have value:" + object[key]);
    }
}
forObj({ name: "Lê Tèo", age: 55 });
function isExist(value, target) {
    for (const lelele of target) {
        if (lelele === value)
            return true;
    }
    return false;
}
let iii = isExist(5, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(iii);
function findMax(target) {
    let max = target[0];
    for (const item of target) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}
let aaa = findMax([12, 3312312, 12, 3121, 45, 66, 9999]);
console.log("max là", aaa);
