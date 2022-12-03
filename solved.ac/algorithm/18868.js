//오답
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// console.log(input);
const [m, n] = input[0].split(' ').map(Number);
// console.log(m, n);
let cnt = 0;
for (let i = 1; i < m; i++) {
  let a = input[i].split(' ').map(Number);
  for (let j = i + 1; j <= m; j++) {
    let b = input[j].split(' ').map(Number);
    console.log(`${i}회차`, a, b);
    let maxA = Math.max(...a);
    let minA = Math.min(...a);
    let maxB = Math.max(...b);
    let minB = Math.min(...b);

    if (
      a.indexOf(maxA) == b.indexOf(maxB) &&
      a.indexOf(minA) == b.indexOf(minB)
    ) {
      cnt++;
    } else {
      continue;
    }
  }
}

console.log(cnt);
