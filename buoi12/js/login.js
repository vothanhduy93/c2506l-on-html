// Kiểm tra nếu người dùng đã đăng nhập thì không cho điều hướng về login.html
let isLogin = localStorage.getItem("isLogin");
if (isLogin === "true") {
  window.location.href = "./admin.html";
}

// Event: sự kiện. Trường hợp này là sự kiện click
// Event Listener: lắng nghe sự kiện

let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {
  let username = document.getElementById("txtUsername").value.trim();
  let password = document.getElementById("txtPassword").value.trim();

  let userList = JSON.parse(localStorage.getItem("userList"));
  let loginSuccess = false;

  for (let i = 0; i < userList.length; i++) {
    if (
      username === userList[i].username &&
      password === userList[i].password
    ) {
      localStorage.setItem("isLogin", "true");
      loginSuccess = true;
      window.location.href = "./admin.html";
    }
  }

  loginSuccess ? "" : alert("Bạn đăng nhập thất bại! Vui lòng đăng nhập lại.");
});
