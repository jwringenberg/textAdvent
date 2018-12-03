var name = 0;
function setname()
{
  name = prompt("Name your ship");
  localStorage.setItem("x",name);
}
function getname()
{
  alert("Ship name is:"+ localStorage.getItem("x"))
}
