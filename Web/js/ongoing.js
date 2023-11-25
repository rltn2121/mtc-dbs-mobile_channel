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
거래결과
(0: 진행 중, 1: 결제성공, 2: 충전성공, 
3: 결제실패, 4: 충전실패, 99:원장정보없음)
*/
function callPost() {
  var ascer = isNull(sessionStorage.getItem("exgAcser"))
    ? sessionStorage.getItem("payAcser")
    : sessionStorage.getItem("exgAcser");
  console.log(ascer);
  fetch(url + "/wallet/chk/" + ascer)
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      console.log(data);
      if (data.upmuG <= 2 && data.upmuG >= 1) {
        //성공시
        goNextPage("complete");
      } else if (!isNull(data.err_msg) || data.upmuG >= 3) {
        showError(
          "결제 실행 중 실패했습니다.\n\nErrCode " +
            data.upmuG +
            ": " +
            data.err_msg
        );
      }
    });
}
