/*
화면 init
*/
var second = 30;
function init() {
  countDownTimer();
}
/*
결제모듈 호출
*/

/*
결제 타이머 기능
*/
function countDownTimer() {
  function showRemaining() {
    second--;
    if (second < 0) {
      clearInterval(timer);
      return;
    }
    document.getElementById("count").innerHTML = second;
  }

  timer = setInterval(showRemaining, 1000);
}
