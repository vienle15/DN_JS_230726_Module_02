"use strict";
function forObj(object) {
    for (const key in object) {
        console.log(key + " " + "have value:" + object[key]);
    }
}
forObj({ name: "Lê Tèo", age: 55 });
