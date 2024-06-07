let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = input[0];
let p = input[1].split(' ').map(Number);

p.sort((a, b) => {
  return a - b;
});

let result = [];
let prev = 0;
for (let i = 0; i < p.length; i++) {
  prev += p[i];
  result.push(prev);
}
console.log(result.reduce((a, b) => a + b, 0));
