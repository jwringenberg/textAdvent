
function start()
{
  //Sword: 1 = true, 0 = false
  localStorage.setItem("sword", 0);
  localStorage.setItem("gold", 10);
}

function storeName()
{
  localStorage.setItem("name", "Congratulations, you won, ");
  localStorage.setItem("name", localStorage.getItem("name") + document.getElementById("nameIn").value);
  localStorage.setItem("name", localStorage.getItem("name") + "!");
}

function test()
{
  alert (localStorage.getItem("sword"));
  alert (localStorage.getItem("gold"));
}

function buySword()
{
  localStorage.setItem("sword", 1);
  localStorage.setItem("gold", 5);
}

function rodeCarriage()
{
  localStorage.setItem("gold", (localStorage.getItem("gold") - 5));
}

function rollLeft()
{
  var roll = parseInt((Math.random() * 6) + 1);
  if(roll <= 4)
  {
    if(localStorage.getItem("gold") >= 5)
    {
      location.href = "goblinWin.html";
    }
    else if(localStorage.getItem("gold") < 5)
    {
      location.href = "goblinLose.html";
    }
  }
  else {
    if(localStorage.getItem("sword") == 1)
    {
      location.href = "serpentWin.html";
    }
    else if(localStorage.getItem("sword") == 0)
    {
      location.href = "serpentLose.html";
    }
  }
}

function rollRight()
{
  var roll = parseInt((Math.random() * 6) + 1);
  if(roll <= 4)
  {
     var check = localStorage.getItem("sword");
    if(check == 1)
    {
      location.href = "serpentWin.html";
    }
    if(check == 0)
    {
      location.href = "serpentLose.html";
    }
  }
  else {
    if(localStorage.getItem("gold") >= 5)
    {
      location.href = "goblinWin.html";
    }
     if(localStorage.getItem("gold") < 5)
    {
      location.href = "goblinLose.html";
    }
  }
}

function getName()
{
  document.getElementById("winMessage").innerHTML = localStorage.getItem("name");
}
