// 첫 풀이 -> 배열을 미리 만들면 메모리 오류가 남.
// function solution(n, left, right) {
//   let arr = Array.from({ length: n }, () => Array(n).fill(1));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let index = [i, j];
//       if (index === [0, 0]) {
//         arr[i][j] = 1;
//       } else {
//         arr[i][j] = Math.max(i, j) + 1;
//       }
//     }
//   }

//   return arr.flat().slice(left, right + 1);
// }

// 좌표의 규칙을 찾아서 구해야 하는 문제!
function solution(n, left, right) {
  let ans = [];

  while (left <= right) {
    ans.push(Math.max(Math.floor(left / n), left++ % n) + 1);
  }

  return ans;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
