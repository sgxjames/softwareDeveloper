var bodyBackground = document.querySelector("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var gradientDescription = document.querySelector("h3");

function changeGradient(){
	bodyBackground.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
	gradientDescription.textContent = bodyBackground.style.background;
}

color1.addEventListener("input", changeGradient)

color2.addEventListener("input", changeGradient)