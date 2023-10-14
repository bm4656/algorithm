const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [input, ...coins] = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, won] = input.split(' ');

coins = coins.map(Number).sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < coins.length; i++) {
  count += parseInt(won / coins[i]);
  won %= coins[i];
}
console.log(count);
