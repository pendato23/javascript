let obj1 = { id: "ldu", site: "naver.com", name: "leedonguk" };
for (var key in obj1) {
  console.log(key + "=" + obj1[key]);
}

let obj2 = [
  { name: "kim", age: 28 },
  { name: "uang", age: 26 },
  { name: "park", age: 24 }
];
for (var i = 0; i < 3; i++) {
  for (var key in obj2[i]) {
    console.log(i + 1 + "번째 데이터의 " + key + " = " + obj2[i][key]);
  }
}
