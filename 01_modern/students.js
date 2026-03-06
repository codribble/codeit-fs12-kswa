// 학생 이름 배열
const names = ["홍길동", "김철수", "이영희"];

// 점수 배열
const scores = [85, 90, 78];

// TODO: 각 학생의 이름과 점수 출력
// 홍길동: 85점
// 김철수: 90점
// 이영희: 78점
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}: ${scores[i]}점`);
}

// TODO: 평균 점수 계산
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum = sum + scores[i];
}
console.log(`평균 점수: ${(sum / scores.length).toFixed(2)}점`);

console.log("--------------------------------------------------------");

// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
student.total = student.korean + student.english + student.math;
// TODO: 평균 계산
student.average = student.total / 3;
// TODO: 결과 출력
console.log(`총점 계산: ${student.total}점`);
console.log(`평균 계산: ${student.average.toFixed(2)}점`);

console.log("--------------------------------------------------------");

// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];
let averageTotal = 0; // 전체 평균 합계 초기값
let higher = students[0]; // 최고점자 초기설정(아직 평균을 모르기에 임의로 배열의 첫 학생으로...)

// TODO: 각 학생의 평균 계산
console.log("=== 학생별 성적 ===");
for (let i = 0; i < students.length; i++) {
  students[i].total =
    students[i].korean + students[i].english + students[i].math; // 각 배열 객체요소에 total 속성을 추가하고, 총점을 대입
  students[i].average = students[i].total / 3; // 각 배열의 객체요소에 average 속성을 추가하고, 평균(총점 / 과목수)값을 대입

  averageTotal = averageTotal + students[i].average; // 전체 평균의 합계를 구함

  if (students[i].average > higher.average) {
    // 순회하면서 구해진 각 학생의 평균 값과 초기 설정된 최고점자의 평균 값을 비교 후
    // 순회 학생의 평균이 초기 평균보다 크면 최고점자를 순회 학생으로 교체
    higher = students[i];
  }

  console.log(`${students[i].name}: 평균 ${students[i].average.toFixed(2)}점`);
}
// TODO: 전체 학생 평균 계산
console.log("=== 전체 통계 ===");
console.log(`전체 평균: ${(averageTotal / students.length).toFixed(2)}점`);
// TODO: 최고 점수 학생 찾기
// console.log(`최고 점수: 이영희 (92.33점)`);
console.log(`최고 점수: ${higher.name} (${higher.average.toFixed(2)}점)`);
