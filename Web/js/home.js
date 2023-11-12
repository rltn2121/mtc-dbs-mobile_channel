/*
화면 init
*/
var cnt = 0;
var list = "";

function init() {
  getAccountList();
}
/*
전계좌조회 호출
*/
function callGet() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/wallet/498967108/all")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}
/*
함수 결과 변수에 셋팅
*/
async function getAccountList() {
  list = await callGet();
  // for (i of Object.values(list)) {
  //   const localeAmount = i.ac_jan
  //     .toString()
  //     .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  //   console.log(i);
  //   // console.log(localeAmount);
  // }
  sessionStorage.setItem("amountList", list);
  setAccountInf();
}
/*
카드 터치 시 타 외환 정보 불러오기용 인덱스 셋팅
*/
function showNextAccount() {
  cnt += 1;
  cnt %= list.length;
  console.log(cnt);
  setAccountInf();
}
/*
카드 터치 시 화면 셋팅 
*/
function setAccountInf() {
  var homeData = Object.values(list[cnt]);

  document.getElementById("user").innerHTML = homeData[0];
  document.getElementById("cur").innerHTML = homeData[1];
  document.getElementById("amount").innerHTML = homeData[2]
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //금액 3자리마다 , 찍기

  var src = "";
  if (homeData[1] == "KRW") src = "images/korea.png";
  else if (homeData[1] == "JPY") src = "images/japan.png";
  else if (homeData[1] == "USD") src = "images/usa.png";
  else if (homeData[1] == "CNY") src = "images/china.png";
  document.getElementById("flag").src = src;
}
