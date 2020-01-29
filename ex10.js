const set = new Set();
set.add("a");
set.add("b");
set.add("c");
set.add("d");
set.add("e");

console.log("## output by forEach ##");
set.forEach(value => {
  console.log(value);
});
console.log("## output by for-of ##");
for (let item of set) {
  console.log(item);
}
set.delete("c"); //c 요소 제거
console.log(set.has("c")); //c 존재 유무

let arr = Array.from(set);
console.log("## set을 배열로 전환하기 ##");
console.log(arr);
