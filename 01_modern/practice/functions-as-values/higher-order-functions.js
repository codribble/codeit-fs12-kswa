// 콜백 함수
// 1. 배열의 각 요소에 함수 적용
function map(array, transform) {
  // TODO: 각 요소에 transform 함수를 적용한 새 배열 반환
  const result = [];
  // for문으로 배열 순회
  // transform 함수 호출
  // 결과를 result에 추가
  for (let i = 0; i < array.length; i++) {
    result[i] = transform(array[i]);
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = map(numbers, function (n) {
  return n * 2;
});

// console.log(doubled); // [2, 4, 6, 8]

// 2. 조건에 맞는 요소만 필터링
function filter(array, test) {
  // TODO: test 함수가 true를 반환하는 요소만 모아서 반환
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) result.push(array[i]);
  }

  return result;
}

const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = filter(numbers2, function (n) {
  return n % 2 === 0;
});

// console.log(evens); // [2, 4, 6]

// 함수 반환
// 3. 함수 생성 팩토리
function createValidator(minLength) {
  // TODO: 문자열 길이를 체크하는 함수 반환
  return function (str) {
    // str.length >= minLength이면 true
    return str.length >= minLength;
  };
}

const validate6 = createValidator(6);
const validate10 = createValidator(10);

// console.log(validate6("hello")); // false
// console.log(validate6("hello123")); // true
// console.log(validate10("hello123")); // false

// 4. 함수 조합
function compose(f, g) {
  // TODO: f(g(x))를 수행하는 함수 반환
  return function (x) {
    // ...
    return f(g(x));
  };
}

const addOne = function (n) {
  return n + 1;
};
const double = function (n) {
  return n * 2;
};

const addThenDouble = compose(double, addOne);

// console.log(addThenDouble(5)); // 12 ((5 + 1) * 2)

// 실전 활용
// 5. 이벤트 시스템 만들기
function createEventManager() {
  const listeners = {};

  return {
    on: function (eventName, callback) {
      // TODO: 이벤트 리스너 등록
    },
    emit: function (eventName, data) {
      // TODO: 이벤트 발생시 모든 리스너 호출
      if (eventName === "user:login") {
      }
    },
    off: function (eventName) {
      // TODO: 이벤트 리스너 제거
    },
  };
}

const events = createEventManager();

events.on("user:login", function (user) {
  console.log(user.name + "님이 로그인했습니다.");
});

events.on("user:login", function (user) {
  console.log("환영합니다!");
});

events.emit("user:login", { name: "홍길동" });
// 홍길동님이 로그인했습니다.
// 환영합니다!
