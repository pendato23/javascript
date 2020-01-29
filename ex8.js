const map = new Map();
map.set("2020001", "kim");
map.set("2020002", "lee");
map.set("2020003", "so");

console.log("## forEach with arrow ##");
map.forEach((value, key) => console.log(key, value));
console.log("## for-of ##"); //for-in[x], for-of[o]
for (let item of map) {
  console.log(item[0], item[1]);
}
console.log("## for-of2 ##");
for (let [key, value] of map) {
  console.log(key, value);
}
console.log("## key값만 추출하는 keys() ##");
const keys = map.keys(); //keys() 메서드는 Map의 key값만 별도로 추출함
for (let key of keys) {
  console.log(map.get(key)); //map.get(key) - 맵에 기억된 데이터 출력
}
console.log("## map.get(key) ##");
console.log("key가 2020002인 데이터 :" + map.get(2020002));
map.delete("2020002"); //key가 2020002인 데이터 소거
console.log("2020002를 삭제한 후 값은 ?", map.has("2020002"));
//map.has(key) : 메모리맵에 key에 해당햐ㅏ는 값이 존재하는지 true나 false로 유무 출력
