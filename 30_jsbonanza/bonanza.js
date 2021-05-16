var c = document.getElementById("playground");
var playButton = document.getElementById("buttonPlay");
var resetButton = document.getElementById("buttonReset");

var ctx = c.getContext("2d");

ctx.fillStyle = "#000000";
var requestID = 0;
var playing = false;
var x = 0;
var y = 0;
var prevx = 0;
var prevy = 0;
var bricks = [];
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
	drawBlocks();
	//play();
	playing = true;
}

var drawBall = (x,y) => {
	ctx.beginPath();
	ctx.arc(x,y,10,0,Math.PI * 2);
	ctx.stroke();
} 



var drawPlatform = (x,y) => {
	ctx.beginPath();
	ctx.fillRect(x,y,50,5);
	ctx.stroke();
}

//brick generation
var drawBlocks = () => {
	for(var col = 0; col < 50; col++) 
		{
    		bricks[col] = [];
    		for(var row=0; row < 4; row++) 
			{
        		bricks[col][row] = { x: 0, y: 0, status: 1 };
    			}
		}
	for (var col = 0; col < 50; col++)
		{
		for (var row = 0; row < 4; row ++)
			{
			if(bricks[col][row].status == 1) 
				{
				var brickX = col * 10
				var brickY = row * 10
				bricks[col][row].x = brickX;
				bricks[col][row].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, 30, 10);
				ctx.fillStyle = "#000000";
				ctx.stroke();
				}
			}
		}
			
}

var play = () => {
	//bouncing, bricks disappearing, collision
	//mouse control of platform?
}

//needs work, moves platform from side to side
//trying to figure out how to get it to delete the previous platform when it moves
var mousemove = (e) => {
	x = e.offsetX;
	y = e.offsetY;
	if (playing == false) {return;}
	if (y < 400 || y > 405) //prevents up and down movement
		{return;}
	else
		{
		window.cancelAnimationFrame(requestID);
		ctx.clearRect(prevx,prevy,50,5);
		console.log('mousemove invoked');
		console.log(x);
		console.log(y);
		drawPlatform(x,y);
		}
	prevx = x;
	prevy = y;
	requestID = window.requestAnimationFrame(mousemove);
}
	

playButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);
c.addEventListener('mousemove', mousemove);