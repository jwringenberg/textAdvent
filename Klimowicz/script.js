var indexNumber = 0;
var name;
var left;
var peak;
var jump;
var stop;
var create;

function logon() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if ((user === "admin") && (pass === "secret")) {

	} else {
		document.getElementById("login-splash-text").innerHTML = "Login not recognized, please try again";
	}
}

function startgame() {
	document.getElementById("start-button").className = "hidden";
	document.getElementById("container").className = "centered";
	var container = document.getElementById("container");
	var nameContainer = document.getElementById("name-container")
	//containerCenter.style.display = "block";
	nameContainer.className = "fadeIn";
	var nextbutton = document.getElementById("name-button");
	//nextbutton.style.display = "table-cell";
}

function nextpage() {
	indexNumber++;

	if (indexNumber == 1) {
		page1();
	} else if (indexNumber == 2) {
		page2();
	} else if (indexNumber == 3) {
		page3();
	} else if (indexNumber == 4) {
		page4();
	} else if (indexNumber == 5) {
		page5();
	} else if (indexNumber == 6) {
		page6();
	} else if (indexNumber == 7) {
		page7();
	} else if (indexNumber == 8) {
		resultspage();
	}
}

function page1() {
	var span = document.getElementById("name-span");
	name = document.getElementById("name-input").value;
	span.innerHTML = name;
	var div = document.getElementById("name-display");
	div.className = "fadeIn";
}

function page2() {
	document.getElementById("name-container").className = "fadeOut";
	document.getElementById("name-container").className = "hidden";
	document.getElementById("name-span-two").innerHTML = name;
	document.getElementById("page-one").className = "page-div";
	document.getElementById("page-one").classList.add("fadeIn");
}

function setLeft() {
	left = true;
	nextpage();
}

function setRight() {
	left = false;
	nextpage();
}

function page3() {
	document.getElementById("page-one").className = "hidden";
	document.getElementById("page-two").className = "page-div";
	document.getElementById("page-two").classList.add("fadeIn");
}

function setPeak() {
	peak = true;
	nextpage();
}

function setDown() {
	peak = false;
	nextpage();
}

function page4() {
	document.getElementById("page-two").className = "hidden";
	document.getElementById("page-three").className = "page-div";
	document.getElementById("page-three").classList.add("fadeIn");
}

function setJump() {
	jump = true;
	nextpage();
}

function setWalk() {
	jump = false;
	nextpage();
}

function page5() {
	document.getElementById("page-three").className = "hidden";
	document.getElementById("page-four").className = "page-div";
	document.getElementById("page-four").classList.add("fadeIn");
}

function setPath() {
	path = true;
	nextpage();
}

function setTown() {
	path = false;
	nextpage();
}

function page6() {
	document.getElementById("page-four").className = "hidden";
	document.getElementById("page-five").className = "page-div";
	document.getElementById("page-five").classList.add("fadeIn");
}

function setStop() {
	stop = true;
	nextpage();
}

function setWalk2() {
	stop = false;
	nextpage();
}

function page7() {
	document.getElementById("page-five").className = "hidden";
	document.getElementById("page-six").className = "page-div";
	document.getElementById("page-six").classList.add("fadeIn");
}

function setCreate() {
	create = true;
	nextpage();
}

function setImprove() {
	create = false;
	nextpage();
}

function resultspage() {
	if (name) {
		document.getElementById("results-span-one").innerHTML = "You are a logical, mathematical induvidual";
	} else {
		document.getElementById("results-span-one").innerHTML = "You are a creative, artistic induvidual";
	}

	if (left) {
		document.getElementById("results-span-two").innerHTML = "You are a visual induvidual, and appreciate artistic views";
	} else {
		document.getElementById("results-span-two").innerHTML = "You are a time-oriented induvidual";
	}

	if (peak) {
		document.getElementById("results-span-three").innerHTML = "You are okay with risk, and use it efficiently";
	} else {
		document.getElementById("results-span-three").innerHTML = "You are a safe induvidual, and don't take unnecessary risks";
	}

	if (jump) {
		document.getElementById("results-span-four").innerHTML = "You are an introverted induvidual, and move best alone";
	} else {
		document.getElementById("results-span-four").innerHTML = "You are a social induvidual, and work best in the company of others";
	}

	if (stop) {
		document.getElementById("results-span-five").innerHTML = "You are a spatial induvidual, and use your surroundings to learn";
	} else {
		document.getElementById("results-span-five").innerHTML = "You are an auditory learner, and use your hearing to better understand your nearby areas";
	}

	if (create) {
		document.getElementById("results-span-six").innerHTML = "You choose to create your own path, even if it is not perfect at first";
	} else {
		document.getElementById("results-span-six").innerHTML = "You choose to improve on what others have set already, making the best possible version";
	}

	document.getElementById("page-six").className = "hidden";
	document.getElementById("results-page").className = "fadeIn";
}