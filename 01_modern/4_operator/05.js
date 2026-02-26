// 비교연산자
// 값을 비교하는 것
// == : 동등연산자
// console.log(10 == "10");

// === : 일치연산자
console.log(10 !== "10");

// number와 boolean비교
// console.log(0 != true);

// != (부등 연산자) - 값만 비교
console.log(10 != 20); // true
console.log(10 != "10"); // false

// !== (불일치 연산자) - 값과 타입 모두 비교 (권장!)
console.log(10 !== 20); // true
console.log(10 !== "10"); // true

// 대소 비교
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

// 문자열 비교 (사전순)
console.log("apple" < "banana"); // true
console.log("A" < "a"); // true (대문자가 먼저)
