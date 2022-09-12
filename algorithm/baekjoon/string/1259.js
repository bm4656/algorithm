const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
  let reverseStr = input[i].split("").reverse().join("");
  console.log(input[i] === reverseStr ? "yes" : "no");
}

//내가 처음 짠 코드
// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// input.pop();
// input.map((v) => {
//   let n = v.split("");
//   n1 = n.join("");
//   m = n.reverse();
//   if (n1 === m.join("")) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// });

//trim() 메소드 미사용....때문에 계속 틀림
