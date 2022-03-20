console.groupCollapsed("EXAMPLE");
//-----------------------------------------------
console.group("#Differences between == and ===");
var a = [1, 2, 3];
var b = [1, 2, 3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

var e = "text";
var f = "te" + "xt";
console.log(a == b); // false
console.log(a === b); // false

console.log(c == d); // false
console.log(c === d); // false

console.log(e == f); // true
console.log(e === f); // true
console.groupEnd();
//-----------------------------------------------------
console.group("#Example of javascript methods:");
console.group("##MAP");
console.log("Mục đích: Tạo một mảng mới sau khi xử lý chúng với 1 function");
const array1 = [1, 4, 9, 16];
console.log(array1);
console.log("x2");
const map1 = array1.map((x) => x * 2);
console.log(map1);
console.groupEnd();

console.group(
  "##filter: Tạo một mảng mới với các phần tử thõa mãn điều kiện từ mảng cũ"
);
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
console.log(words);
const result = words.filter((word) => word.length > 6);
console.log("Fillter 7 ký tự");
console.log(result);
console.groupEnd();

console.group(
  "##Reduce là phương thức thực thi một hàm và trả về một giá trị đơn:"
);
const numbers = [175, 50, 25];
const sum = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}
console.log("Sum of [" + numbers + "] = " + sum);
console.groupEnd();
console.group("## Find :phương thức tìm kiếm kết quả đầu tiên đạt điều kiện:");
const array2 = [5, 6, 12, 8, 130, 44];
const found = array2.find((element) => element > 10);
console.log(array2 + "--[>10]--->>>" + found);
console.groupEnd();

console.group(
  "##Some: Kiểm tra xem có ít nhất 1 phần tử của mảng thõa mãn điều kiện hay không"
);
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
const ten = (element) => element > 10;
console.log(array);
console.log("Có số chẵn :" + array.some(even));
console.log("Có số lớn hơn 10:" + array.some(ten));
console.groupEnd();
console.groupEnd();
//------------------------------------------------------
console.group("# Add a new element to an array[] (at the end)");
var array3 = [1, 2, 3];
console.log(array3);
console.log("Push 4");
array3.push(4);
console.log(array3);
console.groupEnd();

console.group("# add a new element to an array[] (at the beginning)");
var array3 = [2, 3, 4];
console.log(array3);
console.log("unshift 1");
array3.unshift(1);
console.log(array3);
console.groupEnd();

console.group("# removing an element in array[]");
function removeElement(array, elem) {
  var index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  }
}
var arr = [1, 2, 3, 4, 5];
removeElement(arr, 4);
console.log("Mảng từ 1 tới 5 xóa phần tử số 4 :" + arr);
console.groupEnd();
console.groupEnd();

console.group("PLAYGROUND");
console.group(
  "1.Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sums"
);
function function1(a, b) {
  return a == b ? (a + b) * 3 : a + b;
}
console.log("function1[5 ,10] =" + function1(5, 10));
console.log("function1[5 ,5 ]    =" + function1(5, 5));
console.groupEnd();

console.group(
  "2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19."
);
function function2(a) {
  return a > 19 ? (a - 19) * 3 : 19 - a;
}
console.log("func3[12]=" + function2(12));
console.log("func3[19]=" + function2(19));
console.log("func3[22]=" + function2(22));
console.groupEnd();
console.group(
  "​3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.​"
);

function MaskedDivisibleBy3(value) {
  var result = [];

  for (var i = 0; i <= 9; i++) {
    var newA = value.replace("*", i);
    if (parseInt(newA) % 3 == 0) {
      result.push(newA);
    }
  }
  return result;
}
console.log("[1*9] % 3 == 0  : " + MaskedDivisibleBy3("1*9"));
console.log("[1234567890*] % 3 == 0  : " + MaskedDivisibleBy3("1234567890*"));
console.groupEnd();
console.group(
  "​4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.​"
);
function MaskedDivisibleBy6(a) {
  var result = [];

  for (var i = 0; i <= 9; i++) {
    var newA = a.replace('*', i);
    if (parseInt(newA) % 6 == 0) {
      result.push(newA);
    }
  }
  return result;
}
console.log("1*9:        "+ MaskedDivisibleBy6('1*9'));
console.log("1234567890*: "+ MaskedDivisibleBy6('1234567890*'));
console.groupEnd();
