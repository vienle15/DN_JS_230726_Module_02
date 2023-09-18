function handle_bai_3(): void {
  const str: string = prompt("nhap vao 1 chuoi") || "";
  const stringToLowerCase = str.toLowerCase();
  let newString: string = "";
  for (const char of str) {
    if (/[a-z0-9]/.test(char)) {
      newString += char;
    }
  }
  const isPalindrome = checkPalindrome(newString);
  isPalindrome
    ? console.log("/" + str + "/là 1 chuỗi palindrome")
    : console.log("/" + str + "/khong la 1 chuỗi palindrome");
}
function checkPalindrome(str: string): boolean {
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] !== str[str.length - index - 1]) {
      return false;
    }
  }
  return true;
}
