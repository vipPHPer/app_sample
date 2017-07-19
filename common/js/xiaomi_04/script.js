/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-03-02 12:40:09
 */

// function lazyload() {
//   var $app = $('#app');
//   var $sections = $('.section', $app);

//   $sections.visibleWatcher({
//     onVisible: function($elm, index) {
//       $sections.filter(function(i) {
//         return i <= index + 1;
//       }).addClass('proload').find('img').each(function() {
//         var _src = $(this).attr('data-src');
//         $(this).attr('src', _src);
//       });
//     }
//   });
// }

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