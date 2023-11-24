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
  fetch(url + "/wallet/isSuccess/" + ascer)
    .then((response) => response.json())
    .then((data) => {
      var data = data;

      if (!isNull(data.err_msg)) {
        showError("결제 실행 중 실패했습니다.\n" + data.errStr);
      } else {
        //성공시
        goNextPage("complete");
      }
    });
}
