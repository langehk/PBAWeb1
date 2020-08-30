function isLeapYear() {
  let date = document.getElementById("date");
  let result = document.getElementById("chkIfLeapYear");

  if (date.value % 4 == 0) {
    console.log(true);
    result.innerHTML = date.value + " is a leap year";
  } else {
    console.log(false);
    result.innerHTML = date.value + " isn't a leap year";
  }
}
