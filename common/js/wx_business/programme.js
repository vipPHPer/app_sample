/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-23 09:28:17
 */




function lazyload() {
  var $programme = $('#J_programme');
  var $sections = $('.section', $programme);

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