// 1. 변수 선언과 할당

var score; // 선언 : score라는 이름의 저장 공간을 만듦

// console.log(score) -> score 변수 안의 값을 화면에 출력하는 영역
console.log(score);         // udnifined (아직 초기화가 일어나지 않음)

score = 10;         // 할당 : 저장 공간에 값을 넣음
console.log(score);         // 10

var name = "손호영"        // 선언과 할당(초기화)을 한 번에; : string은 프로그램이 보조해주기에 나온 것 내가 직접 친 게 아님
console.log(name);


// 2. 호이스팅(Hoisting)
// var로 선언한 변수 선언부가 코드의 맨 위로 끌어올려진 것처럼 동작되는 것

console.log(hoisting);          // 선언한 게 없기에 오류뜸 -> 호이스팅 ->"undifined"
var hoisting = "나중에 선언된 변수";        //호이스팅 덕에 첫줄로 읽힘
console.log(hoisting);          //"나중에 선언된 변수"


// 3. 변수명 작명 규칙

var userName = "Son";      // 영문, 숫자, _, $ 사용가능 / camelCase
var _count = 1;          // _로시작 가능
var $price = 1000;      // $로 시작 가능

// var 1st = "x";       // 숫자로 시작불가; 빨간줄로 알려줌
//var user-name = "Son"         // 하이픈(-) 사용 불가
// var var = 4;         // 시스템이 사용중인 예약어는 변수명으로 사용 불가; 단독으로만 안 되고 다른 거 붙이면 가능

apple = "사과";
var Apple= "대문자 사과"; // 안 됨 헷갈림



// 4. 표기법

var myFirstName = "카멜케이스";       // 자바스크립트 변수나 함수에 사용
var MyComputerIsGood = "파스칼 케이스";     // 자바스크립트 클래스나 타입에 사용
var my_first_name  = "스네이크케이스";    //파이썬에서 자주 사용
// var kebab-case       // css에서 사용


// 5. 동적 타이핑
// 같은 변수에 다른 종류의 값을 넣을 수 있음

const arr = [];
arr[0] = 7;
arr[1] = "String Save";
arr[1] = "string";
console.log(arr);

apple = "사과"

console.log(apple)

console.log(Object.keys(global));

