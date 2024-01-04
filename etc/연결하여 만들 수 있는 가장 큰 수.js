function solution(input) {
  //   input.sort().reverse();
  return input
    .map(String) // 각 숫자를 문자열로 변환
    .sort((a, b) => (b + a).localeCompare(a + b)) // 문자열을 연결하여 비교하여 정렬
    .join(''); // 정렬된 숫자들을 연결하여 문자열로 반환

  //   return input.join('');
}

console.log(solution([2, 3, 4, 0, 6])); //64320
console.log(solution([10, 68, 75, 7, 21, 12])); //75768211210
