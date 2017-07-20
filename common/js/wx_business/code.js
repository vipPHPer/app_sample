/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-23 08:38:45
 */




function lazyload() {
  var $code = $('#J_code');
  var $sections = $('.section', $code);

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