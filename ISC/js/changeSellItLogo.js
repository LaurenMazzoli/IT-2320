function changeSellItLogo() {
    var logoNormal =  document.getElementsByClassName("sell_it_logo_normal");
    var logoHighlight = document.getElementsByClassName("sell_it_logo_highlight");

if (logoNormal[0] != null) 

	logoNormal[0].className="sell_it_logo_highlight"; 
else
	logoHighlight[0].className="sell_it_logo_normal"; 
}