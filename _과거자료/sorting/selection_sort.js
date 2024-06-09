// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     //첫 번째 요소 min에 저장
//     let min = i;
//     //반복문으로 min과 다음요소 비교하여 최솟값을 min에 할당
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[min] > array[j]) {
//         min = j;
//       }
//     }
//     //만약 min이 최초의 저장한 값이 아니라면 Swap
//     if (min !== i) {
//       let swap = array[min];
//       array[min] = array[i];
//       array[i] = swap;
//     }
//     console.log(`${i}회전: ${array}`);
//   }
//   return array;
// }
// console.log(selectionSort([5, 4, 3, 2, 1]));

// 선택 정렬 함수
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
