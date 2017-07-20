/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-21 14:43:07
 */




function lazyload() {
  var $enterprise = $('#J_enterPrise');
  var $sections = $('.section', $enterprise);

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