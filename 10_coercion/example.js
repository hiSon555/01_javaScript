
// 1. 암묵적 타입 변환 : 자바스크립트가 알아서 바꾸는 형변환

// String 변환 : + 연산자에 문자열이 하나라도 있으면
console.log(1 + "2");            // "12"
console.log("값 : " + true);     // "값 : true"
console.log(`${100}`);          // "100"
console.log(typeof `${100}`);   // strirng

// number 변환 : +를 제외한 산술 연산자, 비교 연산자
console.log("10" - 3);          // 7
console.log("6" * "2");         // 12
console.log(+"42");             // 단항 + 연산자 : 42
console.log(typeof +"42");      // number
console.log("abc");             // NaN
console.log(+true, +false, +null, +undefined);  // 1 0 0 NaN

// boolean 변환
// falsy 값으로 평가되는 것 : false, 0, "", null, undefined, NaN
// 그 외의 나머지들은 모두 truthy 취급



// 2. 명시적 타입 변환 : 개발자가 의도를 담아 코드화해서 직접 바꾸는 형변환

console.log(String(123), typeof String(123));   // "123" string
console.log((123).toString());                              // "123"
console.log(Number(123), typeof Number(123));   // 123 number
console.log(Boolean(""), Boolean("hello"));     // false true, Boolean은 잘 안 씀 !!가 편해서
console.log(!!"hello");                                     // "hello" -> !: false -> !!: true

// Number() vs parseInt()
console.log(Number("100px"));       // NaN, Number()는 전체가 숫자여야 함
console.log(parseInt("100px"));     // 100, parseInt()는 앞자리부터, 순차적으로 읽어서 변환함
console.log(Number("3.9"));         // 3.9, 정수든 소수든 상관없이 변환 가능
console.log(parseInt("3.9"));       // 3, parseInt()는 정수만 변환 가능
console.log(parseFloat("3.9"));     // 3.9, parseFloat()는 소수 변환 가능, 단점: 느림



// 3. 단축평가 : || (논리합), && (논리곱)
console.log("" || "기본값");                // false || true -> "기본값"(true값)
console.log("홍길동" || "기본값");           // "홍길동" -> 좌항부터 판별하고 평가, 참이면 오른쪽은 평가X 왼쪽 값 반환

console.log(0 && "실행 안됨");              // 0 -> false true니까 0(false값) 출력 why? && 우항으로 못 넘어가서
console.log("로그인 됨" && "환영합니다");    // true true 니까 우항값 반환 -> "환영합니다"

var isLoggedIn = true;           // 할당 값은 변화가 가능한 것을 넣음
isLoggedIn && console.log("로그인을 한 사용자에게만 이 메세지가 보입니다.");



// 4. 옵셔널 체이닝 ( ?. )
var user = {
    name: "손호영",
    address: null,          // 최초 가입 땐 주소를 안 넣고, 주문을 하면 그제서야 회원 정보를 주문서에 있는 주소로 업데이트
}

// console.log(user.address.city);              // TypeError : Cannot read properties of null (네가 말한 항목을 찾을 수 없어!)
//사용자 중에 address 값이 있는 사용자가 있고, address 값이 없는 사용자가 있어버리게 됨
console.log(user?.address?.city);               // address가 없으면 undefined, address가 있으면 그 내부에 접근
console.log(user.profile?.image?.url);          // profile이 없기에 undefined



// 5. null 병합 연산자
var count = 0;
console.log(count || 10);       // 10
console.log(count ?? 10);       // 0

var volume = null;                      // "값이 없으면" 우항이 반환되고, 아니라면 좌항이 반환됨
console.log(volum ?? "이게 나가야 됨");        // "이게 나가야 됨"