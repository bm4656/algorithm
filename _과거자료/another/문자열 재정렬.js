//알파벳 대문자와 숫자(0 ~ 9)로만 구성된 문자열이 입력으로 주어집니다. 이때 모든 알파벳을
//오름차순으로 정렬하여 이어서 출력한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력합니다.
//예를 들어 K1KA5CB7이라는 값이 들어오면 ABCKK13을 출력합니다.

function solution(string) {
  const arr = string.split('');
  let sum = 0;
  arr.forEach((i) => {
    if (Number(i)) {
      sum = sum + Number(i);
    }
  });
  return (
    arr
      .filter((i) => !Number(i))
      .sort()
      .join('') + sum
  );
}

const test1 = `K1KA5CB7`;

const test2 = `AJKDLSI412K4JSJ9D`;

console.log(solution(test1));
console.log(solution(test2));
