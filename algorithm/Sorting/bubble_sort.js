// function bubbleSort(array) {
//   const len = array.length;
//   let tmp = null;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (array[i] > array[j + 1]) {
//         //Swap
//         tmp = array[j];
//         array[j] = array[i];
//         array[i] = tmp;
//         tmp = null;
//       }
//     }
//     console.log(`${i + 1}회전 ${array}`);
//   }
//   return array;
// }
// console.log(bubbleSort([5, 4, 3, 2, 1]));

// 버블 정렬 함수
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        // 내림차순 예시
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
