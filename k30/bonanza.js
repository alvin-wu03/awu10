


//access canvas and buttons via DOM
var c = document.getElementById("playground");
var startButton = document.getElementById( "buttonCircle" );
var arrowleft = document.getElementById( "arrowleft" );
var arrowright = document.getElementById( "arrowright" );
var logo = new Image();
logo.src = "logo_dvd.jpg";

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#2b04d6";

var requestID;

//var clear = function(e) {
var clear = (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, 500, 500);
};

var moveleft = () => {
	



//x and y represent position of image, dirx and diry represent direction it's moving
var x = 1;
var y = 1;
var dirx = 1;
var diry = 1;
var startgame = () => {
    //console.log("drawDVD invoked...")
    window.cancelAnimationFrame( requestID );
    ctx.clearRect( 0, 0, c.width, c.height );
    
    //Bounce functionality
    if (x <= 0) { //If the image touches the left wall set x-direction to positive
        dirx = 1;

    } else if (x >= c.width - 105){ //Otherwise, if it touches the right wall, set x-direction to negative
        dirx = -1;

    }
    if (y <= 0) { //If the image touches the bottom wall, set y-direction to positive
        diry = 1;

    } else if (y >= c.height - 46){ //If the image touches the top wall, set y-direction to negative
        diry = -1;
    }
    x += dirx; //Increment position values based on direction
    y += diry;
    //console.log(x + " out of " + (c.width - 105));
    ctx.beginPath();
    ctx.drawImage(logo,x,y,105,46);
    ctx.stroke();
    ctx.fill();
    requestID = window.requestAnimationFrame( drawDVD );
}

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame( requestID );
};

arrowleft.addEventListener( "click", drawDot );
arrowright.addEventListener( "click",  stopIt );
dvdButton.addEventListener( "click",  drawDVD );