// Alvin Wu & Dean Carey
// SoftDev pd 1
// K25 -- Canvas Based JS Drawing
// 2021-05-05

var c = document.getElementById("slate"); //Gets canvas
var ctx = c.getContext("2d"); //2D drawing context
var pos = {x:0,y:0}; //Default position of cursor
var state = 0; //0 is line, 1 is box, initialize state as line by default

function changeState() //Change type of drawing
	{
	if (state === 0)
		{state = 1; document.getElementById('drawtype').innerHTML = "Current Type: Box";}
	else
		{state = 0; document.getElementById('drawtype').innerHTML = "Current Type: Line";}
	}
	
function getPosition(e) //Takes in a mouse event and changes the x and y coords of pos by using offset
	{
	const rect = c.getBoundingClientRect();
    	pos.x = e.offsetX;
    	pos.y = e.offsetY;
	}

function drawline(event) //Draws line
	{
	if (state == 0) //Check to make sure the setting is on "line" mode
		{
		if (event.buttons !== 1) //Only draw when the mouse is clicked down, otherwise stop
			return;
		getPosition(event); //Set mouse position
		ctx.fillStyle = "#000000"; 
		ctx.fillRect (pos.x, pos.y, 4, 4); //Draw a rect of width 4 and height 4 at the cursor, can be held down
		}
	}

function drawrect(event) //Draws rectangle
	{
	if (state == 1) //Checks to make sure the setting is on "rect" mode
		{
		getPosition(event); //Set mouse position
		ctx.fillStyle = "#000000";
		ctx.beginPath(); //Begin a new sequence
		ctx.rect(pos.x,pos.y,100,100); //Draw a rect of width 100 and height 100 at the cursor, cannot be held down
		ctx.stroke(); //Finalize and draw
		}
	}


function clearcanv() //Clears canvas using clearRect
	{ctx.clearRect(0,0,c.width,c.height);}