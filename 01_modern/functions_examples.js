function greet() {
  return "안녕하세요";
}

// console.log(greet());

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

function calculate(a, b, o) {
  let result;

  if (o === 1) {
    result = a + b;
  } else if (o === 2) {
    result = a - b;
  } else if (o === 3) {
    result = a * b;
  } else if (o === 4) {
    if (b === 0) {
      result = "0으로 나눌 수 없습니다";
    } else {
      result = a / b;
    }
  } else {
    result = "1~4의 연산자를 입력해주세요";
  }

  return result;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) return;

    sum += arr[i];
  }

  return sum;
}

const result = getSum([1, 2, 3, 4, 5, 6, 100]);
// console.log(result);

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// printTriangle(4);

/**
 * 함수 실습
 *
 * 레벨 1 : 기본 함수
 */

// 1. 이름을 받아서 인사하는 함수 (함수 선언문)
function greetUser(name) {
  // TODO: "안녕하세요, [name]님!" 반환
  return `안녕하세요. ${name}님!`;
}

console.log(greetUser("홍길동")); // 안녕하세요, 홍길동님!

// 2. 두 숫자 중 큰 수를 반환하는 함수 (함수 표현식)
const getMax = function (a, b) {
  // TODO: 큰 수 반환
  if (a > b) return a;
  else return b;
};

console.log(getMax(10, 20)); // 20

// 3. 숫자가 짝수인지 확인하는 함수
function isEven(num) {
  // TODO: 짝수면 true, 홀수면 false
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

/**
 * 레벨 2 : 실용적인 함수
 */
console.log("--------------------------------------------");

// 4. 배열의 평균 구하기
function getAverage(numbers) {
  // TODO: 배열 요소들의 평균 반환
  // 힌트: 합계 / 개수
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

console.log(getAverage([10, 20, 30])); // 20

// 5. 문자열 뒤집기
function reverseString(str) {
  // TODO: 문자열을 거꾸로 반환
  // 힌트: split(''), reverse(), join('')
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh

// 6. 팩토리얼 계산 (재귀 사용)
function factorial(n) {
  // TODO: n! 계산
  // 5! = 5 * 4 * 3 * 2 * 1 = 120
  // 힌트: if (n <= 1) return 1;
  //       return n * factorial(n - 1);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

/**
 * 레벨 3 : 고급 기능
 */
console.log("--------------------------------------------");

// 7. 함수를 반환하는 함수
function createMultiplier(multiplier) {
  // TODO: 숫자를 받아서 multiplier를 곱한 값을 반환하는 함수 반환
  return function (num) {
    // ...
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 8. 조건부 함수 생성
function createGreeting(language) {
  // TODO: language에 따라 다른 인사 함수 반환
  // 'ko': '안녕하세요'
  // 'en': 'Hello'
  // 'ja': 'こんにちは'
  return function (name) {
    let greet = "";
    switch (language) {
      case "ko":
        greet = `안녕하세요. ${name}님`;
        break;
      case "en":
        greet = `Hello, ${name}`;
        break;
      case "ja":
        greet = `こんにちは ${name}`;
        break;
    }

    return greet;
  };
}

const koreanGreet = createGreeting("ko");
const englishGreet = createGreeting("en");

console.log(koreanGreet("홍길동")); // 안녕하세요, 홍길동님
console.log(englishGreet("John")); // Hello, John
