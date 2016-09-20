define("kandl/responsiveImages/responsiveImages",["kandl/common"],function(c){var d={windowWidth:c.windowWidth,isMobile:c.isMobile,isSmartphone:c.isSmartphone,isTablet:c.isTablet,isDesktop:c.isDesktop,init:function(a){if("querySelector" in document){var b=document.getElementsByTagName("body")[0];b.className+=((b.className.indexOf("querySelector")===-1)?" has-query-selector querySelector":"")}if(!a){a=window.addEventListener}d.generateImages();a("resize",d.generateImages,false)},getImages:function(){return document.querySelectorAll("img.resp")},generateImages:function(){if(!d.isMobile()||d.isSmartphone()){if(d.isSmartphone()){d.generateImagesFor("smartphone")}else{if(d.isTablet()){d.generateImagesFor("tablet")}else{d.generateImagesFor("desktop")}}}},generateImagesFor:function(l){var a=d.getImages();for(var n=0;n<a.length;n++){var p=a[n];var i;switch(l){case"smartphone":i="s";break;case"desktop":i="d";break;default:i="t";break}var o="data-src-"+i;var m="resp-"+i;if(!p.parentNode.querySelector("img."+m)){var b=document.createElement("img");if(p.hasAttribute(o)){b.src=p.getAttribute(o)}else{b.src=p.src}if(c.hasClass(p,"c-rg-ss-img")){c.addClass(b,"c-rg-ss-img")}else{if(c.hasClass(p,"c-rg-ss-igfx-img")){c.addClass(b,"c-rg-ss-igfx-img")}}if(p.hasAttribute("alt")){b.setAttribute("alt",p.getAttribute("alt"))}if(p.hasAttribute("title")){b.setAttribute("title",p.getAttribute("title"))}c.addClass(b,m);if(l!=="smartphone"){p.parentNode.insertBefore(b,p.nextSibling)}else{if(l==="smartphone"&&c.hasClass(p,"c-rg-ss-img")){p.parentNode.insertBefore(b,p.nextSibling)}}}}}};return d});