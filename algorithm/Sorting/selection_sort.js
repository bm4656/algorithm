function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    //첫 번째 요소 min에 저장
    let min = i;
    //반복문으로 min과 다음요소 비교하여 최솟값을 min에 할당
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    //만약 min이 최초의 저장한 값이 아니라면 Swap
    if (min !== i) {
      let swap = array[min];
      array[min] = array[i];
      array[i] = swap;
    }
    console.log(`${i}회전: ${array}`);
  }
  return array;
}
console.log(selectionSort([5, 4, 3, 2, 1]));
