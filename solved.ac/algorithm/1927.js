let fs = require('fs');
let [N, ...input] = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let arr = [];
let answer = [];
for (let i = 0; i < N; i++) {
  if (arr.length === 0) {
    answer.push(0);
  }
  if (input[i] === 0 && arr.length !== 0) {
    const min = Math.min(...arr);
    answer.push(min);
    arr = arr.filter((i) => i !== min);
  } else {
    arr.push(input[i]);
  }
}
console.log(answer.join('\n'));

// 메모리 초과 -> 최소 힙 구현해야함
