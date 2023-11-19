/*
화면 init
*/
var result = "";
var selectBox = "";
var selectedCur = "";
var userInput = 0;
var korAmt = 0;

function init() {
  var list = sessionStorage.getItem("amountList0");
  var deaultInf = list.split(",");
  document.getElementById("user").innerHTML = deaultInf[0];
  document.getElementById("korCur").innerHTML = "&nbsp;&nbsp;" + deaultInf[1];
  document.getElementById("korAmount").innerHTML =
    "&nbsp;&nbsp;" + formattingAmt(deaultInf[2]);

  korAmt = Number(deaultInf[2]);
}
/*
충전모듈 호출
*/
function callPost() {
  fetch(
    "http://k8s-cocmtc-cocmtcin-52b788a054-1680572240.ap-northeast-2.elb.amazonaws.com/exchange",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acno: getUserName(),
        payYn: "N",
        curC: selectedCur,
        trxAmt: Number(document.getElementById("userInput").value),
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      var data = data;

      if (isNull(data.exgAcser) || data.result == -1) {
        showError("환전요청에 실패했습니다.");
      } else {
        //성공시
        sessionStorage.setItem("exgAcser", data.exgAcser);
        goNextPage(ongoing);
      }
    });
}
/*
버튼이벤트
*/
function doCharge() {
  selectBox = document.getElementById("selectCur");
  selectedCur = selectBox.options[selectBox.selectedIndex].value;
  userInput = Number(document.getElementById("userInput").value);
  if (validate()) {
    callPost();
  }
}
/* 입력값 검증 */
function validate() {
  var total = userInput;
  var cur = 0;

  console.log(userInput);
  if (selectedCur == "USD") cur = 1300;
  else if (selectedCur == "JPY") cur = 900;
  else if (selectedCur == "CNY") cur = 180;

  total *= cur;

  console.log(total);

  if (total > korAmt) {
    alert("충전하려는 금액이 보유 현금액보다 많습니다");
    document.getElementById("userInput").value = null;

    return false;
  } else {
    return true;
  }
}
