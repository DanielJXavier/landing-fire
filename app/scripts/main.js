// Youtube JS API
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerStateChange() {
  if (player.getPlayerState() == 2) {
    $('.fire-video-play').fadeIn('slow');
      $('.fire-video-desc').fadeTo('slow', 1);
  } else {
    $('.fire-video-play').fadeOut('slow');
      $('.fire-video-desc').fadeTo('slow', 0);
  }
}

// jQuery
$(function() {
	// Owl Carousel
	var owl = $(".fire-testimonies-carousel");
	owl.owlCarousel({singleItem: true, mouseDrag: false});
	function setItemsCount() {
		$("#items-count").text(("0" + currentItem).slice(-2) + " de " + ("0" + totalItems).slice(-2));
		if (currentItem == totalItems) {
			$("#next-item").removeClass("enabled").addClass("disabled");
		} else {
			$("#next-item").removeClass("disabled").addClass("enabled");
		}
		if (currentItem == 1) {
			$("#prev-item").removeClass("enabled").addClass("disabled");
		} else {
			$("#prev-item").removeClass("disabled").addClass("enabled");
		}
	}
	var currentItem = 1;
	var totalItems = $(".fire-testimony").length;
	setItemsCount();
	$("#prev-item").click(function() {
		if (currentItem > 1) {
			currentItem--;
			owl.trigger('owl.prev');
			setItemsCount();
		}
	});
	$("#next-item").click(function() {
		if (currentItem < totalItems) {
			currentItem++;
			owl.trigger('owl.next');
			setItemsCount();
		}
	});

  // Fixed Menu
  var fixedMenu = false;
  $(window).scroll(function () {
  	if (!fixedMenu && $(window).scrollTop() >= $(".fire-button-gradient").position().top) {
  		$(".navbar-default").addClass("fire-fixed");
  		fixedMenu = true;
  	} else if (fixedMenu && $(window).scrollTop() < $(".fire-button-gradient").position().top) {
  		$(".navbar-default").removeClass("fire-fixed");
  		fixedMenu = false;
  	}
  });

	// Video Player
	$('.fire-video-play').click(function(){
		player.playVideo();
	});

  // Extended Speaker Bio
  $(".fire-bio-button-open").click(function(){
    $(".fire-speakers-long-bio").show();
    $(".fire-bio-button-close").show();
    $(".fire-speakers-short-bio").hide();
    $(this).hide();
  });
  $(".fire-bio-button-close").click(function(){
    $(".fire-speakers-short-bio").show();
    $(".fire-bio-button-open").show();
    $(".fire-speakers-long-bio").hide();
    $(this).hide();
  });

  // Scroll to Section
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
})
