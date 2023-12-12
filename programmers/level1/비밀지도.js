const makeLine = (n, num) => {
  while (num.length < n) {
    num = '0' + num;
  }
  return num;
};

function solution(n, arr1, arr2) {
  let answer = [];
  arr1 = arr1.map((el) => makeLine(n, el.toString(2)));
  arr2 = arr2.map((el) => makeLine(n, el.toString(2)));

  for (let i = 0; i < arr1.length; i++) {
    let sumLine = '';
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        sumLine += '#';
      } else sumLine += ' ';
    }
    answer.push(sumLine);
  }

  return answer;
}
