$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.logo').fadeIn();
  } else {
    $('.logo').fadeOut();
  }
});
