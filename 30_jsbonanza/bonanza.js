var c = document.getElementById("playground");
var playButton = document.getElementById("buttonPlay");
var resetButton = document.getElementById("buttonReset");

var ctx = c.getContext("2d");

ctx.fillStyle = "#000000";

var requestID;

var clear = (e) => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
};

var reset = () => {
	clear();
}

var start = () => {
	drawBall();
	drawPlatform();
	//drawBricks();
	//play();
}

var drawBall = () => {
	ctx.beginPath();
	ctx.arc(250,380,10,0,Math.PI * 2);
	ctx.stroke();
} 

var drawPlatform = () => {
	ctx.beginPath();
	ctx.rect(225,400,50,5);
	ctx.stroke();
}

var drawBricks = () => {
	//to be done
			
}

var play = () => {
	//bouncing, bricks disappearing, collision
	//mouse control of platform?
}
	

playButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);