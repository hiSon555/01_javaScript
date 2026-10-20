// exercise.js
// 실행방법 : node exercise.js

// 문제1 : 변수 favoriteFood를 선언하고 / 좋아하는 과일 이름을 값으로 할당한 뒤 / 출력
var favoriteFood;
favoriteFood = "수박"
console.log(favoriteFood);         //ㅋㅋ

// 문제2 : 변수 count를 0으로 초기화한 뒤 / 값을 10으로 재할당하고 / 출력
var count = 0;
count = 10;
console.log(count);         //ㅋㅋ

// 문제3 : 아래 코드의 출력 결과를 예상해 주석으로 적은 뒤 실행
console.log(city);          // undifined        //ㅋㅋ
var city = "서울";


//문제4 : 아래 변수 이름 중 사용할 수 없는 것에 X 표시하고 이유를 적으시오
// userAge
// 2ndPlace         X 변수명은 숫자로 시작할 수 없음
// first-name       X js는 하이픈 안 됨
// $total
// return           X 예약어라 안 됨. 다른 거까지 붙이면 됨 //ㅋㅋ
age = 10;
console.log(age)

var a = 10;
var b = 20;
const add = (a, b) => {return a+b; };
console.log(add(a, b));

var e = 10 + 20;
var f = e === 30;
console.log(f)

for (var i = 0; i < 2; i++) {}
console.log(i)

var first = "Ho-young"
var last = "Son";

console.log(`My name is ${first} ${last}.`);

string = `안녕 '나야' "" `;
console.log(string);

var userInfo = {
    id : "abc",
    name: "shy",
    age: 16,
};

console.log(`${userInfo.id} ${userInfo.age}`);