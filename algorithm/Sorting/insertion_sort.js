// function insertionSort(array) {
//   //두 번째 요소부터 선택해서
//   for (let i = 1; i < array.length; i++) {
//     let cur = array[i];
//     //왼쪽 요소들과 비교
//     let left = i - 1;
//     //1번째 데이터 뽑아서 0번 째 데이터보다 작으면 swap
//     while (left >= 0 && array[left] > cur) {
//       array[left + 1] = array[left];
//       array[left] = cur;
//       cur = array[left];
//       left--;
//     }
//     //while문 빠져 나오면 맨 앞에 cur값 넣기 방법
//     // array[left + 1] = cur;
//     console.log(`${i}회전: ${array}`);
//   }
//   return array;
// }
// console.log(insertionSort([5, 4, 3, 2, 1]));

// 삽입 정렬 함수
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동 // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤 break;
      }
    }
  }
}
