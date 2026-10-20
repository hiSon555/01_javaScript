// 1. 원시 값에 대한 복사
// 원시값은 Stack 메모리 영역에 그대로 쓰여지고, 그 값을 읽어서 그대로 복사

var price = 1000;
var salePrice = price;  // stack 영역의 price 변수 값 1000을 그대로 salePrice에 저장

// 이 시점에서 price엔 1000, salePrice엔 1000

salePrice = 800;
console.log(price, salePrice);  // 1000; 800;



// 2. 객체 (참조자료형)에 대한 '얕은 복사'
var cart = { item: "사과", count: 1 };
// stack 영역의 cart 변수에는 하나의 칸만 존재하므로
// 2개의 프로퍼티를 저장하기 위해 heap 메모리 영역에 2칸을 확보하고 프로퍼티를 저장
// 이후 해당 heap 메모리 영역의 주소값을 stack 영역에 저장

// cart 라는 변수에는 주소값, heap에 따로 데이터 존재

var sameCart = cart;    // cart 라는 변수에 있는 값을 sameCart에 할당
                                                // 결국, sameCart와 cart는 같은 '주소값'을 갖게 됨

sameCart.count = 5;
console.log(cart.count);        // 5;
console.log(cart === sameCart);        // cart에 저장된 주소값, sameCart에 저장된 주소값이 같아서 true

console.log();           // 화면에 값을 찍는 기능을 '실행'
console.log("값");       // 저 값을 화면에 찍어줘


// 일상 생활에서의 복사라는 건, 같은 내용을 가진 다른 종이를 만들어내는 말
// = 깊은 복사
var original = {
    name: "손호영",
    address: { city: '안산' }
};

// 첫 번째 방법 : Object.assign()
// Object.assign() : 원본을 가지고 새로운 대상을 만들어내는 기능
// Object.assign({}, 원본);

var shallow1 = Object.assign({}, original)
// var shallow2 = {name: "손호영", address: 주소값 }


// 두 번째 방법 : 스프레드 문법 (...)
// 스프레드 문법 : 객체나 배열처럼 여러 개의 값을 가진 데이터를 / 낱개로 펼쳐서 보여주는 문법
var shallow2 = { ...original };
// var shallow2 = { name : 손호영, address: 주소값 };

// 이 시점에서, original과 shallow1과 shallow2는 다른 주소값을 가짐
// original.address와 shallow1.address와 shallow2.address는 같은 주소값을 가짐
console.log(shallow2.address === original.address)
// original === shallow2 X, shallow2.address === original.address O
// 원시값은 stack에 다르게 저장되는데, 객체값은 같은 heap에서 주소값이 저장되기에


// 세 번째 방법 (완벽한 Deep copy) : structuredClone()
// structuredClone() : 내부까지 js 엔진이 확인하여 새로운 대상을 만듦
// structuredClone(원본, value, options?)
var deep = structuredClone(original);