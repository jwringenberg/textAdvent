function nam()
{
    var person = prompt("Please enter your name");
    localStorage.setItem("x", person);
    alert(localStorage.getItem("x"));
    alert("Welcome to the Star Wars Text Adventure" + person);
}
function play()
{
  window.location.href = "PageOne.html";
}
function highlights()
{
  window.location.href = "highlights.html";
}
function HomeScreen()
{
  window.location.href = "adventure.html";
  alert("You Won" + localStorage.getItem("x"));
}
function HomeScreen2()
{
  window.location.href = "adventure.html";
  alert("You Died" + localStorage.getItem("x"));
}
