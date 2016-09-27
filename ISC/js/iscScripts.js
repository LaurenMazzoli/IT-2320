// ISC Website java script 
// Lauren Mazzoli 
// Fall 2016 IT-2320
// Assignment 2 - Unobstrusive js
//
window.onload=function Load()
{
//	var jQueryLib = document.createElement('script');
//	jQueryLib.src= 'http://code.jquery.com/jquery-2.1.3.min.js';
//	document.head.appendChild(jQueryLib);

//	var bxSliderJs = document.createElement('script');
//	bxSliderJs.src = 'js/jquery.bxslider.min.js';
//	document.head.appendChild(bxSliderJs);

//	var slickNavJs = document.createElement('script');
//	slickNavJs.src = 'js/jquery.slicknav.min.js';
//	document.head.appendChild(slickNavJs);

//	$(document).ready(function(){
//	        $('.nav_menu').slicknav({prependTo:".mobile_menu"});		 
//		$('.bxslider').bxSlider({ auto: true, captions: true})
//		$('#right_bar_logo').onclick = changeRightBarLogo;   
//	});

	var LogoNormal = document.getElementsByClassName("sell_it_logo_normal")[0];
 	LogoNormal.addEventListener("click", ChangeSellItLogo);

    	var footerContent =  document.getElementsByClassName("footer_content")[0];

	GetFooterContent(footerContent);

function ChangeSellItLogo(element) {

	element.target.className = (element.target.className=="sell_it_logo_normal") ? 		"sell_it_logo_highlight" : "sell_it_logo_normal";
}

function GetFooterContent(footerContent)
{
	var today = new Date();

        footerContent.innerHTML = "&copy;&nbsp;";
        footerContent.innerHTML += today.getFullYear();
	footerContent.innerHTML += ", Lauren Mazzoli";
	footerContent.innerHTML += " - unofficial Website developed for educational use";
}
}