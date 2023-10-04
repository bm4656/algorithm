const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input.map((i) => i.split(' ').map(Number));

let result = '';

arr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .map((item) => (result += `${item.join(' ')}\n`));
console.log(result);
