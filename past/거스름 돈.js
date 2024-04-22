function solution(won) {
  let coinTypes = [500, 100, 50, 10];
  let count = 0;
  coinTypes.forEach((coin) => {
    if (won >= coin) {
      count += Math.floor(won / coin);
      won = won % coin;
      //   console.log(won, count);
    }
  });
  return count;
}

console.log(solution(1260));
