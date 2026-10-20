
// 1. 산술 연산자

console.log(10 + 3);    // 13
console.log(10 - 3);    // 7
console.log(10 * 3);    // 30
console.log(10 / 3);    // 3.3333333
// 3333...5 X 딱 떨어지지 않는 소숫점 계산을 시키면 믿을 수 없음
console.log(10 % 3);    // 1
console.log(2 ** 3);    // 8

// 증감연산자 : 전위 종감 연산자, 후위 증감 연산자

var a = 5;
console.log(a++);   //  화면 : 5, a의 값 : 6
console.log(a);     //  화면 : 6
console.log(++a);   //  화면 : 7, a의 값 : 7
console.log(a);     //  화면 : 7, a의 값 : 7



// 2. 할당 연산자

var total = 10;
total += 5;             // 15
// var temp += 5;       // undefined + 5 : 초기화되지 않은 상태에서 더하는 연산을 선언을 해선 안 됨
total -= 3;             // 12
total *= 2;             // 24
total /= 4;             // 6
console.log(total)

var message = "안녕";
message += "하다";       // + 연산이 산술 연산이 아닌, 연결 연산이 동작
console.log(message);   // 안녕하다


// 3. 비교 연산자
// ==, ===이 있을 때 ===을 기본적으로 사용한다고 생각해야 함
console.log(5 == "5");      // true (느슨한 비교) : 대충 비슷하면 맞대
console.log(5 === "5");     // false    (엄격한 비교) : 정확히 같아야 해
console.log(false == 0);    // true (-> 컴퓨터 내부적으로 false는 0으로 기록 중)
console.log(true == 1);     // true   (-> 컴퓨터 내줍적으로 true는 1로 기록 중)
console.log(undefined == null);     // true (느슨한 비교) : 둘 다 값이 없는 상태라

console.log(5 != "5");      // !true => false : == + 부정이니까
console.log(5 !== "5");     // !false => true : === + 부정이니까



// 4. 삼항 연산자 => 조건식 ? 참일 때 : 거짓일 때

var score = 75;
var result = score >= 60 ? "합격" : "불합격";
console.log(result);


// 5. 논리 연산자

var age = 25;
var hasTicker = true;
console.log(age < 19 || hasTicker);     // true => 논리합(OR), age는 false지만 hasTicker는 true니까 둘 중 하나만 true면 되기에
console.log(age >= 19 && hasTicker);    // true => 논리곱(AND), age는 true, hasTickr도 true 둘 모두 참이기에
console.log(!hasTicker);                // false => 부정(NOT), true 반대로 출력됨


// 6. typeof 연산자
// 나오는 결과값 8가지
// number, string, boolean, undefined, symbol, bigint, object, function : 원시6, 함수1, 오브젝트1
