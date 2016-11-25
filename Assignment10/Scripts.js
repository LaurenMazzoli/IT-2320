var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');

Main.MousePressed = false;
Main.CarouselIsSelected = false;
Main.MX = 0;
Main.MY = 0;

Main.MouseUp = function (mouseEvent) {
    Main.MousePressed = false;
    Main.CarouselIsSelected = false;
}
Main.MouseDown = function(mouseEvent) {
//    check to see if the click is inside a box. 
    Main.MousePressed = true;
    for (var i = 0; i < Main.Boxes.length; i++)
    {
        if (Main.Boxes[i].IsSelected) 
            Main.CarouselIsSelected = true;
    }
}
Main.Canvas.onmousemove = function (event) {
    if (event.offsetX)
    {
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    }
    else if (event.layerX) {
        mouseX = event.layerX;
        mouseY = event.layerY;
    }
    Main.MX = mouseX;
    Main.MY = mouseY;
}

Main.picImage = new Array();
Main.picImage[0] = new Image();
Main.picImage[0].src = "images/Gabby1.jpg";
Main.picImage[1] = new Image();
Main.picImage[1].src = "images/Gabby2.jpg";
Main.picImage[2] = new Image();
Main.picImage[2].src = "images/Gabby3.jpg";
Main.picImage[3] = new Image();
Main.picImage[3].src = "images/Gabby4.jpg";
Main.picImage[4] = new Image();
Main.picImage[4].src = "images/Gabby5.jpg";
Main.picImage[5] = new Image();
Main.picImage[5].src = "images/Gabby6.jpg";
Main.picImage[6] = new Image();
Main.picImage[6].src = "images/Gabby7.jpg";

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
Main.Box = function(x, y, w, h, img)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;
	this.Pic = new Image();
	this.Pic.src = img;

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
	this.IsSelected = function () {
	    if (!Main.MousePressed) return false;
	    var boxX2 = this.X + this.Width;
	    var boxY2 = this.Y + this.Height;

	    var insideBoxWidth = Main.MX > this.X && Main.MX < boxX2;
	    var insideBoxHeight = Main.MY > this.Y && Main.MY < boxY2;
	    return insideBoxWidth && insideBoxHeight;
	}
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
	this.IsMovingLeft = function () {
	    var boxX2 = this.X + this.Width;
	    var boxY2 = this.Y + this.Height;

	    var insideBoxWidth = Main.MX > this.X && Main.MX < boxX2;
	    var insideBoxHeight = Main.MY > this.Y && Main.MY < boxY2;
	    return insideBoxWidth && insideBoxHeight;
	}

    ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
	this.DrawAsImage = function()
	{
		Main.Context.drawImage(this.Pic, this.X, this.Y, this.Width, this.Height);
	}
}

Main.Boxes = [
	new Main.Box(20,   100, 150, 250,"images/Gabby1.jpg"),
	new Main.Box(180,  100, 150, 250,"images/Gabby2.jpg"),
	new Main.Box(350,  100, 150, 250,"images/Gabby3.jpg"),
    new Main.Box(520,   70, 180, 300,"images/Gabby4.jpg"),
    new Main.Box(720,  100, 150, 250,"images/Gabby5.jpg"),
    new Main.Box(890,  100, 150, 250,"images/Gabby6.jpg"),
    new Main.Box(1060, 100, 150, 250,"images/Gabby7.jpg")
];
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

Main.Animate = function()
{
    // clear canvas
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

    // create gradient
	var gradient=Main.Context.createLinearGradient(0,0,Main.Canvas.width,0);
	gradient.addColorStop(0,"pink");
	gradient.addColorStop(1,"white");

    // draw gradient background
	Main.Context.fillStyle=gradient;
	Main.Context.fillRect(0,0,Main.Canvas.width,Main.Canvas.height);

    // add header
	Main.Context.fillStyle = "black";
	Main.Context.font = "30px Arial";
	Main.Context.fillText("Gabby's Senior Pics 2017", Main.Canvas.width/3, 50);

    // check if img selected and if moved left or right from selection
	var x2 = 0;
	for (var i=0; i < Main.Boxes.length; i++)
	{
	    
   	    x2 = Main.Boxes[i].X + Main.Boxes[i].Width;
   	    if (Main.CarouselIsSelected && Main.MX < Main.Boxes[i].X)
   	        Main.ShiftImagesLeft();
   	    else if (Main.CarouselIsSelected && (Main.MX > x2))    
   	        Main.ShiftImagesRight();
   	    Main.Boxes[i].DrawAsImage(Main.Boxes[i].Pic);
	}
	requestAnimFrame(function() { Main.Animate(); });
}
Main.ShiftImagesLeft=function()
{
  //  alert("in shift left");
    var tempPic = Main.Boxes[0].Pic.src;
 //   alert('temp pic src:' + tempPic);
        for (var i = 0; i< Main.Boxes.length-1; i++)
            Main.Boxes[i].Pic.src = Main.Boxes[i + 1].Pic.src;
        Main.Boxes[Main.Boxes.length-1].Pic.src = tempPic;
}
Main.ShiftImagesRight = function()
{
      //  alert('in shift right');
        var tempPic = Main.Boxes[Main.Boxes.length-1].Pic.src;
 //       alert('temp pic src:' + tempPic);
        for (var i = Main.Boxes.length - 2; i > 0; i--)
            Main.Boxes[i+1].Pic.src = Main.Boxes[i].Pic.src;
        Main.Boxes[0].Pic.src = tempPic;
}
window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
    Main.Animate();
    Main.Canvas.addEventListener('mouseup',  function (mouseEvent) { Main.MouseUp(mouseEvent); });
    Main.Canvas.addEventListener('mousedown', function (mouseEvent) { Main.MouseDown(mouseEvent); });
});