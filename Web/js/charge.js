/*
화면 init
*/
function init() {
  var list = sessionStorage.getItem("amountList0");
  var deaultInf = list.split(",");
  document.getElementById("user").innerHTML = deaultInf[0];
  document.getElementById("korCur").innerHTML = "&nbsp;&nbsp;" + deaultInf[1];
  document.getElementById("korAmount").innerHTML =
    "&nbsp;&nbsp;" +
    deaultInf[2].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
//모듈 호출
function doCharge() {
  fetch("http://localhost:8080/wallet/498967108/all")
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    });
}
