var database = [
	{
		username: "Bonnie James",
		password: "Saclolo",
	},
	{
		username: "Venus",
		password: "Miasco",
	},
	{
		username: "Anecito",
		password: "Miasco",
	},
	{
		username: "Sisinia",
		password: "Bersaluna",
	},
	{
		username: "Sheng",
		password: "Cababat",
	},
	{
		username: "Wennelito",
		password: "Sumampong",
	},
	{
		username: "Adelwisa",
		password: "Abucejo",
	}
]

var timeline = [
	{
		username: "Bonnie James",
		timeline: "Today is the day!",
	},
	{
		username: "Venus",
		timeline: "Yesterday is all but lost!",
	},
	{
		username: "Sheng",
		timeline: "Tomorrow is ours to conquer!",
	}
]

function checkValidity() {
	for (var i = 0; i < database.length; i++) {
		if (usernameInput === database[i].username && passwordInput === database[i].password){
			return true;
		}
	}
}

function signIn () {
	if (checkValidity()) {
		alert("Welcome!");
	} else {
		alert("Sorry wrong username and password combination");
	}
}

var usernameInput = prompt ("What is your username?");
var passwordInput = prompt ("What is your password?");

checkValidity();
signIn();