/*
화면 init
*/
function init() {
  var data = "";
  fetch("http://localhost:8080/wallet/498967108")
    .then((response) => response.json())
    .then((data) => (data = data));
}
