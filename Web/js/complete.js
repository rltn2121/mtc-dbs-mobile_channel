/*
화면 init
*/
var second = 3;
function init() {
  countDownTimer();
}
/*
타이머 기능
*/
function countDownTimer() {
  function showRemaining() {
    second--;
    if (second < 0) {
      clearInterval(timer);
      goMain();
    }
  }

  timer = setInterval(showRemaining, 1000);
}
