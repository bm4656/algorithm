function solution(array, commands) {
  let answer = [];
  for (let n = 0; n < commands.length; n++) {
    let [i, j, k] = commands[n];
    let arr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  }
  return answer;
}

//00:20:09
//slice 사용법 헷갈리지 말기!
