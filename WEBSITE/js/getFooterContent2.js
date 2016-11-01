function getFooterContent()
{
    var footerContent =  document.getElementsByClassName("footer_content");

	var today = new Date();

        footerContent[0].innerHTML = "&copy;&nbsp;"
        footerContent[0].innerHTML += today.getFullYear();
	footerContent[0].innerHTML += ", Lauren Mazzoli";
	footerContent[0].innerHTML += " - unofficial Website developed for educational use";
}