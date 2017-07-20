/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-22 08:59:35
 */



function lazyload() {
  var $platform = $('#J_platForm');
  var $sections = $('.section', $platform);

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