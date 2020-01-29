class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log("아무개가 웁니다. 아무개는 이름도 나이도 모릅니다.");
  }
  speak(name) {
    console.log(name + "가 웁니다. 나이는 모릅니다.");
  }
  speak(name, age) {
    console.log(name + "이 웁니다. 나이는" + age + "세 입니다.");
  }
}

let a1 = new Animal();

console.log(a1);
// 메서드 오버로딩 : 하나의 클래스 안에서 변경되는것
// 메서드 오버라이딩 : 상속 받은 뒤에 변경되는
