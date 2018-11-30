
function next() {
location.href = "sword.html";

}
function nope() {
  location.href = "staff.html";
}
var globalVar = 0
var x = 0
var date = ""
function printname()
{
  name = document.getElementById('userinput').value;
  document.getElementById("table").innerHTML = name;
  globalVar = name;
  localStorage.setItem("x", globalVar);

}
