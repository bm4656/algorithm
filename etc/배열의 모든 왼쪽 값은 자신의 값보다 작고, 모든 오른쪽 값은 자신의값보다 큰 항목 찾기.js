// 배열이 주어지고, 배열의 모든 왼쪽 값은 자신의 값 보다 작고, 모든 오른쪽 값은 자신의 값 보다 큰 항목을 찾는다.
// 그런 조건에 맞는 항목을 찾으면 그 항목의 색인 값을 반환하고, 그런 항목이 없으면 -1 값을 반환한다. 예상 시간 복잡도는 O(n)

function check(arr, n, index) {
  let i = index - 1;
  let j = index + 1;

  while (i >= 0) {
    if (arr[i] > arr[index]) {
      return false;
    }
    i--;
  }

  while (j < n) {
    if (arr[j] < arr[index]) {
      return false;
    }
    j++;
  }
  return true;
}

function findElement(arr, n) {
  for (let i = 1; i < n - 1; i++) {
    if (check(arr, n, i)) {
      return i;
    }
  }
  return -1;
}

const arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
// const arr = [5, 1, 4, 4];
const n = arr.length;
console.log(findElement(arr, n));
