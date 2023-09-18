function countChar(newString: string): { [key: string]: number } {
  const result: { [key: string]: number } = {};
  for (let index = 0; index < newString.length; index++) {
    const key: string = newString[index];

    if (result[key]) {
      result[key] = result[key] + 1;
    } else {
      result[key] = 1;
    }
  }
  return result;
}
console.log(countChar("hello Gehhehe"));
