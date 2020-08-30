function isWoman() {
  let data = document.getElementById("cpr");

  let result = document.getElementById("chkIfWoman");

  if (data.value % 2 == 0) {
    result.innerHTML = data.value + " is a Woman!";
  } else {
    result.innerHTML = data.value + " is a MAN!";
  }
}
