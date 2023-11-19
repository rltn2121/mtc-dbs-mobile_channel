/*
화면 init
*/
var second = 30;
function init() {
  countDownTimer();
}
/*
결제모듈 랜덤 파라미터 셋팅
*/
function randomTime() {
  var today = new Date();
  var trxDt = today.toLocaleDateString() + " ";
  trxDt +=
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds() +
    ":" +
    today.getMilliseconds();

  return trxDt;
}
function randomPlace() {
  var country = ["USD", "KRW", "JPY", "CNY"];
  var place = [
    [
      "Oregon",
      "Kansas",
      "Wisconsin",
      "California",
      "Arizona",
      "Washington",
      "Montana",
      "Louisiana",
      "Georgia",
      "Kentucky",
      "Ohio",
      "Missouri",
      "Florida",
      "New York",
      "Virginia",
      "Massachusetts",
      "New Hampshire",
      "Vermont",
      "Mississippi",
      "Illinois",
      "Michigan",
      "Indiana",
      "New Jersey",
      "Pennsylvania",
    ],
    [
      "신촌",
      "구로",
      "영등포",
      "북창동",
      "신도림",
      "이대",
      "공덕",
      "성신여대입구역",
      "주안역",
      "경상남도 고성군",
      "서울역",
      "시청역",
      "용산역",
      "애오개",
      "강남",
      "이태원",
      "신길",
      "목동",
      "오목교",
      "이문동",
      "창동",
      "삼각지",
      "이수",
      "고속터미널",
      "여의도",
      "여의나루",
      "당산",
      "신논현",
    ],
    [
      "Kyushu",
      "Kagoshima",
      "Kumamoto",
      "Kitakyushu",
      "Fukuoka",
      "Shiga",
      "Kansai",
      "Kyoto",
      "Nagoya",
      "Sapporo",
      "Osaka",
      "Tokyo",
      "Chiba",
      "Saitama",
      "Shinjuku",
      "Kokubunji",
      "Shibuya",
      "Harajuku",
      "Ikebukuro",
      "Okinawa",
      "Sendai",
      "Yamagata",
      "Yokohama",
      "Kobe",
    ],
    [
      "Beijing",
      "Tianjin",
      "Dalian",
      "Shanghai",
      "Hongkou",
      "Chongqing",
      "Sichuan",
      "Hebei",
      "Shanxi",
      "Harbin",
      "Jilin",
    ],
  ];

  var randomIdx = Math.floor(Math.random() * (5 - 1));
  var randomPlc =
    place[randomIdx][
      Math.floor(Math.random() * (place[randomIdx].length + 1 - 1))
    ];
  //   console.log(randomPlc);

  var retObj = new Object();
  retObj.curC = country[randomIdx];
  retObj.trxPlace = randomPlc;
  return retObj;
}
function randomParam() {
  var retObj = randomPlace();
  var paramData = new Object();
  paramData.trxDt = randomTime();
  paramData.curC = retObj.curC;
  paramData.trxPlace = retObj.trxPlace;

  return JSON.stringify(paramData);
}
/*
결제모듈 호출
*/
function callPost() {
  var paramData = randomParam();
  var list = sessionStorage.getItem("amountList0");
  var deaultInf = list.split(",");

  fetch(
    "http://k8s-cocmtc-cocmtcin-52b788a054-1680572240.ap-northeast-2.elb.amazonaws.com/pay",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acno: deaultInf[0],
        curC: paramData.curC,
        trxPlace: paramData.trxPlace,
        trxAmt: Math.floor(Math.random() * (300000 - 100) + 1), //랜덤으로 금액 지정을 해줌
        trxDt: paramData.trxDt,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
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
