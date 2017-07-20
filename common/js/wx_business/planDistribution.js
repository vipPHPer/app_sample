/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-02-23 10:18:22
 */

var apiUrl = '/controller/wx_business/planDistribution.json';
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
        plan_list: solt_data.plan,
        content_list: solt_data.contents
      }
    });
  } else {
    alert(JSON.stringify(data.data));
  }
});