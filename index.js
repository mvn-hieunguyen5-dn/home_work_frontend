//1.  Define a variable
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'
//- Biến let có thể thay đổi giá trị, khai báo lại trên cùng 1 code block của biến còn const thì không.

//2.String Interpolation
const user = { name: 'David' };
const card = { amount: 7, product: "Bar", unitprice: 42 };
let message =`Hello ${user.name}
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(message);

//3.Rest Parameter
const foo = (x, y, ...a)=> {
  console.log(a);
  return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) == 9;

//4. Default paramater value
const sum = (x, y = 7, z = 42) => {
  return x + y + z;
};
sum(1);

//5. Arrow Functions
let evens = [1, 2, 3, 4, 5, 6];
let odds  = evens.map((v) => { return v + 1; });
let pairs = evens.map((v) =>  { return { even: v, odd: v + 1 }; });
let nums  = evens.map((v, i) =>  { return v + i; });
let fives = [];
nums.forEach((v) => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
console.log(fives);

//6.Clases
class Shape {
  constructor(id, x, y){
    this.id = id;
    this.move(x, y);
  }
  move(x, y){
    this.x = x;
    this.y = y;
  }
}
// 7. Import
//---DONE

// ​8. Promise
const showMessAfterTimeout = (msg, who, timeout) => {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole(msg + " Hi " + who + "!");
    }, timeout);
  });
};
console.log(showMessAfterTimeout("", "Foo", 100)
.then((msg) => showMessAfterTimeout(msg, "Bar", 200))
.then((msg) => {
  console.log(`Finish after 300ms: ${msg}`);
}));

//9Example
const emplyees = ['Hieu', 'Nhi', 'Xinh'];
// For of
for (const emplyee of emplyees) {
  console.log(emplyee);
}
// Find index
const isLargeNumber = (emplyee, name) => emplyee == name;
emplyees.findIndex(isLargeNumber,'Nhi');
