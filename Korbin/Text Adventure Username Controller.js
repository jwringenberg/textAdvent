sessionStorage.username;
sessionStorage.randomselectorname;
sessionStorage.nameofhacked;
sessionStorage.hackedrelatedone;
sessionStorage.hackedrelatedtwo;
sessionStorage.hackedrelatedthree;
sessionStorage.hackedrelatedfour;
sessionStorage.hackedrelatedfive
sessionStorage.hackedrelatedfoura;
sessionStorage.relationtohackedone;
sessionStorage.keypresslist;
sessionStorage.websitelist;
sessionStorage.imageofperson;

function setusername()
{
	if (document.getElementById('userfield').value != 'The user'){
	sessionStorage.username = document.getElementById('userfield').value;
	sessionStorage.randomselectorname=Math.floor(Math.random() * 8);
	document.getElementById('buttonofready').innerHTML = '<input type="button" value="Ready to Start" onclick="allthevariables()">';
	}
	else {
		alert('You can\'t set your username to "The user".')
	}
}

function callusername()
{
	document.getElementById('usernamefiller').innerHTML = sessionStorage.username;
}

function gameentry()
{
	location.href="Text Adventure Page 1.html";
}

function allthevariables()
{
	document.getElementById('buttonofstart').innerHTML = '<input type="button" value="Start!" onclick="gameentry()">';
	if(sessionStorage.randomselectorname>=8){
		sessionStorage.randomselectorname=1;
	}
	if(sessionStorage.randomselectorname<=0){
		sessionStorage.randomselectorname=1;
	}
	if(sessionStorage.randomselectorname==1){
		sessionStorage.nameofhacked = 'Captain Benjamin Sisko';
		sessionStorage.hackedrelatedone = 'Major Nerys';
		sessionStorage.hackedrelatedtwo = 'on Deep Space Nine';
		sessionStorage.hackedrelatedthree = 'near Bajor';
		sessionStorage.relationtohackedone = 'are friends and coworkers with';
		sessionStorage.hackedrelatedfour='42 years old';
		sessionStorage.hackedrelatedfoura='in 2333';
		sessionStorage.hackedrelatedfive='Star Trek';
		sessionStorage.imageofperson='<img src="Benjamin Sisko.jpg" alt="sisko">';
	}
	else if(sessionStorage.randomselectorname==2) {
		sessionStorage.nameofhacked = 'Felix Jongleur';
		sessionStorage.hackedrelatedone='John Dread';
		sessionStorage.hackedrelatedtwo='as the CEO of J Corporation';
		sessionStorage.relationtohackedone = 'are the employer of the psychopathic genius murderer';
		sessionStorage.hackedrelatedthree='in J Corporation\'s headquarters';
		sessionStorage.hackedrelatedfour='somewhere near 206 years old';
		sessionStorage.hackedrelatedfoura='November 9, 1976';
		sessionStorage.hackedrelatedfive='Otherland';
		sessionStorage.imageofperson='<img src="Felix Jongleur.png" alt="drawing of jongleur">';
	}
	else if(sessionStorage.randomselectorname==3) {
		sessionStorage.nameofhacked = 'Kazuto Kirigaya';
		sessionStorage.hackedrelatedone = 'Asuna';
		sessionStorage.hackedrelatedtwo = 'for nobody';
		sessionStorage.hackedrelatedthree='essentially in Gun Gale Online';
		sessionStorage.relationtohackedone = 'are the boyfriend of';
		sessionStorage.hackedrelatedfour='18 years of age';
		sessionStorage.hackedrelatedfoura='in 2007';
		sessionStorage.hackedrelatedfive='Sword Art Online II';
		sessionStorage.imageofperson='<img src="Kazuto Kirigaya.jpg" alt="kirigaya">';
	}
	else if(sessionStorage.randomselectorname==4) {
		sessionStorage.nameofhacked = 'Steven Stone';
		sessionStorage.hackedrelatedone =  'Wallace';
		sessionStorage.relationtohackedone = 'are good friends with';
		sessionStorage.hackedrelatedtwo = 'with Devon Corporation';
		sessionStorage.hackedrelatedthree= 'in the region of Hoenn';
		sessionStorage.hackedrelatedfour='about 35';
		sessionStorage.hackedrelatedfoura='around 1987';
		sessionStorage.hackedrelatedfive='Pokemon Omega Ruby/Alpha Sapphire';
		sessionStorage.imageofperson='<img src="Steven Stone.jpg" alt="stone">';
	}
	else if(sessionStorage.randomselectorname==5) {
		sessionStorage.nameofhacked = 'Mario Mario';
		sessionStorage.hackedrelatedone = 'Luigi Mario';
		sessionStorage.relationtohackedone = 'are the brother of';
		sessionStorage.hackedrelatedtwo = 'for the Mushroom Kingdom';
		sessionStorage.hackedrelatedthree = 'in the Mushroom Kingdom';
		sessionStorage.hackedrelatedfour='34 years old';
		sessionStorage.hackedrelatedfoura='in 1982';
		sessionStorage.hackedrelatedfive='Super Mario Bros. series';
		sessionStorage.imageofperson='<img src="Mario.jpg" alt="mario">';
	}
	else if(sessionStorage.randomselectorname==6) {
		sessionStorage.nameofhacked = 'Katniss Everdeen';
		sessionStorage.hackedrelatedone = 'Peeta Mellark';
		sessionStorage.relationtohackedone = 'are the girlfriend and supposed spouse of';
		sessionStorage.hackedrelatedtwo='for District Thirteen and the rebellion against the Capitol';
		sessionStorage.hackedrelatedthree='in District Thirteen, although she used to live in 12';
		sessionStorage.hackedrelatedfour='about 19 years of age';
		sessionStorage.hackedrelatedfoura='on an unknown date';
		sessionStorage.hackedrelatedfive='The Hunger Games: Mockingjay';
		sessionStorage.imageofperson='<img src="Katniss Everdeen.jpg" alt="everdeen">';
	}
	else if(sessionStorage.randomselectorname==7) {
		sessionStorage.nameofhacked = 'Luke Skywalker';
		sessionStorage.hackedrelatedone = 'Anakin Skywalker';
		sessionStorage.relationtohackedone = 'are the son of';
		sessionStorage.hackedrelatedtwo='for the Alliance';
		sessionStorage.hackedrelatedthree='on some planet in a galaxy far, far away';
		sessionStorage.hackedrelatedfour='about 50 years old';
		sessionStorage.hackedrelatedfoura='on an unknown date';
		sessionStorage.hackedrelatedfive='Star Wars: The Force Awakens';
		sessionStorage.imageofperson='<img src="Luke Skywalker.jpg" alt="skywalker">';
	}
}

