// Kiểm tra người dùng đã nhập hay chưa? Nếu chưa đăng nhập thì chuyển hướng về login.html

let isLogin = localStorage.getItem("isLogin");
if (isLogin === null || isLogin === "false") {
  window.location.href = "./login.html";
}

let btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", function () {
  localStorage.setItem("isLogin", "false");
  window.location.href = "./login.html";
});
