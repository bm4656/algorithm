const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
var n = Number(input);
let cnt = 0;

for (const w of [5, 3]) {
  cnt += Math.floor(n / w);
  n = n % w;
}

if (n !== 0) {
  console.log(-1);
} else {
  console.log(cnt);
}
let a = 3;
//오답 고쳐야함
