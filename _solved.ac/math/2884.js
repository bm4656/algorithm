const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let h = Number(input[0]); // hour
let m = Number(input[1]); // minute

m -= 45;

if (m < 0) {
  m += 60;
  h--;
  if (h === -1) {
    h = 23;
  }
}
console.log(h + " " + m);
