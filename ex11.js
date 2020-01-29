function abc() {
  //매게 변수 X, 반환값 X
  console.log("여기는 기본함수입니다.");
  return false;
}
var def = function() {
  console.log("여기는 기본함수2 입니다.");
};
function ghi(a) {
  //매게 변수 O, 반환값 X
  console.log(a + "가 입력되었습니다.");
}

abc();
def();
ghi(1004);
