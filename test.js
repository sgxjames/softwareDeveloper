var newsfeed = [
	{
		username: "Bonnie James",
		timeline: "Today is the day!",
	},
	{
		username: "Sheng",
		timeline: "Yesterday is but gone!",
	},
	{
		username: "Wennelito",
		timeline: "Tomorrow is ours to conquer!",
	}
];

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
		username: "Sheng",
		password: "Cababat",
	},
	{
		username: "Wennelito",
		password: "Sumampong",
	},
	{
		username: "Sisinia",
		password: "Bersaluna",
	}
];

function validLogIn (username, password) {
	for (var i = 0; i < database.length; i++) {
		if (username === database[i].username && password === database[i].password) {
			return true;
		} 
	} return false;
};

function signIn (username, password) {
	if (validLogIn (username, password)) {
		console.log (newsfeed);
	} else {
		alert ("Sorry wrong username and password combination!");
	}
};

usernameInput = prompt ("What is your username?");
passwordInput = prompt ("What is your password?");

signIn (usernameInput, passwordInput);

