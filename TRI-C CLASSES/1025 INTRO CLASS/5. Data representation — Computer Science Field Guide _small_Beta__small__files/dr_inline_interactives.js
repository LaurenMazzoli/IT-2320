$(document).ready(function(){
	$('.slider').slider(
	  {
        value: 0,
        min: 0,
        max: 255,
        step: 1,
		slide: sliderValueChange,
        change: sliderValueChange
      })
    $( '#cyan-colour' ).slider( 'value', Math.floor((Math.random() * 255) + 1));
    $( '#magenta-colour' ).slider( 'value', Math.floor((Math.random() * 255) + 1));
    $( '#yellow-colour' ).slider( 'value', Math.floor((Math.random() * 255) + 1));
    
    $('#binary-picker-image').bind('mousemove', updateBinaryImageValue);

});

function sliderValueChange(){
    var rgb_values = cmy_to_rgb(
        $('#cyan-colour').slider( 'value' ),
        $('#magenta-colour').slider( 'value' ),
        $('#yellow-colour').slider( 'value' )
    );     
    $('#cyan-value').text($('#cyan-colour').slider( 'value' ));
    $('#magenta-value').text($('#magenta-colour').slider( 'value' ));
    $('#yellow-value').text($('#yellow-colour').slider( 'value' ));
    
    $('#cmyk-colour-output').css('background-color','rgb('+rgb_values[0]+','+rgb_values[1]+','+rgb_values[2]+')');
}
    
function cmy_to_rgb(c, m, y){
    var
    r = 255 - c,
    g = 255 - m,
    b = 255 - y;
    return [r,g,b];
}

function updateBinaryImageValue (e) {
     if(!this.canvas) {
        this.canvas = $('<canvas />')[0];
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
    }
    var pixelData = this.canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
    $('#binary-picker-value').html(padNumber(pixelData[0].toString(2), 8) 
                                   + ' ' + padNumber(pixelData[1].toString(2), 8) 
                                   + ' ' + padNumber(pixelData[2].toString(2), 8));
    $('#binary-picker-colour').css('background-color', 'rgb('+pixelData[0]+','+pixelData[1]+','+pixelData[2]+')');
}