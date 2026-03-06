// 아래 배열에서 stock이 0인 상품만 soldOut: true 속성을 추가한 새로운 배열을 만드세요.
const items = [
  { name: "Laptop", stock: 3 },
  { name: "Tablet", stock: 0 },
  { name: "Phone", stock: 10 },
  { name: "Monitor", stock: 0 },
];

const newItems = items.map((item) => {
  //   내가한 방법
  //   return item.stock === 0
  //     ? {
  //         name: item.name,
  //         stock: item.stock,
  //         soldOut: true,
  //       }
  //     : {
  //         name: item.name,
  //         stock: item.stock,
  //       };

  //   방법2] spread + return에 삼항연산자
  //   return item.stock > 0 ? item : { ...item, soldOut: true };

  //   방법3] spread + 객체 내부에서 삼항연산자
  //   return {
  //     ...item,
  //     ...(item.stock === 0 ? { soldOut: true } : {}),
  //   };

  //   방법4] spread + null 병합
  return {
    ...item,
    ...(item.stock === 0 && { soldOut: true }),
  };
});
// console.log(newItems);

const numbers = [10, 20];

// HERE!
const [a, b] = numbers;
// console.log(a); // 10
// console.log(b); // 20

// 아래 배열에서 첫 번째와 세 번째 값만 변수에 담으세요.
const numbers2 = [5, 10, 15];

const [c, , d] = numbers2;
// console.log(c);
// console.log(d);

const user = {
  name: "Tom",
  age: 30,
};

// 위 객체에서 name과 age를 변수로 추출하세요.
const { name: userName, age } = user;
// console.log(userName);
// console.log(age);

const numbers3 = [1, 2, 3, 4];

const [first, ...rest] = numbers3;
// console.log(first); // 1
// console.log(rest); // [2,3,4]

const user1 = {
  id: 1,
  name: "김철수",
  email: "chulsoo@example.com",
  password: "secret123",
};

// password를 제외한 나머지 속성만 userInfo에 담으세요.
const { password, ...userInfo } = user1;
// console.log(userInfo); // { id: 1, name: '김철수', email: 'chulsoo@example.com' }

const students = [
  { name: "김철수", score: 45 },
  { name: "이영희", score: 82 },
  { name: "박민준", score: 91 },
  { name: "최수진", score: 60 },
  { name: "정도현", score: 73 },
];

// 점수가 70점 이상인 학생의 이름만 배열로 담으세요.
const result = students
  .filter((student) => student.score >= 70)
  .map((student) => student.name);
// console.log(result); // ['이영희', '박민준', '정도현']

const orders = [
  { id: 1, product: "노트북", price: 1500000, status: "delivered" },
  { id: 2, product: "마우스", price: 30000, status: "cancelled" },
  { id: 3, product: "모니터", price: 800000, status: "delivered" },
  { id: 4, product: "키보드", price: 120000, status: "cancelled" },
  { id: 5, product: "헤드셋", price: 250000, status: "delivered" },
];

// status가 "delivered"인 주문의 price 합계를 구하세요.
const total = orders
  .filter((order) => order.status === "delivered")
  .reduce((acc, cur) => acc + cur.price, 0);
// let total = 0;
// orders.forEach((order) => {
//   if (order.status !== "delivered") return;

//   total += order.price;
// });
console.log(total); // 2550000
