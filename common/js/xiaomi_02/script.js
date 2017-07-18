/**
 * 
 * @authors chenfuxin
 * @date    2016-08-31 17:19:06
 */

/* 导航跳转 */
var $nav = $('.J_item');
var target = '';

$nav.on('click', function() {
  target = $(this).attr('data-target');
  if (target && $(target).length) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  }
});