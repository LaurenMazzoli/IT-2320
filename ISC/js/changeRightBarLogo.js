function changeRightBarLogo()
{
var pumaRed = document.getElementsByClassName("puma_logo_red");
var pumaBlue = document.getElementsByClassName("puma_logo_blue");

if (pumaRed != null) 
	puma.className="puma_logo_blue"; 
else
	puma.className="puma_logo_red"; 
}