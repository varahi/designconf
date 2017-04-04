jQuery(function($){
// To Top	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
	    	} else {
	    		$('#toTop').fadeOut();
	    	}
		});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});		

	$('.col-outer').mouseenter('click', function(){
	    $(this).children('.col-inner').animate({minWidth:'380px'},'slow').addClass('hovered')
	});
	$('.col-outer').mouseleave('click', function(){
	    $(this).children('.col-inner').animate({minWidth:'170px'},'slow').removeClass('hovered')
	});	
	
});

new WOW().init();