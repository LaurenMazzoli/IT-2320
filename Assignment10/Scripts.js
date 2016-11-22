var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');

Main.MouseDown = false;
Main.MX = 0;
Main.MY = 0;

Main.Canvas.onmousemove = function (event) {

    if (event.offsetX) {
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
Main.Box = function(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
	this.IsSelected = function () {
	    if (!Main.Mousedown) return false;
	    var boxX2 = this.X + this.Width;
	    var boxY2 = this.Y + this.Height;

	    var insideBoxWidth = Main.MX > this.X && Main.MX < boxX2;
	    var insideBoxHeight = Main.MY > this.Y && Main.MY < boxY2;
	    return insideBoxWidth && insideBoxHeight;
	}
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
	this.DrawAsImage = function(image)
	{
		Main.Context.drawImage(image, this.X, this.Y, this.Width, this.Height);
	}
}

Main.Boxes = [
	new Main.Box(20,  100, 150, 250),
	new Main.Box(180, 100, 150, 250),
	new Main.Box(350, 100, 150, 250),

    new Main.Box(520, 70, 180, 300),

    new Main.Box(720, 100, 150, 250),
    new Main.Box(890, 100, 150, 250),
    new Main.Box(1060, 100, 150, 250)
];
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

    /// main code ///
	for (var i=0; i<Main.Boxes.length; i++)
	    Main.Boxes[i].DrawAsImage(Main.picImage[i]);

	for (var i=0; i<Main.Boxes.length; i++)
        {
	    if (Main.Boxes[i].IsSelected() && Main.MX < Main.Canvas.x)
	        Main.shiftImagesLeft(Main.Boxes);
	    if (Main.Boxes[i].IsSelected() && Main.MX > Main.Canvas.x)
	        Main.shiftImagesRight();
	    }
	requestAnimFrame(function() { Main.Animate(); });
}
	Main.shiftImagesLeft = function(boxes)
	{
	    var temp = new Image();
	    temp.src = boxes[0];
	    for (var i = 1; i < boxes.length; i++)
	        boxes[i-1].src = boxes[i].src;
	    boxes[boxes.length] = temp.src;
	}
	Main.shiftImagesRight = function (boxes) {
	    var temp = new Image();
	    temp.src = boxes[boxes.length];
	    for (var i = 0; i < boxes.length-1; i++)
	        boxes[i + 1].src = boxes[i].src;
	    boxes[boxes.length] = temp.src;
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
    $(Main.Canvas).mouseenter(function (mouseEvent) { Main.MouseEnter(mouseEvent); });
    $(Main.Canvas).mouseleave(function (mouseEvent) { Main.MouseLeave(mouseEvent); });
});