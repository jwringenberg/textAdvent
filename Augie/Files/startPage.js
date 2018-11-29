document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
        window.location.href = "RealStart.html";
    }
}); //alert if space key is pressed


//update variable if page is refreshed.
var globalvar = 0;
globalvar = localStorage.getItem("Refresh Counter");
globalvar++;
localStorage.setItem("Refresh Counter", globalvar);

if(globalvar >= 2)
{
  window.location.href = "refreshPrank.html";
}
