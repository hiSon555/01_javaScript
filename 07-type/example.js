var interger = 10;
var float = 3.14;
var negative = -5;

console.log(interger, float, negative);
console.log(typeof interger, typeof float, typeof negative);

console.log(10 / 3);    <!-- 3.3333333333333335 멍청한 js -->
console.log(10 / 0);
console.log("abc" * 2);   <!-- 계산을 시키는 게 number타입이기에 문자/숫자의 값이 Error가 아닌 NaN이 나옴 -->
console.log(typeof NaN);



// 문자열 타입

var single = '작은 따옴표', number;
var double = "큰 따옴표";
var backtick = `백틱`;

console.log(single, double, backtick);
console.log("줄바꿈을 하고 싶으면 \n이렇게 하면 됩니다.");
console.log(single.length);  // string의 글자수가 나옴



// 템플릿 리터럴

var userName = "손호영";
var age = 26;
var user = {
    id: 40,
    name: "shy",
    phoneNumber: "010-1234-5678",
};

console.log(`${userName}님의 나이는 ${age}입니다.`)
console.log(`${user.name}님의 전화번호는 ${user.phoneNumber}입니다.`);
console.log(`${userName}님은 내년에 ${age + 1}살이 됩니다.`);

// 템플릿 리터럴은 "값"을 string 안에 출력해주는 것
// age + 1이라는 '평가'된 '값'을 출력하는데 무리가 없음


// 불리언(Boolean)

var isStudent = true;
var hasCar = false;

// 이 회원이 관리자인가요? => isAdmin = true

console.log(10 > 5);

// bigint, symbol

console.log(Number.MAX_SAFE_INTEGER);  // number 타입이 정확하게 표현할 수 있는 최대 수 : js는 9007199254740991이 최대지만
console.log(9007199254740991 +6);     // Javascript가 다룰 수 있는 number 이상 숫자를 표기하지 못함
                                      // 강제로 시키면 오작동
console.log(9007199254740991n + 2n);  // bigint + bigint => 정상 작동

var id1 = Symbol("id")  // "id"라는 걸 재료(Key)로 써서 고유한 값(Value)을 불러온 것
var id2 = Symbol("id")
console.log(id1);
console.log(id2);
console.log(id1 === id2);  // id로 보이게 리터럴 해준 것이지 id1과 id2는 다른 것임


var a1 = 123;
var a2 = "123";
console.log(a1);
console.log(a2);
console.log(a1 === a2);

var string;
string = "뭐시깽이|'나는나나나|'"

console.log(string)

var userInfo = {
    name : "홍길"
}

if (userInfo.name === "홍길동"){
    var string = 10;
}

console.log(string)
