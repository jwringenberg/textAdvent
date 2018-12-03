var globalVar = 0;
var x = 0;
var date = "";
function printname()
{
  name = document.getElementById("userin").value;
  document.getElementById("output").innerHTML = name;
  globalVar = name;
  localStorage.setItem("x", globalVar);
}
