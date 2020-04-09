var button = document.getElementById("button");
var taskInput = document.getElementById("taskInput");
var ul = document.querySelector("ul");
function appendTasks() {
	var listDiv = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	var space = document.createElement("br");
	li.appendChild(document.createTextNode(taskInput.value + " "));
	delButton.appendChild(document.createTextNode("Delete"));
	ul.appendChild(listDiv)
	listDiv.appendChild(li);
	listDiv.appendChild(delButton);
	listDiv.appendChild(space);
	li.className = "itemPending";
	delButton.className = "button";
	taskInput.value = "";
}

button.addEventListener("click", function(){
	if (taskInput.value.length !== 0) {
		appendTasks();
	}
});

taskInput.addEventListener("keypress", function(){
	if (taskInput.value.length !== 0 && event.keyCode === 13) {
		appendTasks();
	}
});

var count = document.getElementById("countButton");

count.addEventListener("click", function(){
	var tasks = document.getElementsByTagName("li");
	alert(tasks.length);
});

var taskList = document.getElementById("taskList");

function togglePendingDone(e){
	var selectedItem = e.target;
	if (selectedItem.className === "itemPending"){
		selectedItem.className = "itemDone";
	} else if (selectedItem.className === "itemDone"){
		selectedItem.className = "itemPending";
	} else {
	}
}

function deleteListItem (e){
	var deleteButtonClicked = e.target;
	if (deleteButtonClicked.className === "button"){
		var deleteDiv = deleteButtonClicked.parentElement;
		var ulList = deleteDiv.parentElement;
		ulList.removeChild(deleteDiv);
	} else {
	}
}

taskList.addEventListener("click", togglePendingDone)

taskList.addEventListener("click", deleteListItem)