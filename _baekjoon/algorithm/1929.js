// const fs = require('fs');
// const filePath =
//   process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const [n, m] = input[0].split(' ').map((item) => +item);
const [n, m] = [3, 16];

// 에라토스테네스의 체
const prime = { 1: true }; //초기 소수 목록(소수인 경우 false)

for (let i = 2; i <= Math.sqrt(m); i++) {
  if (prime[i]) continue;
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}
const results = [];

for (let i = n; i <= m; i++) {
  if (!prime[i]) results.push(i);
}
console.log(results.join('\n'));
