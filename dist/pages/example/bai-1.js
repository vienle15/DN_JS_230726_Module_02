"use strict";
function countChar(newString) {
    const result = {};
    for (let index = 0; index < newString.length; index++) {
        const key = newString[index];
        if (result[key]) {
            result[key] = result[key] + 1;
        }
        else {
            result[key] = 1;
        }
    }
    return result;
}
console.log(countChar("hello Gehhehe"));
