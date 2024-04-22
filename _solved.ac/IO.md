# 백준 node.js 입출력

- 백준에서 자바스크립트로 문제를 풀 경우 자바스크립트의 경우 입출력을 직접 해주어야한다.
- 두 가지 방법이 있는데 fs 모듈과 readline 모듈이다.
- fs 모듈은 코드가 간단하고 readline으로 시간초과가 나올 때 사용한다.

## fs 모듈 이용

1. 한 줄로 입력 받을 때

```javascript
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let num = Number(input);
for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

2. 여러 줄로 입력 받을 때

```javascript
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
console.log(input);
let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i]);
  }
}
console.log(numbers.join('\n'));
```

### fs 모듈 이용 방법

1. npm install fs 로 모듈 설치하기
2. 문제 풀때 input.txt에 복붙해서 사용하기
3. 아래 코드처럼 readFileSync의 경로를 input.txt의 위치로 수정
4. linux 환경인 백준에서는 /dev/stdin 경로로, 로컬 vscode에서는 파일시스템 경로로 자동으로 정해지도록 함

```javascript
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
```

## readline 모듈 이용
