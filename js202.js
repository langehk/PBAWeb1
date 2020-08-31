function isWoman() {
  let data = document.getElementById("cpr");

  let result = document.getElementById("chkIfWoman");

  
while (data.value % 2 == 0)
{
  result.innerHTML = data.value + " is a Woman!";
  return;
}
while(data.value % 2 == 1)
{
  result.innerHTML = data.value + " is a Man!";
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
