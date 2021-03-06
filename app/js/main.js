$(document).ready(function(){
	// Variables
	var body 							= $("body"),
			modalVisibility		= "showing-in",
			active 						= "active",
			backdrop 					= $("<div />", {
				class: "vmodal-backdrop"
			});
	// Menu
		$("[data-menu]").click(function(){
			var menu_href = $(this).attr("data-menu");
			//$(body).toggleClass('vnav-active');
			$(menu_href).toggleClass('vnav-active');
			//$("[data-menu]").not($(this)).removeClass(active);
			$(this).toggleClass(active);
		});
		$('.vnav a[href*="#"]').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top - 70
			},2000);
			$("[data-menu]").removeClass(active);
			$('.vnav-wrap-fixed .vnav').removeClass('vnav-active');
			//body.toggleClass(active);
			return false;
		});
		$(".vnav-text-toggle").click(function(){
			$(this).toggleClass(active);
			$(".vnav-text").toggleClass(active);
		});
	// Scroll to block
		$('.anchor').click(function(){
			var href = $(this).attr('href');
			$('body,html').animate({
				scrollTop: $(href).offset().top
			},2000);
			return false;
		});
	// Modal
		var videoBlock = $('#modalvideo .vmodal-video');
		function videoBlockClear(){
			videoBlock.html('');
		}
		function videoBlockIsShowing(){
			if($("#modalvideo").hasClass('showing-in')){
				videoBlockClear();
			}
		}
		$('[data-func="vmodal"]').click(function(){
			var thisTarget = $(this).attr("data-target");
			videoBlockIsShowing();
			if ( $(thisTarget).length > 0 ) {
				$('.vmodal').removeClass(modalVisibility)
				$(thisTarget).addClass(modalVisibility);
				body.addClass("vmodal-open").append(backdrop.addClass(modalVisibility));
			}else{
				console.log("No element with " + thisTarget + " name");
			}
		});
		$('[data-close="vmodal"]').click(function(){
			$(this).closest(".showing-in").removeClass(modalVisibility);
			backdrop.removeClass(modalVisibility);
			body.removeClass("vmodal-open");
		});
		$(window).click(function(e){
			if ( backdrop.length > 0 && $(e.target).is(".vmodal") ) {
				$(".showing-in").removeClass(modalVisibility);
				backdrop.removeClass(modalVisibility);
				videoBlockClear();
				body.removeClass("vmodal-open");
			}
		});
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: ["", ""],
			dots: false
		});
});	