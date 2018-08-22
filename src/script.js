$(document).ready(() => {
const containerCollapsedAd = $('.container-collapsed-ad');
const overlay = $('.overlay');
const overlay2 = $('.overlay-2');
containerCollapsedAd.hide();
overlay.hide();
overlay2.hide();

// fade in 'wave' image
const container = $('.container');
container.delay(1000).fadeIn('slow', 'swing', function() {
  $(this).css('background-image', "url('src/images/morgan-massen-waves.jpg')");
});

// moving wave image up the Y direction; if the window size is less than 900px, don't move background image (wave)...
let x = 0;
let y = -20;
if($(window).width() >= 900){
  container.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
  let interval_1 = setInterval(function() {
    container.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
    y = y - 1.5;
    if( y === -275 ){
    overlay.fadeIn('slow');
    clearInterval(interval_1);
    }
  }, 30);
} else {
  overlay.delay(5000).fadeIn('slow');
}

// fade in second overlay
setTimeout(nextBackground, 10000);
function nextBackground() {
  container.css('background-image', 'none');
  overlay2.fadeIn('slow');
}

// collapse ad when clicked
$("#hide").click(function(){
  containerCollapsedAd.show();
  container.hide();
});

// collapse ad when clicked
const wakeUpAndLive = $('.wake-up-and-live');
$("#show").click(function(){
  overlay.remove();
  container.show();
  wakeUpAndLive.hide();
  nextBackground();
  containerCollapsedAd.hide();
});

});
