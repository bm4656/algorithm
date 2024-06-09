const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let users = [];

for (let i = 0; i < N; i++) {
  let user = input[i].split(' ');
  users.push([Number(user[0]), user[1]]);
}

let result = '';
users
  .sort((a, b) => a[0] - b[0])
  .map((item) => (result += `${item[0]} ${item[1]}\n`));

console.log(result);
