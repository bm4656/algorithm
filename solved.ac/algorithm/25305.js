const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
// console.log(input);
let cutPerson = input[0].split(' ').map(Number)[1];
let score = input[1].split(' ').map(Number);

// console.log(score);

score.sort((a, b) => b - a);
const cutLine = score[cutPerson - 1];
console.log(cutLine);
