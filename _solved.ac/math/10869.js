const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 3`
).split("\n");
console.log("check", stdin);

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [a, b] = input().split(" ").map(Number);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
