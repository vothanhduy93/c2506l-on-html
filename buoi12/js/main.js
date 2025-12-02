// let x = 10;

// if khuyết
// if (x < 10) {
//   console.log("x < 10");
// } else {
//   console.log("x >= 10");
// }

// console.log(x < 10 ? "x < 10" : "x >= 10");

// let x = 6,
//   y = 3;

// let z = x < 10 && y > 1;

// console.log(z);

// let x = 6,
//   y = 3;

// let z = 6 && 3;

// console.log(z);

// let x = 6,
//   y = 3;

// let z = 6 || x > 10;

// console.log(z);

// Vòng lặp for
// for(biểu thức 1; biểu thức 2; biểu thức 3){
//     // khối lệnh
// }

/**
 * Biểu thức 1: khởi tạo giá trị cho biến điều khiển (chỉ chạy 1 lần duy nhất)
 * Biểu thứ 2: kiểm tra điều kiện để tiếp tục vòng lặp hay thoát khỏi vòng lặp
 * Biểu thức 3: thay đổi giá trị của biến điều khiển
 */

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

let firstName = "Duy";
let lastName = "Vo Thanh";

// console.log(lastName + " " + firstName);

// template string cho phép dev sử dụng dấu backtick `

// console.log(`Họ tên đầy đủ là: ${lastName} ${firstName}`);

// console.log(firstName.length);

// console.log("This's my mom");

// console.log(typeof firstName);

// let str = new String("Duy");
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.length);

// Cú pháp function declaration

function tinhTong(a, b = 0) {
  return a + b;
}

console.log(tinhTong()); // NaN: Not A Number (không phải là số)
console.log(tinhTong(1));
console.log(tinhTong(1, 2));

// Cú pháp function expression (biểu thức hàm)
// Hàm không có tên thì gọi là Anonymous function (hàm ẩn danh)

let sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 4));

// arrow function (hàm mũi tên)

// let arrowFunction = (a, b) => {
//   return a + b;
// };

let arrowFunction = (a, b) => a + b;

console.log(arrowFunction(4, 5));
