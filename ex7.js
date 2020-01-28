var colors = ["red", "blue", "pink"];
console.log("원래 배열값 :" + colors);

colors.push("yellow");
console.log("요소를 추가한 후 :" + colors);

colors.pop();
console.log("요소를 제거한 후 :" + colors);

colors.sort();
console.log("요소를 정렬한 후 : " + colors);

colors.reverse();
console.log("요소를 역순으로 바꾼 후 : " + colors);

colors.push("black");
const splColor = colors.splice(0, 2);
console.log("스플라이스 한 후1 :" + splColor);
console.log("스플라이스 한 후2 :" + colors);
const newColor = colors.join("-");
console.log("join을 한 후 : " + newColor);
