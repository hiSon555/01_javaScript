var day = "토";

switch (day) {
    case "토":
    case "일":
        console.log("주말입니다");
        break;                          // break : 여기까지만 실행해라~~~~
 //   case "월":
    //  console.log("평일입니다");
   // case "화":
    //    console.log("평일입니다");     // 여기까지의 코드를 줄였음
    default:
        console.log("평일입니다");
}
                                        // : 논리적

if (day === "토" || day === "일") {
    console.log("주말입니다.");
} else {
    console.log("평일입니다")
}

var score = 85;

// 이 case에 대해 실행하고 판단해라
switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
        // 맨 마지막 case OR default엔
        // break를 쓰지 않아도 됨 (필요 X)
        // 어차피 코드가 끝나니까
}
