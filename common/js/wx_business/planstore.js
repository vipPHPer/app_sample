/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-23 10:30:24
 */



function lazyload() {
  var $planStore = $('#J_planStore');
  var $sections = $('.section', $planStore);

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