/**
 * 
 * @authors chenfuxin
 * @date    2016-08-31 17:19:06
 */

var apiUrl = '/controller/wx_business/index.json';
var _common = {
  //ajax请求
  sendAjax: function(url, dataType, callback) {
    $.ajax({
      url: url,
      dataType: dataType,
      success: callback
    });
  }
};

_common.sendAjax(apiUrl, 'json', function(data) {
  if (data && data.code === 0) {
    console.log(data.data);
    window.slot_data = data.data;
    window.vm = new Vue({
      el: '#app',
      data: {
        banner_desc: slot_data.part1
      }
    });
  }
});