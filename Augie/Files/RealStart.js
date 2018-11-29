localStorage.setItem("Refresh Counter", 0);

function nameEntered()
{
  var name = document.getElementById("nameEntry").value;
  localStorage.setItem("dinoPlayerName", name);
  document.getElementById("welcomeSpan").innerHTML = "<br><br> Welcome to the Game " + name + "! <br><br> To Continue, Please Press this button: <input type = button id = buttonFormat value = Continue onclick = redirect()>";
}

function redirect()
{
  window.location.href = "stepOne.html";
}
