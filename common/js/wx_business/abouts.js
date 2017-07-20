/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-16 09:56:21
 */

var apiUrl = '/controller/wx_business/abouts.json';
var _common = {
  //ajax请求
  sendAjax: function(url, dataType, callback) {
    $.ajax({
      url: url,
      dataType: dataType,
      success: callback
    });
  }
}

_common.sendAjax(apiUrl, 'json', function(data) {
  if (data && data.code === 0) {
    console.log(data.data);
    window.slot_data = data.data;
    window.vm = new Vue({
      el: '#app',
      data: {
        article_detail: {
          content: '<p></p>',
          title: ''
        }
      }
    });
    vm.article_detail = data.data;
  }
});