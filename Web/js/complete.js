/*
화면 init
*/
var second = 3;
function init() {
  countDownTimer();

  if (sessionStorage.getItem("payAcser")) {
    sessionStorage.removeItem("payAcser");
  } else if (sessionStorage.getItem("exgAcser")) {
    sessionStorage.removeItem("exgAcser");
  }
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
