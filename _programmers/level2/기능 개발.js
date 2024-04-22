function solution(progresses, speeds) {
  let days = [];
  let result = {};
  for (let i = 0; i < progresses.length; i++) {
    let remain = 100 - progresses[i];
    let day = Math.ceil(remain / speeds[i]);
    days.push(day);
  }
  for (let i = 0; i < days.length - 1; i++) {
    if (days[i] > days[i + 1]) {
      days[i + 1] = days[i];
    }
  }
  days.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  return Object.values(result);
}
