/*
화면 init
*/
var list = "";

function init() {
  var session = sessionStorage.getItem("amountList0");
  var deaultInf = session.split(",");
  document.getElementById("user").innerHTML = deaultInf[0];
  getHistList();
}
/*
거래내역조회 호출
*/
function callGet() {
  return new Promise((resolve, reject) => {
    fetch(
      "http://k8s-cocmtc-cocmtcin-52b788a054-1680572240.ap-northeast-2.elb.amazonaws.com/wallet/history/498967108"
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}
/*
함수 결과 변수에 셋팅
*/
async function getHistList() {
  list = await callGet();

  makeTable();
}
/*
표 뿌리기
*/
function makeTable() {
  var tableList = "";

  for (i of Object.values(list)) {
    console.log(i);
    var tmp = "<tr>";
    tmp += "<td class='text-center'>"; //일자
    tmp +=
      i.trxdt.substring(0, 4) +
      "년 " +
      i.trxdt.substring(4, 6) +
      "월 " +
      i.trxdt.substring(6, 8) +
      "일";
    tmp += "</td>";

    tmp += "<td class='text-center "; //결과
    if (i.upmu_g == "1") {
      tmp += "text-success'>결제";
    } else if (i.upmu_g == "2") {
      tmp += "text-warning'>충전";
    } else {
      tmp += "text-danger'>";
      tmp += i.err_code;
    }
    tmp += "</td>";
    tmp += "<td class='text-center'>"; //통화
    tmp += i.cur_c;
    tmp += "</td>";
    tmp += "<td class='text-end'>"; //금액
    tmp += i.trx_amt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    tmp += "</td>";
    tmp += "<td class='text-end'>"; //잔액
    tmp += i.nujk_jan
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    tmp += "</td>";

    tableList += tmp;
  }
  document.getElementById("histTable").innerHTML = tableList;
}
