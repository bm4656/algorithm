const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

var listen = new Set();
var look = new Set();

for (var i = 1; i <= n; i++) {
  listen.add(input[i]);
}
for (var i = n + 1; i <= m + n; i++) {
  look.add(input[i]);
}

var answer = new Set([...listen].filter((x) => look.has(x)));
console.log(answer.size);
answer = [...answer].sort();
console.log(answer.join("\n"));
// 3 4
// ohhenrie
// charlie
// baesangwook
// obama
// baesangwook
// ohhenrie
// clinton
