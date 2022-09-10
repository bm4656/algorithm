function solution(numbers) {
  var answer = numbers
    .map((c) => c + "") //각 숫자들 문자로 변환 1 =>'1'
    .sort((a, b) => b + a - (a + b)); //문자로 변환된 숫자를 연결하여 비교정렬
  // .join("");
  console.log(answer);
  return answer[0] === "0" ? "0" : answer;
}

solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);
