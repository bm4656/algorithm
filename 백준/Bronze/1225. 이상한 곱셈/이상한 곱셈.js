const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ');

const a = input[0].split('').map(Number);
const b = input[1].split('').map(Number);

let result = 0;

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    const mul = a[i] * b[j];
    result += mul;
  }
}

console.log(result);
