"use strict";
function handle_bai_2() {
    const str = prompt("nhập chuỗi") || "";
    const checkData = isValid(str);
    if (checkData) {
        console.log("hop le");
    }
    else {
        console.log("khong hop le");
    }
}
function isValid(data) {
    const dataCheck = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const stack = [];
    for (let index = 0; index < data.length; index++) {
        const key = data[index];
        const value = dataCheck[key];
        if (key) {
            stack.push(value);
        }
        else {
            if (data[index] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
