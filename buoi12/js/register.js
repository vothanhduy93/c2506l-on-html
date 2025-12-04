let userList = [];

let isUsernameExisted = function (username) {
  let userList = JSON.parse(localStorage.getItem("userList"));

  for (let i = 0; i < userList.length; i++) {
    if (username === userList[i].username) {
      return true;
    } else {
      return false;
    }
  }
};

let btnRegister = document.getElementById("btnRegister");
btnRegister.addEventListener("click", function () {
  let username = document.getElementById("txtUsername").value.trim();
  let email = document.getElementById("txtEmail").value.trim();
  let password = document.getElementById("txtPassword").value.trim();
  let retypePassword = document
    .getElementById("txtRetypePassword")
    .value.trim();
  let errorCount = 0;
  let errorMessage = "";

  if (username === "") {
    errorCount++;
    errorMessage += "Vui lòng nhập username. \n";
  }

  if (isUsernameExisted(username)) {
    errorCount++;
    errorMessage += "Username đã tồn tại. \n";
  }

  if (email === "") {
    errorCount++;
    errorMessage += "Vui lòng nhập email. \n";
  }

  if (password !== retypePassword || password === "" || retypePassword === "") {
    errorCount++;
    errorMessage += "Mật khẩu không trùng khớp. \n";
  }

  if (errorCount !== 0) {
    let errorMessageElement = document.getElementsByClassName("error")[0];
    errorMessageElement.textContent = errorMessage;

    errorMessageElement.classList.remove("hidden");
  } else {
    let user = {
      username: username,
      email: email,
      password: password,
      retypePassword: retypePassword,
    };

    userList.push(user);

    localStorage.setItem("userList", JSON.stringify(userList));
    console.log(userList);

    alert("Đăng ký tài khoản thành công.");
  }
});
