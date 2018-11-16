function loadScript()
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var JSONData = JSON.parse(this.responseText);
			makeList(JSONData);
		}
	};
	xmlhttp.open("GET", "homepages.json", true);
	xmlhttp.send();
}
function makeList(JSONData)
{
  var mainList = document.getelementById("MAIN_LIST");
  for(var i = 0; i<JSONData.length)
  {
    mainList.appendChild(newListItem(JSONData[i].Name, JSONData[i].homePageLocation));
  }
}
function newListItem(name, location)
{
  var item = document.createElement("LI");
  item.appendChild(document.createElement("A"));
  item.children[0].setAttribute("href", loaction)
  item.children[0].innerText=name;
  return item
}
