const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = input.reduce((acc, cur) => acc + cur * 1, 0);
// console.log(sum);
let faker = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i !== j && sum - (input[i] + input[j]) === 100) {
      faker = [input[i], input[j]];
    }
  }
}
// console.log(faker);
let answer = input.filter(i => i !== faker[0] && i !== faker[1]);

answer = answer.sort((a, b) => a - b);
console.log(answer.join('\n'));
