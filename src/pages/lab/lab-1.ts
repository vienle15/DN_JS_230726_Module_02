const form = document.querySelector("#myForm") as HTMLFormElement;

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const nameElement = document.querySelector("#nameIp") as HTMLInputElement;
  const addressElement = document.querySelector(
    "#addressIp"
  ) as HTMLInputElement;
  const stateElement = document.querySelector(
    "#stateSelect"
  ) as HTMLSelectElement;

  // Lấy giá trị của radio button được chọn trong course và game
  const courseElements = document.querySelectorAll(
    '#course input[type="radio"]:checked'
  ) as NodeListOf<HTMLInputElement>;
  const courseValues = Array.from(courseElements).map(
    (element) => element.value
  );

  const gameElements = document.querySelectorAll(
    '#game input[type="radio"]:checked'
  ) as NodeListOf<HTMLInputElement>;
  const gameValues = Array.from(gameElements).map((element) => element.value);

  const dayElement = document.querySelector("#day") as HTMLSelectElement;
  const monthElement = document.querySelector("#month") as HTMLSelectElement;
  const yearElement = document.querySelector("#year") as HTMLSelectElement;

  const name = nameElement.value;
  const address = addressElement.value;
  const state = stateElement.value;
  const day = dayElement.value;
  const month = monthElement.value;
  const year = yearElement.value;

  console.log("Name:", name);
  console.log("Address:", address);
  console.log("State:", state);
  console.log("Course:", courseValues);
  console.log("Game:", gameValues);
  console.log("Day:", day);
  console.log("Month:", month);
  console.log("Year:", year);
});
