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
    "&nbsp;&nbsp;" +
    deaultInf[2].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  korAmt = Number(deaultInf[2]);
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
/*
충전 모듈 호출
*/
function callPost() {
  console.log("callPost");
  //   fetch("http://localhost:8080/wallet/498967108/all")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       resolve(data);
  //     });
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
