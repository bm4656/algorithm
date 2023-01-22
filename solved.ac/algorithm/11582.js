const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
let answer = [];
let chicken = input[0].split(' ').map(Number);
const k = Number(input[1]);
const loop = N / k;
for (let i = 0; i < N; i += loop) {
  //   console.log(chicken.slice(i, i + loop));
  answer.push(chicken.slice(i, i + loop).sort((a, b) => a - b));
}
console.log(answer.flat().join(' '));
