// Event: sự kiện. Trường hợp này là sự kiện click
// Event Listener: lắng nghe sự kiện

let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {
  let username = document.getElementById("txtUsername").value.trim();
  let password = document.getElementById("txtPassword").value.trim();

  if (username === "admin" && password === "123456") {
    // alert("Bạn đăng nhập thành công!");
    window.location.href = "./admin.html";
  } else {
    alert("Bạn đăng nhập thất bại! Vui lòng đăng nhập lại.");
  }
});
