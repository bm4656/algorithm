const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const first = Number(input[0]);

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

// console.log(first, arr);

let get = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == get) {
    get += 1;
  } else {
    console.log(get);
    break;
  }
  if (i == arr.length - 1) {
    console.log(get);
  }
}
