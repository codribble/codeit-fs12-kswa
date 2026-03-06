const students = [
  {
    name: "홍길동",
    age: 20,
    gender: "male",
    hobbies: ["reading", "coding", "exercise"],
  },
  {
    name: "이영희",
    age: 21,
    gender: "female",
    hobbies: ["reading", "coding", "yoga"],
  },
  { name: "김철수", age: 22, gender: "male", hobbies: ["reading", "coding"] },
];

// TODO : 남자를 모두 뽑아보세요.
const students1 = students.filter((student) => student.gender === "male");
console.log("----------------------");
console.log("students1 => ", students1);

// TODO : 취미가 코딩인 사람을 모두 뽑아보세요
const students2 = students.filter((student) => {
  return student.hobbies.find((hobby) => hobby === "coding");
});
console.log("----------------------");
console.log("students2 => ", students2);

// TODO : 취미가 3개 이상인 사람을 모두 뽑아보세요
const students3 = students.filter((student) => student.hobbies.length >= 3);
console.log("----------------------");
console.log("students3 => ", students3);

// TODO : {name, age, gender, hobbies} => {name, hobbyCount} 이름과 취미개수로 이루어진 새로운 배열로!
// EX : {name: "홍길동", hobbyCount:2}
const students4 = students.map((student) => {
  return {
    name: student.name,
    hobbyCount: student.hobbies.length,
  };
});
console.log("----------------------");
console.log("students4 => ", students4);

// 아래 배열에서 점수가 80점 이상인 학생의 이름만 담긴 배열을 만드세요.

const studentsArr = [
  { name: "Tom", score: 70 },
  { name: "Jane", score: 85 },
  { name: "Mike", score: 90 },
  { name: "Sara", score: 60 },
];

const students5 = studentsArr
  .filter((student) => student.score >= 80)
  .map((student) => student.name);
// console.log(students5);

// 아래 두 배열을 spread operator로 하나의 배열로 합치고,
// 그중 짝수만 남긴 배열을 만드세요.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2].filter((item) => item % 2 === 0);
console.log(arr3);
