var c = document.getElementById("playground");
var playButton = document.getElementById("buttonPlay");
var resetButton = document.getElementById("buttonReset");

var ctx = c.getContext("2d");

ctx.fillStyle = "#000000";

var requestID = 0;

var clear = (e) => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
};

var reset = () => {
	clear();
}

var start = () => {
	drawBall(250,380);
	drawPlatform(225,400);
	//drawBricks();
	//play();
}

var drawBall = (x,y) => {
	ctx.beginPath();
	ctx.arc(x,y,10,0,Math.PI * 2);
	ctx.stroke();
} 



var drawPlatform = (x,y) => {
	ctx.beginPath();
	ctx.rect(x,y,50,5);
	ctx.stroke();
}

var drawBricks = () => {
	//to be done
			
}

var play = () => {
	//bouncing, bricks disappearing, collision
	//mouse control of platform?
}

var mousemove = (e) => {
	console.log('mousemove invoked');
	window.cancelAnimationFrame(requestID);
	//ctx.clearRect(0,0,c.width,c.height);
	x = e.offsetX;
	y = e.offSetY;
	drawPlatform(x,y);
	requestID = window.requestAnimationFrame(mousemove);
}
	

playButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);
c.addEventListener('mousemove', mousemove);