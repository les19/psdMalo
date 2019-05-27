$(document).ready(function () {
  $('.slick-container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    // cssEase: 'linear',
    arrows: false,
    appendDots: $('.my_dots_append')
  });
  $('.testi_slick_container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    // fade: true,
    // cssEase: 'linear',
    arrows: false,
    draggable:false,
    asNavFor: '.dots_slick_container',
    
  });
  $('.dots_slick_container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    speed: 500,
    prevArrow: $('.my_prev_arrow'),
    nextArrow: $('.my_next_arrow'),
    // fade: true,
    // cssEase: 'linear',
    arrows: true,
    appendArrows: $('.dots_slick_container'),
    asNavFor: '.testi_slick_container',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '70px',
    
    
  });
});

// poster frame click event
$(document).on('click', '.js-videoPoster', function (ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src', src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
    // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src', '');
}

jQuery(function ($) {
  $('a[href*="#"]').on('click.smoothscroll', function (e) {
    var hash = this.hash,
      _hash = hash.replace(/#/, ''),
      theHref = $(this).attr('href').replace(/#.*/, '');
    if (theHref && location.href.replace(/#.*/, '') != theHref) return;
    var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
    if (!$target.length) return;
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $target.offset().top - 0
    }, 400, 'swing', function () {
      window.location.hash = hash;
    });
  });
});
