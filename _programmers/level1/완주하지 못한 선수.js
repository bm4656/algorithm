function solution(participant, completion) {
  let answer = '';
  let m = new Map();
  for (p of participant) {
    m.set(p, m.get(p) + 1 || 1);
  }
  for (c of completion) {
    if (m.get(c) === 1) {
      m.delete(c);
    } else {
      m.set(c, m.get(c) - 1);
    }
  }
  for ([key, value] of m) {
    answer = key;
  }
  return answer;
}
