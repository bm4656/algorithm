const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);
// console.log(input);

for (let x = -999; x < 1000; x++) {
  for (let y = -999; y < 1000; y++) {
    if (
      input[0] * x + input[1] * y == input[2] &&
      input[3] * x + input[4] * y == input[5]
    ) {
      console.log(x, y);
    }
  }
}
