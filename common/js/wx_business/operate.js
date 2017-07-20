/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-20 15:21:21
 */




/* 懒加载 */
function lazyload() {
  var $operate = $('#J_Operate');
  var $sections = $('.section', $operate);

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