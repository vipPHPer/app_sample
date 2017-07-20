/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-20 10:52:26
 */




/* 懒加载 */
function lazyload() {
  var $cloud = $('#J_pinxinCloud');
  var $sections = $('.section', $cloud);

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