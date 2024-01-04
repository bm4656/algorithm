function getDivide(str, unit) {
  let count = 1;
  let answer = [];
  for (let i = 0; i <= str.length / unit; i++) {
    let unitStr = str.slice(unit * i, unit * i + unit);
    if (answer[answer.length - 1] == unitStr) {
      count++;
    } else {
      if (count > 1)
        answer[answer.length - 1] = count + answer[answer.length - 1];
      answer.push(unitStr);
      count = 1;
    }
  }
  return answer;
}

function solution(s) {
  let answers = [];
  for (let i = 1; i <= s.length; i++) {
    answers.push(getDivide(s, i));
  }
  return Math.min(...answers.map((e) => e.join('').length));
}

console.log(solution('aabbaccc'));
