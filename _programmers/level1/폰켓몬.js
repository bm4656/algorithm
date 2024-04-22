function solution(nums) {
  var answer = nums.length / 2;
  let set = new Set(nums);
  if (nums.length / 2 > set.size) answer = set.size;
  return answer;
}

//23-10-17 풀이 00:07:24
function solution(nums) {
  var answer = nums.length / 2;
  let set = new Set(nums);
  // console.log(set.size)
  return answer < set.size ? answer : set.size;
}
