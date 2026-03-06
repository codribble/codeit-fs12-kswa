const filteredUsers = users.filter((user) => user.age >= 20);

const isAllOverTen = users.every((user) => user.age >= 10);
isAllOverTen && console.log("10세 이상입니다.");

const hasPremium = users.some((user) => user.isPremium);

const isPremiumAllOverScore = users
  .filter((user) => user.isPremium)
  .every((user) => user.score >= 70);

const _isPremiumAllOverScore = users.every((user) => {
  if (!user.isPremium) {
    return true;
  }

  if (user.score >= 70) {
    return true;
  } else {
    return false;
  }
});
