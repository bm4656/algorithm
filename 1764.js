const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const d = [];
const b = [];
const answer = [];
for (var i = 1; i <= n; i++) {
  d.push(input[i]);
}
for (var i = n + 1; i <= m + n; i++) {
  b.push(input[i]);
}
d.map((j) => {
  for (var k = 0; k < b.length; k++) {
    if (j === b[k]) {
      answer.push(j);
    }
  }
});

console.log(answer.length + "\n" + answer.sort().join("\n"));
