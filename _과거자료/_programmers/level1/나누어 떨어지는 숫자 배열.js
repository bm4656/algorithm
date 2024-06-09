function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor === 0);
  // arr.forEach(elem=> {
  //     if(elem % divisor === 0){
  //         answer.push(elem)
  //     }
  // })
  return !answer.length ? [-1] : answer.sort((a, b) => a - b);
}
