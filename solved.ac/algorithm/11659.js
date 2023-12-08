const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [fir, sec, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let [N, M] = fir.split(' ');
let nums = sec.split(' ').map(Number);
let result = [];
let sum = 0;

arr.forEach((elem) => {
  let [start, end] = elem.split(' ').map(Number);
  let newNums = nums.slice(start - 1, end).map((v) => (sum += v));
  result.push(newNums[newNums.length - 1]);
  sum = 0;
});

console.log(result.join('\n'));
