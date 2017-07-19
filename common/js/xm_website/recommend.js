/**
 * 
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-10-11 09:49:23
 */

var recommendEvent = {
  /* 懒加载 */
  lazyload: function() {
    var $visibleWatcher = $('#J_visibleWatcher');
    var $sections = $('.section', $visibleWatcher);

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
  },

  /* template.js */
  getDate: function() {
    $.ajax({
      url: '../xm_mi.com/js/goodslist.json',
      dataType: 'json',
      error: function(str) {
        alert(str);
      },
      success: function(data) {
        formaDate(data);
      }
    });

    var formaDate = function(data) {
      if (data && data.code == 0) {
        var data = data.data;
        var app = new Vue({
          el: '#J_visibleWatcher',
          data: {
            data: data
          }
        });
      }
    }
  },

  init: function() {
    this.lazyload();
    this.getDate();
  }
}

$(document).ready(function() {
  recommendEvent.init();
});