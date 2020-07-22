var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var headingColor = document.getElementById("heading");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

hardBtn.addEventListener("click",function() {
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	
	}
})

easyBtn.addEventListener("click",function() {
	numSquares = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}

	}
})

resetButton.addEventListener("click",function(){
	resetButton.textContent = "New colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent="";
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	headingColor.style.backgroundColor = "steelblue";
})

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor= colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor; //grabing clicked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent= "Play Again ?";
			changedColors(clickedColor);

		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}
function changedColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
	headingColor.style.backgroundColor = color;
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(RandomColor());

	}
	return arr;
}

function RandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g +", " +b+")";
}


function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];  // returns any element from length of colors
}



