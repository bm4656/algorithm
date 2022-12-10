const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// console.log(input);
let arr = [];
let result = [];
const count = input[0];
const say = {
  push: function (n) {
    arr.push(n);
  },
  pop: function () {
    if (arr[arr.length - 1]) {
      result.push(arr[arr.length - 1]);
      arr.pop();
    } else {
      result.push(-1);
    }
  },
  size: function () {
    result.push(arr.length);
  },
  empty: function () {
    if (!arr.length) {
      result.push(1);
    } else {
      result.push(0);
    }
  },
  top: function () {
    if (arr[arr.length - 1]) {
      result.push(arr[arr.length - 1]);
    } else {
      result.push(-1);
    }
  },
};

for (let i = 1; i <= count; i++) {
  let inputSay = input[i].split(' ')[0];
  if (inputSay === 'push') {
    let a = input[i].split(' ')[1];
    say.push(a);
  } else if (inputSay === 'pop') {
    say.pop();
  } else if (inputSay === 'size') {
    say.size();
  } else if (inputSay === 'empty') {
    say.empty();
  } else if (inputSay === 'top') {
    say.top();
  }
}
console.log(result.join('\n'));
