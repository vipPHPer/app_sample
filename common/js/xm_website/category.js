/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

var apiUrl = '/controller/xm_website/category.json';
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
    window.solt_data = data.data;
    window.vm = new Vue({
      el: '#app',
      data: {
        parts1: solt_data.one,
        parts2: solt_data.two,
        parts3: solt_data.three,
        parts4: solt_data.four,
        parts5: solt_data.five,
        parts6: solt_data.six,
        parts7: solt_data.seven,
        parts8: solt_data.eight,
        parts9: solt_data.nine
      }
    });
  }
});