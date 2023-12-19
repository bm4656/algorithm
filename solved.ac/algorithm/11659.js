const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const sumArr = new Array(arr.length + 1).fill(0);
const solution = [];

arr.forEach((v, i) => {
  sumArr[i + 1] = sumArr[i] + v;
});
// sumArr = [0, 5, 9, 12, 14, 15]
// 각 요소 sumArr[i]는 arr의 i번째 수까지의 합

input.slice(2).forEach((el) => {
  const [i, j] = el.split(' ').map(Number);
  solution.push(sumArr[j] - sumArr[i - 1]);
});

console.log(solution.join('\n'));

//reduce, map 사용하여 구간 합 구하면 메모리 초과남!
