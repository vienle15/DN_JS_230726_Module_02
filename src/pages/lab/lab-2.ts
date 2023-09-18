function handle_bai_2(): void {
  const str: string = prompt("nhập chuỗi") || "";

  const checkData = isValid(str);
  if (checkData) {
    console.log("hop le");
  } else {
    console.log("khong hop le");
  }
}

function isValid(data: string): boolean {
  const dataCheck: { [key: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];
  for (let index = 0; index < data.length; index++) {
    const key = data[index];
    const value = dataCheck[key];
    if (key) {
      // kiem tra xem co key bang gia tri cua data thu i hay khong
      stack.push(value);
    } else {
      // neu khong co char => du lieu khong la nhung truong hop dau mo
      if (data[index] !== stack.pop()) {
        // kiem tra xem dau dong do co phai la da dong cuoi hay khong -- neu khong phai -- false
        return false;
      }
    }
  }
  return stack.length === 0;
}
