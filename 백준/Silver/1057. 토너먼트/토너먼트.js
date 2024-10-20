const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let [N, jimin, hansu] = input;

let count = 0;

while (jimin !== hansu) {
  jimin = Math.ceil(jimin / 2);
  hansu = Math.ceil(hansu / 2);
  count++;
}

console.log(count);
