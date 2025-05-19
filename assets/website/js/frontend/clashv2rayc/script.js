(function($) {
	
	"use strict";
	
	
	// Preloader
	
		setTimeout(function() {
			$('#preloader').addClass('hide');
		}, 700);

		$( "#preloader" ).append('<div class="hide-loader">Hide Preloader</div>');
		$('.hide-loader').click(function(e){
			$(this).parent().addClass('hide');
		});

	
	
	// Menu 5 plugin 
	ma5menu({
		menu: '.navigation',
		activeClass: 'current',
		// footer: '.slide_navi',
		position: 'right',
		closeOnBodyClick: true
	});

	// Sticky Header
	var header = $("header");
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			header.addClass("sticky");
		} else {
			header.removeClass("sticky");
		}
	});	
	
	
	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}
	
	if ($('.main-header .header-lower .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .header-lower .main-menu .navigation'));
	}
	
	
	// Aside info bar
	$('.aside_open').click(function(e){
		e.preventDefault();
		$('.aside_info').css("left", "0px");
	});

	$('.aside_close').click(function(e){
		e.preventDefault();
		$('.aside_info').css("left", "-500px");
	});

	
	// Search width increase
	$('.header_search .search_form .form-control').click(function(e) { 
		$('.header_search .search_form').removeClass('active');
		$(e.target).closest('.header_search .search_form').addClass('active');
	});
	$(document).click(function(e){ 
		if($(e.target).closest('.header_search .search_form').length==0) { 
		   	$('.header_search .search_form').removeClass('active');  
		}
	});
	
	
	
	
	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			items: 1,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav: false,
			dots: false,
			autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>' ],
		});
	}
	
	
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			// autoplay: 6000,
			navText: [ '<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				991:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});
	}

	// Testimonial Carousel Two
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			//autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				991:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}
	
	// News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin: 0,
			nav:false,
			//autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				991:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}


	// Case Carousel
	if ($('.case-carousel').length) {
		$('.case-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			dots: false,
			//autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				991:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}

	// Case Carousel
	if ($('.insurance-case-carousel').length) {
		$('.insurance-case-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav: false,
			dots: false,
			//autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				991:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}

	// Business Carousel
	if ($('.business-case-carousel').length) {
		$('.business-case-carousel').owlCarousel({
			items: 1,
			loop:true,
			margin:0,
			nav: false,
			dots: true,
			autoHeight: true,
			autoplayTimeout:8000,
			smartSpeed: 500,
			// autoplay: 6000,
			navText: [ '<span class="bi bi-chevron-left"></span>', '<span class="bi bi-chevron-right"></span>' ],
		});
	}
	
	
	
	//Date Picker
	if($('.datepicker').length){
		$( '.datepicker' ).datepicker();
	}

	
	//LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}
	
	// Odometer
	if ($(".odometer").length) {
		$('.odometer').appear();
		$('.odometer').appear(function(){
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
			window.odometerOptions = {
				format: 'd',
			};
		});
	}
	

	// Page scroll progress 
	var e = document.querySelector(".progress-wrap path"),
		t = e.getTotalLength();
	(e.style.transition = e.style.WebkitTransition = "none"),
		(e.style.strokeDasharray = t + " " + t),
		(e.style.strokeDashoffset = t),
		e.getBoundingClientRect(),
		(e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear");
	var o = function () {
		var o = $(window).scrollTop(),
			r = $(document).height() - $(window).height(),
			i = t - (o * t) / r;
		e.style.strokeDashoffset = i;
	};
	o(), $(window).scroll(o);
	jQuery(window).on("scroll", function () {
		jQuery(this).scrollTop() > 50 ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress");
	}),
	jQuery(".progress-wrap").on("click", function ($) {
		return $.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, 550), !1;
	});
	// End Page scroll progress 
	
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	// Youtube
	var $ytvideoTrigger = $(".ytplay-btn");
	$ytvideoTrigger.on("click", function(evt) {  
		$(".ytube-video").addClass("play");
		$("#ytvideo")[0].src += "?autoplay=1";
	});

	// Tilt JS
	$('.js-tilt').tilt({
		reset: false
	})


})(window.jQuery);


// Hide header on scroll down
const nav = document.querySelector(".main-header");
const scrollUp = "top-up";
let lastScroll = 800;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 800) {
        nav.classList.remove(scrollUp);
        return;
    }
    
    if (currentScroll > lastScroll) {
        // down
        nav.classList.add(scrollUp);

    } else if (currentScroll < lastScroll) {
        // up
        nav.classList.remove(scrollUp); 
    }
    lastScroll = currentScroll;
});