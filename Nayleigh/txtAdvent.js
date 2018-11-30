var name = 0;

function startGame()
{
    console.log("startGame Works");
  window.location.href="DescriptPage.html";
}

function giveName()
{
  console.log("giveName Works");
name = document.getElementById('name').value;
name =  localStorage.setItem("x", name);
  var greet = "Nice ta meet ya ";
var nm = localStorage.getItem("x");
var greend = ", are you ready to start the quest?";
  document.getElementById('greet').innerHTML = greet + nm + greend;
}

function onQuest()
{
console.log("onQuest Works");
window.location.href="page1.html";
}

function leftPath()
{
  console.log("leftPath Works");
  window.location.href="left1.html";
}

function middlePath()
{
  console.log("middlePath Works");
  window.location.href="middle1.html";
}

function rightPath()
{
  console.log("rightPath Works");
  window.location.href="right1.html";
}

function liveSnake()
{
    console.log("liveSnake Works");
    window.location.href="left2.html";
}

function dieSnake()
{
  console.log("dieSnake Works");
  window.location.href="snakeDeath.html";
}

function liveCliff()
{
  console.log("liveCliff Works");
  window.location.href="right2.html";
}

function dieCliff()
{
  console.log("dieCliff Works");
  window.location.href="cliffDeath.html";
}

function liveMonkey()
  {
    console.log("liveMonkey Works");
    window.location.href="middle2.html";
  }

function dieMonkey()
{
  console.log("dieMonkey Works");
  window.location.href="monkeyDeath.html";
}

function words()
{
      console.log("if words Works");
  var s = document.getElementById('south').value;
  var n = document.getElementById('north').value;
  if(s == "pebbles" & n == "shells")
  {
    console.log("if words Works");
    window.location.href="medallion.html";
  }
  else{
    console.log("if words Works");
    window.location.href="wrongWords.html";
  }
}

function back()
{
  console.log("back Works");
  window.location.href="page1.html";
}

function startOver()
{
  console.log("startOver Works");
  window.location.href="txtAdvent.html";
}
