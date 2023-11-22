/*
화면 init
*/
function init() {
  drawLoading();
  callPost();
}
function drawLoading() {
  var _showPage = function () {
    var loader = $("div.loader");
  };
}
/*
결제모듈 호출
*/
function callPost() {
  var ascer = isNull(sessionStorage.getItem("exgAcser"))
    ? sessionStorage.getItem("payAcser")
    : sessionStorage.getItem("exgAcser");
  fetch(
    "http://k8s-cocmtc-cocmtcin-52b788a054-530735821.ap-northeast-2.elb.amazonaws.com/wallet/chk/" +
      ascer
  )
    .then((response) => response.json())
    .then((data) => {
      var data = data;

      if (isNull(data.payAcser)) {
        showError("결제 실행 중 실패했습니다.\n" + data.errStr);
      } else {
        //성공시
        goNextPage(complete);
      }
    });
}
