/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-23 10:56:03
 */



function lazyload() {
  var $planPlatform = $('#J_planPlatform');
  var $sections = $('.section', $planPlatform);

  $sections.visibleWatcher({
    onVisible: function($elm, index) {
      $sections.filter(function(i) {
        return i <= index + 1;
      }).addClass('preload').find('img').each(function() {
        var _src = $(this).attr('data-src');
        $(this).attr('src', _src);
      });
    }
  });
}

$(document).ready(function() {
  lazyload();
});