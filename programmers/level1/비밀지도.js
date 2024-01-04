const makeLine = (n, num) => {
  // num 이 변의 길이 충족 못할 때 앞에 0 붙여줌
  while (num.length < n) {
    num = '0' + num;
  }
  return num;
};

function solution(n, arr1, arr2) {
  let answer = [];
  arr1 = arr1.map((el) => makeLine(n, el.toString(2)));
  arr2 = arr2.map((el) => makeLine(n, el.toString(2)));

  for (let i = 0; i < n; i++) {
    let sumLine = '';
    for (let j = 0; j < n; j++) {
      // if ((arr1[i] | arr2[i]) & (1 << (n - 1 - j))) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        sumLine += '#';
      } else sumLine += ' ';
    }
    answer.push(sumLine);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
