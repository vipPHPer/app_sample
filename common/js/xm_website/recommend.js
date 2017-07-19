/**
 * 
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-10-11 09:49:23
 */

var apiUrl = '/controller/xm_website/goodslist.json';
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
        product_list: slot_data.one
      }
    });
  }
});