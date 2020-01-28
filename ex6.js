var num1 = [20, 60, 10, 70, 50, 40];
var num2 = new Array(70, 40, 60, 55, 45, 35);

console.log("num1의 요소의 수:" + num1.length);
var mixArr = ["a", 10, "b", 20, new Date(), "kim"];
var objArr = [
  {
    id: 20202801,
    name: "yang",
    dept: "developer"
  },
  {
    id: 20202802,
    name: "lee",
    dept: "designer"
  },
  {
    id: 20202803,
    name: "kim",
    dept: "frontend"
  }
];
var obj = { "num ": 1004, name: "park", position: "publisher" };
console.log(num1);
console.log(num2);
console.log(mixArr);
console.log(objArr);
console.log(objArr[2].name + objArr[2].dept);
console.log(obj);
