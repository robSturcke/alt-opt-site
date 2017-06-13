$(document).scroll(function() {
  let y = $(this).scrollTop();
  let pushTop = $(this).scrollTop();

  if (y > 100) {
    $('.logo').fadeIn();
  } else {
    $('.logo').fadeOut();
  };

  if (pushTop > 700) {
    $('.push-up').fadeIn();
  } else {
    $('.push-up').fadeOut();
  };
});
