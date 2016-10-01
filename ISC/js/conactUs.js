//<![CDATA[

var decode = function ( text ) {
    		text = text.replace(/\+/g, " ");
    		text = text.replace(/%[a-fA-F0-9]{2}/g, 
        		function ( text ) {
				return String.fromCharCode( "0x" + text.substr(1,2));});
    		return text;
}
    
var display_data = function () {
    		var query = location.search.replace("?", "");

    		if ( query == "" ) return;
    
	    var fields = query.split("&");
    
    if ( fields.length == 0 ) {
        document.write("<p>No data was submitted.</p>");
    } 
    else {
        document.write("<dl>");
        var field_parts;
        for ( var i in fields ) {
            field_parts = fields[i].split("=");
            field_parts[0] = decode( field_parts[0] );
            field_parts[1] = decode( field_parts[1] );
            document.write("<dt>" + field_parts[0] + "</dt>");
            document.write("<dd>" + field_parts[1] + "</dd>");
        }
        document.write("</dl>");
    }
}
//]]>