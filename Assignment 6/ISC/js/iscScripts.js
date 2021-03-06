// ISC Website java script 
// Lauren Mazzoli 
// Fall 2016 IT-2320
// Assignment 2 - Unobstrusive js code
//
window.onload=function()
{
  $('.nav_menu').slicknav({prependTo:".mobile_menu"});
		 
  $('.bxslider').bxSlider({ auto: true, 
			      captions: true});

  $('.accordion').accordion({event: "mouseover",
			       heightStyle: "content",
			       collapsible: true});
   
   var hdrImg = document.getElementsByClassName("header_img")[0];
   hdrImg.onclick = goToHomePage;

   var hdrImg = document.getElementsByClassName("header_icon")[0];
   hdrImg.onclick = goToTwitterPage;

   var logoNormal = document.getElementsByClassName("sell_it_logo_normal")[0];
   logoNormal.onclick=changeSellItLogo;

   var footerContent =  document.getElementsByClassName("footer_content")[0];
   getFooterContent(footerContent);

function changeSellItLogo(element) {

	element.target.className = 
		(element.target.className=="sell_it_logo_normal") ? "sell_it_logo_highlight" : "sell_it_logo_normal";
}

function getFooterContent(footerContent)
{
	var today = new Date();

        footerContent.innerHTML = "&copy;&nbsp;";
        footerContent.innerHTML += today.getFullYear();
	footerContent.innerHTML += ", Lauren Mazzoli";
	footerContent.innerHTML += " - unofficial Website developed for educational use";
}
function goToHomePage(element) {
	window.location="index.html";
}

function goToTwitterPage(element) {
	window.open('http://twitter.com/@isc_boys','_blank'); 
}

// The following functions will be invoked from the email_form html page to 
// display the contact form data. They are not working yet.
// 
function DisplayFormData()
{

    var formContent =  document.getElementsByClassName("contactUsFormData")[0];
    display_data(formContent);

}
function display_data(formContent) {
   	var query = location.search.replace("?", "");

    	if ( query == "" ) 
		return;    
	var fields = query.split("&");
    
        if ( fields.length == 0 ) 
	    {formContent.innerHTML="No data was submitted.";} 
    	else {
            formContent.innerHTML="<dl>";
            var field_parts;
            for ( var i in fields ) {
                field_parts = fields[i].split("=");
            	field_parts[0] = decode( field_parts[0] );
            	field_parts[1] = decode( field_parts[1] );
            	formContent.innerHTML+=("<dt>" + field_parts[0] + "</dt>");
            	formContent.innerHTML+=("<dd>" + field_parts[1] + "</dd>");
             }
             formcontent.innerHTML +=("</dl>");
        }
}
function decode(text) {
    text = text.replace(/\+/g, " ");
    text = text.replace(/%[a-fA-F0-9]{2}/g, 
        	function ( text ) {
		   return String.fromCharCode( "0x" + text.substr(1,2));});
    		return text;
}

}    