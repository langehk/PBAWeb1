function isWoman() {
  let cpr = document.getElementById("cpr");

  let result = document.getElementById("chkIfWoman");


while (cpr.value % 2 == 0)
{
  result.innerHTML = cpr.value + " is a Woman!";
  return;
}
while(cpr.value % 2 == 1)
{
  result.innerHTML = cpr.value + " is a Man!";
  return;
}

  /*
// Løsning med If statements,
  
  if (data.value % 2 == 0) {
    result.innerHTML = data.value + " is a Woman!";
  } else {
    result.innerHTML = data.value + " is a MAN!";
  }
  */

}
