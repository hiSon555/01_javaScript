var score = 85;

// if (score >= 90) {
   // console.log("A");
//} else {
  //  console.log("불합격");
// }

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B")
} else if (score >= 70) {
    console.log("C")
} else if (score >= 60) {
    console.log("D")
} else  {
    console.log("F");
}

if (score < 60) {
    console.log("F")
} else if (score < 70) {
    console.log("D");
} else if (score < 80) {
    console.log("C")
} else if (score < 90) {
    console.log("B");
} else {
    console.log("A");
}


// 삼항연산자 => 조건식 ? 참일 때 실행 : 거짓일 때 실행;
// if문일 때 => if (조건식) {참일 때 실행} : {거짓일 때 실행};
// 보통적으로, 식을 풀어서 그 결과를 변수에 할당해야 할 때 삼항연산자를 쓰고
// 실행만 해야되는 상황이라면 if를 씀

score = score>= 90 ? "A" : "불합격";
console.log(score)



if (score >= 60) {
    if (score >= 70) {
        if (score >= 80);        // 들여쓰기가 많다 = 코드가 너무 더럽다이 정진해라
    }
}

if (score >= 60 && age >= 30 && gender === "남자") {
    console.log('이렇게 해야 한다')
}

if (score < 70 && score 80) {

}