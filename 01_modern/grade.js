const score = 85;

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// switch (true) {
//   case score >= 90:
//     console.log("A");
//     break;
//   case score >= 80:
//     console.log("B");
//     break;
//   case score >= 70:
//     console.log("C");
//     break;
//   case score >= 60:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
// }

// 1~10 까지 합계 for
let sum = 0;

for (let i = 2; i <= 10; i += 2) {
  sum += i;
}

// console.log(sum);

for (let i = 1; i <= 10; i++) {
  // HERE!
  if (i % 2 === 0) {
    continue;
  }

  //   console.log(i);
}

// 예상결과 1, 3, 5, 7, 9

for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  //   console.log(star);
}

for (let i = 1; i <= 9; i++) {
  console.log(`--- ${i}단 시작! ---`);

  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
