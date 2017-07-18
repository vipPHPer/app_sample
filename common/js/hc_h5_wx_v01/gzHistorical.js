/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-01-20 16:17:41
 */

var apiUrl = '/controller/hc_h5_wx_v01/data_historical.json';
var _common = {
  //ajax请求
  sendAjax: function(type, url, dataType, callback) {
    $.ajax({
      type: type,
      url: url,
      dataType: dataType,
      success: callback
    });
  }
};

_common.sendAjax('GET', apiUrl, 'json', function(data) {
  if (data && data.code === 0) {
    var _data = data.data;
    window.vm = new Vue({
      el: '#gzHistorical',
      data: {
        data: _data
      }
    });
  }
});