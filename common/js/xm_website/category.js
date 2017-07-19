/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

var xmAppShoppingMall = {
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

  /* vue.js */
  getDate: function() {
    $.ajax({
      url: '../xm_mi.com/js/data.json',
      dataType: 'json',
      error: function(str) {
        console.log(str)
      },
      success: function(data) {
        if (data && data.code === 0) {

          var _data = data.data;
          var app = new Vue({
            el: '#J_visibleWatcher',
            data: {
              data: _data
            }
          });
        } else {
          alert(data.msg);
          console.log(data.msg);
        }
      }
    });
  },

  init: function() {
    this.lazyload();
    this.getDate();
  },
};

$(document).ready(function() {
  xmAppShoppingMall.init();
});