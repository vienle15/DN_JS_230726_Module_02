function sumArray(num: number[], target: number): any {
  let result: any = [];

  for (let i = 0; i < sumArray.length; i++) {
    let tmp = target - num[i];

    for (let m = 0; m < num.length; m++) {
      if (num[m] === tmp) {
        result.push({ index_1: num[i], index_2: num[m] });
      }
    }
  }
  return result;
}
console.log("nums sum and target", sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
