"use strict";
function handle_bai_4() {
  const s = prompt("Nhập chuỗi s: ");
  const t = prompt("Nhập chuỗi t: ");
  const isPermutation = (s, t) => {
    if (s.length !== t.length) {
      return false;
    }
    const sortedS = s.split("").sort();
    const sortedT = t.split("").sort();
    for (let i = 0; i < sortedS.length; i++) {
      if (sortedS[i] !== sortedT[i]) {
        return false;
      }
    }
    return true;
  };
  console.log(isPermutation(s, t));
}
