const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let set = new Set(input);
input = [...set];

input.sort().sort((a, b) => {
  return a.length - b.length;
});

console.log(input.join('\n'));
