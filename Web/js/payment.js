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
      alert("요청시간이 초과되었습니다. 홈 화면으로 이동합니다");
      location.href = "../home.html";
      return;
    }
    document.getElementById("count").innerHTML = second;
  }

  timer = setInterval(showRemaining, 1000);
}
