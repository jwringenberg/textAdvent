
function dispName()
{
  var name = localStorage.getItem("dinoPlayerName");
  document.getElementById("nameSpan").innerHTML = name;
}
function returnHome()
{
  window.location.href = "startPage.html";
}

function removeSword()
{
  localStorage.setItem("dinoGameSword", 0);
}

function getSword()
{
  localStorage.setItem("dinoGameSword", 1);
}
