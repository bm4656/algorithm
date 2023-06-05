function solution(nums) {
  var answer = nums.length / 2;
  let set = new Set(nums);
  if (nums.length / 2 > set.size) answer = set.size;
  return answer;
}
