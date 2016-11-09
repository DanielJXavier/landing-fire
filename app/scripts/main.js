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
	// Video Player
	$('.fire-video-play').click(function(){
		player.playVideo();
	});
})
