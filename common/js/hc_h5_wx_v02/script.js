/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

var apiDetailUrl = '/controller/hc_h5_wx_v02/get_article_detail.json';
var _common = {
  //ajax请求
  sendAjax: function(url, params, dataType, callback) {
    $.ajax({
      url: url,
      data: params,
      dataType: dataType,
      success: callback
    });
  }
};

_common.sendAjax(apiDetailUrl, {}, 'json', function(data) {
  if (data && data.code === 0) {
    console.log(data);
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