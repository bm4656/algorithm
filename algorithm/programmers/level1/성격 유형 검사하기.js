function solution(survey, choices) {
  var answer = "";
  var object = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  var score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };
  for (var i = 0; i < survey.length; i++) {
    const [x, y] = survey[i].split("");
    // console.log(x,y); //x 비동의 y 동의
    if (choices[i] < 4) {
      object[x] += score[choices[i]];
    } else if (choices[i] > 4) {
      object[y] += score[choices[i]];
    }
  }
  if (object.R < object.T) {
    answer += "T";
  } else {
    answer += "R";
  }
  if (object.C < object.F) {
    answer += "F";
  } else {
    answer += "C";
  }
  if (object.J < object.M) {
    answer += "M";
  } else {
    answer += "J";
  }
  if (object.A < object.N) {
    answer += "N";
  } else answer += "A";
  // console.log(object)
  // console.log(answer);
  return answer;
}

//소요시간 35분
