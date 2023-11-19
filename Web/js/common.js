/* 
페이지 이동 함수
*/
function goNextPage(pid) {
  var pid = pid;
  location.href = "../web/" + pid + ".html";
}

function goMain() {
  location.href = "../home.html";
}

/*
포맷팅 함수
*/
function formattingAmt(val) {
  return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //금액 3자리마다 , 찍기
}

/* 
유저정보 가져오기
*/
function getUserName() {
  var list = sessionStorage.getItem("amountList0");
  var deaultInf = list.split(",");

  return deaultInf[0];
}

/*
널 값 체크
*/
function isNull(chk) {
  if (chk == "" || chk == null || chk == undefined || chk == NaN) return true;
  return false;
}
