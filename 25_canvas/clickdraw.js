var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var pos = {x:0,y:0};
var state = 0; //0 is line, 1 is box

function changeState()
	{
	if (state === 0)
		{state = 1; document.getElementById('drawtype').innerHTML = "Current Type: Box";}
	else
		{state = 0; document.getElementById('drawtype').innerHTML = "Current Type: Line";}
	}
	
function getPosition(e)
	{
	const rect = c.getBoundingClientRect();
    	pos.x = e.offsetX;
    	pos.y = e.offsetY;
	}

function drawline(event)
	{
	if (state == 0)
		{
		if (event.buttons !== 1)
			return;
		getPosition(event);
		ctx.fillStyle = "#000000";
		ctx.fillRect (pos.x, pos.y, 4, 4);
		}
	}

function drawrect(event)
	{
	if (state == 1)
		{
		getPosition(event);
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.rect(pos.x,pos.y,100,100);
		ctx.stroke();
		}
	}


function clearcanv()
	{ctx.clearRect(0,0,c.width,c.height);}