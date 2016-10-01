// ISC Website java script 
// Lauren Mazzoli 
// Fall 2016 IT-2320
// Assignment 2 - Unobstrusive js
//
window.onload=function Load()
{
    $('.nav_menu').slicknav({prependTo:".mobile_menu"});		 
    $('.bxslider').bxSlider({ auto: true, 
			      captions: true});

    $('.accordion').accordion({event: "mouseover",
			       heightStyle: "content",
			       collapsible: true});
   

    var hdrImg = document.getElementsByClassName("header_img")[0];
    hdrImg.addEventListener("click", GoToHomePage);

    var hdrImg = document.getElementsByClassName("header_icon")[0];
    hdrImg.addEventListener("click", GoToTwitterPage);


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
function GoToHomePage(element) {
	window.location="index.html";
}

function GoToTwitterPage(element) {
	window.open('http://twitter.com/@isc_boys','_blank'); 
}

// the following functions are invoked from the contact us page to 
// display the contact form data
// 
//function display_data() {
//   	var query = location.search.replace("?", "");
//
//    	if ( query == "" ) 
//		return;    
//	var fields = query.split("&");
//    
//        if ( fields.length == 0 ) 
//	    {document.write("No data was submitted.");} 
//    	else {
//            document.write("<dl>");
//            var field_parts;
//            for ( var i in fields ) {
//                field_parts = fields[i].split("=");
//            	field_parts[0] = decode( field_parts[0] );
//            	field_parts[1] = decode( field_parts[1] );
//            	document.write("<dt>" + field_parts[0] + "</dt>");
//            	document.write("<dd>" + field_parts[1] + "</dd>");
//             }
//             document.write("</dl>");
//        }
//}
//function decode(text) {
//    text = text.replace(/\+/g, " ");
//    text = text.replace(/%[a-fA-F0-9]{2}/g, 
//        	function ( text ) {
//		   return String.fromCharCode( "0x" + text.substr(1,2));});
//    		return text;
//}

}    