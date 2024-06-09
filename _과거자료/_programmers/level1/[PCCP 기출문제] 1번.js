function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const attacksTime = attacks.map((elem) => elem[0]);
  let hp = health;
  let success = 0;

  for (let i = 0; i <= attacksTime[attacksTime.length - 1]; i++) {
    if (attacksTime.includes(i)) {
      hp -= attacks[attacksTime.indexOf(i)][1];
      success = 0;
    } else {
      if (hp >= health) {
        success++;
        hp = health;
      } else {
        hp += x;
        success++;
        if (success === t) {
          hp += y;
          success = 0;
        }
      }
    }
    // console.log(`시간:${i} 현재체력:${hp} 연속성:${success}`);
    if (hp <= 0) return -1;
  }
  return hp;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([4, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);
