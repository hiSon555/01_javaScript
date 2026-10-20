
// 1. 숫자 num이 짝수면 "짝수", 홀수이면 "홀수"를 출력하세요
// (%, 삼항 연산자를 사용해서)            // 조건식?참:거짓
var num = 17;

// 홀수 : 2로 나눴을 때 나머지가 있으면, 짝수 : 2로 나눴을 떄 나머지가 없으면

console.log(num % 2 === 0 ? "짝수" : "홀수" );

// 2. 총 금액 total에 배송비 3000원을 +=로 더한 뒤 출력하세요
var total = 25000;
var 배송비 = 3000;
total += 배송비;

console.log(total);

// 3. 아래 비교 결과를 예상해 주석으로 적은 뒤 확인하세요.
// 1 == "1"             // true
// 1 === "1"            // false
// null == undefined    // true
// "b" > "a"            // true 데이터상 b가 a보다 숫자가 큼

console.log(1 == "1");
console.log(1 === "1");
console.log(null == undefined);
console.log("b" > "a");

// 4. 나이 age가 13 이상, 19이하이면 true를 출력하세요 (&& 사용)
// : 둘의 조건 만족할 때 => 논리곱(&&)

var age = 16;
console.log(13 <= age && age <= 19);    // true


// 5. 아래 코드의 출력 결과를 순서대로 예상한 뒤 실행해서 확인하세요
var x = 3;
console.log(x++);   // 1. 화면 출력, 2. x+1
console.log(++x);   // 1. x+1, 2. 화면 출력
console.log(x);     // 1. 화면 출력
// 예상 값 : 3 / 5 / 5


var x = 'A';
var y = 65;

console.log(x == y);    // 아스키 코드로 변환하면 65가 맞지만 ==가 변환해주지 않기에

