$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	//wow plugin initail
	if(screen.width > 768){
		new WOW().init();
	}
	

	 // fancyboc
	 $('[data-fancybox]').fancybox({
		loop : true
	 });

	 // strllar plugin in
	if(screen.width > 768){
	 $(window).stellar();
	}

})
	