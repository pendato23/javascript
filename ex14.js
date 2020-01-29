let st = {
  id: 2020001,
  name: "lee",
  scores: [10, 20, 30, 40, 50],
  getTotalScore: function() {
    return this.scores.reduce((prev, curr) => prev + curr);
  }
};
console.log(st.name + "님의 점수는 " + st.getTotalScore() + "입니다.");
//위 예제에서 st는 인스턴스라하며, id/name/scores 등을 속성(프로퍼티)라고 하고, getTotalScore를 메서드라고 한다.
//인스턴스 : 클래스에 의해 만들어진 언제든지 데이터가 변할 수 있는 객체로서 클래스로 부터 유도되어진다.
//클래스 : 각기다른 하나 이상의 속성(멤버변수=프로퍼티)과 멤버 메서드로 이루어지며 객체 인스턴스를 만들기 위한 모임(집합)
//속성(멤버변수): 객체가 가지는 속성 값을 저장하기 위한 파라미터
//메서드(멤버 메서드) : 객체가 처리해야 할 일을 정의하기 위한 파라미터
//this : 객체 자기 자신을 의미
