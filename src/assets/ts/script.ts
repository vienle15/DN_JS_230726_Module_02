// Interfaces
interface AccountDB {
  username: string;
  password: string;
}

interface Product {
  productImg: string;
  productName: string;
  productPrice: number;
  productSize: string;
  productQuantity: number;
}

// Functions
function getDataFromLocalStorage(key: string): Product[] {
  const data = localStorage.getItem(key);
  return JSON.parse(data || "[]");
}

function renderProduct(data: Product[]) {
  const dataRender = document.querySelector(".render-stay");
  dataRender.innerHTML = "";

  for (const product of data) {
    dataRender.innerHTML += `
        
        <div class="col-12 cold-md-6 col-lg-3">
        <div class="card">
        <img
          src="${product.productImg}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${product.productName}</h5>
          <p class="card-text">Giá:${product.productPrice}</p>
          <p class="card-text">Kích thước: ${product.productSize}</p>
          <p class="card-text">Số lượng: ${product.productQuantity}</p>
          <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
    
          <a href="#" class="btn btn-primary">Mua ngay</a>
        </div>
        </div>
        </div>
      `;
  }
}

function handleSearch() {
  const inputElement = document.querySelector("#input-search");
  const getInput = inputElement.value;

  const data = getDataFromLocalStorage("productList");
  const resultData = data.filter((element) =>
    element.productName.toLowerCase().includes(getInput)
  );

  renderProduct(resultData);
}

// Main code
const accountDB: AccountDB =
  JSON.parse(localStorage.getItem("userLogin")) || [];
const buttonLogin = document.getElementById("login-nosuccess");
const buttonNoLogin = document.getElementById("login-success");
const loginElement = document.querySelector("#login-nosuccess");

if (accountDB.length !== 0) {
  loginElement.innerHTML = `
      <button onclick="logOut()" class="sign-in">
        <a href="../../pages/auth/login/index.html">User.logOut</a>
      </button>
      <button class="sign-in">
        <a href="/pages/user/index.html">Profile</a>
      </button>
    `;
} else {
  loginElement.innerHTML = `
      <button class="sign-in">
        <a href="../../pages/auth/login/index.html">Sign in</a>
      </button>
      <button class="sign-in">
        <a href="../../pages/auth/register/index.html">Register</a>
      </button>
    `;
}

const productArray = getDataFromLocalStorage("productList");
renderProduct(productArray);

document
  .querySelector("#search-button")
  .addEventListener("click", handleSearch);
