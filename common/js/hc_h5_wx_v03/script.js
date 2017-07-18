/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

var apiArticle_detailUrl = '/controller/hc_h5_wx_v03/get_article_detail.json';
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

_common.sendAjax(apiArticle_detailUrl, 'json', function(data) {
  if (data && data.code === 0) {
    console.log(data.data);
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