function fillinthings()
{
	document.getElementById('usernamefiller').innerHTML =  sessionStorage.username;
	document.getElementById('whoyouhacked').innerHTML = sessionStorage.nameofhacked;
	document.getElementById('whoyouhacked2').innerHTML = sessionStorage.nameofhacked;
	document.getElementById('relatedtohacked1').innerHTML = sessionStorage.hackedrelatedone;
	document.getElementById('relatedtohacked2').innerHTML = sessionStorage.hackedrelatedtwo;
	document.getElementById('relatedtohacked3').innerHTML = sessionStorage.hackedrelatedthree;
	document.getElementById('relatedtohacked4').innerHTML = sessionStorage.hackedrelatedfour;
	document.getElementById('relatedtohacked4a').innerHTML = sessionStorage.hackedrelatedfoura;
	document.getElementById('relationtohacked1').innerHTML = sessionStorage.relationtohackedone;
	document.getElementById('relatedtohacked5').innerHTML = sessionStorage.hackedrelatedfive;
	document.getElementById('setofhacked').innerHTML = sessionStorage.randomselectorname;
	document.getElementById('hackedimage').innerHTML = sessionStorage.imageofperson;
	//document.getElementById('clicklist').innerHTML = keypresslist;
}

function fillinbadending()
{
	document.getElementById('usernamefiller').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller2').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller3').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller4').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller5').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller6').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller7').innerHTML =  sessionStorage.username;
	document.getElementById('usernamefiller8').innerHTML =  sessionStorage.username;
}