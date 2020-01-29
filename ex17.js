class Pro {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return this.name + "님의 나이는 " + this.age + "세 입니다.";
  }
}

let w1 = new Pro("lee", 49);
let w2 = new Pro("kim", 30);
console.log(w1.getInfo());
console.log(w2.getInfo());
