/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-17 09:19:28
 */



/* 懒加载 */
function lazyload() {
  var $caseDetails = $('#J_caseDetails');
  var $sections = $('.section', $caseDetails);

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