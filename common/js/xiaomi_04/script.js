/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-03-02 12:40:09
 */

var apiUrl = '/controller/xiaomi_04/xiaomi_04_list.json';
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
        phone: solt_data.phone,
        mibook: solt_data.mibook,
        bike: solt_data.bike,
        mitv: solt_data.mitv,
        parts1: solt_data.parts1,
        parts2: solt_data.parts2,
        parts3: solt_data.parts3,
        parts4: solt_data.parts4
      }
    });
  }
});

// function getData() {
//   var dataUrl = '../xiaomi_04/js/xmData.json';

//   $.ajax({
//     url: dataUrl,
//     dataType: 'json',
//     type: 'GET',
//     error: function(msg) {
//       console.log(msg + 'error');
//     },
//     success: function(data) {
//       if (data && data.code === 0) {
//         var data = data.data;

//         new Vue({
//           el: '#app',
//           data: {
//             data: data
//           }
//         });
//       }
//     }
//   });
// }

// $(document).ready(function() {
//   lazyload();
//   getData();
// });