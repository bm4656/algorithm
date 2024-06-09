function solution(n, words) {
  //defult로 탈락자 발생 안하고 게임 진행한다고 가정.
  var answer = [0, 0];
  //비교에 사용하고 난 단어 담을 배열
  var checked = [];
  //첫 단어부터 시작!
  checked.push(words[0]);
  for (var i = 1; i < words.length; i++) {
    //이전 단어와 현재 단어 분배
    var beforeWord = words[i - 1];
    var currentWord = words[i];
    // 이전 단어의 끝 글자와 현재 단어 앞 글자가 같고, 사용한 단어 배열에 현재 단어가 존재X면 계속 게임 진행
    if (
      beforeWord[beforeWord.length - 1] == currentWord[0] &&
      checked.indexOf(currentWord) == -1
    ) {
      checked.push(currentWord);
    }
    //아니면 탈락한 사람과 틀린 차례 구하기
    // 왜 +1 해주냐? 배열 인덱스!
    else {
      // console.log(i,n);
      var playerNumber = (i % n) + 1;
      var turn = parseInt(i / n) + 1;
      return (answer = [playerNumber, turn]);
    }
  }
  return answer;
}
//1시간30분 소요
