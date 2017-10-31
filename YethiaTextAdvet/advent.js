

function doStuff()
{
	/*this gets info */
	var name = document.getElementById("playerName").value;
	console.log(name);
	document.getElementById("text2").innerHTML = "Welcome " + name + ", to the game...";
}
