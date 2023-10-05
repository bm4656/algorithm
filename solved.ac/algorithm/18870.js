const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.split(' ').map(Number);

let arr = [...new Set(input)];
arr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < arr.length; i++) {
  myMap.set(arr[i], i);
}
answer = '';
for (x of input) answer += `${myMap.get(x)} `;
console.log(answer);
