/**
 *
 * @authors chenfuxin (chenfuxin@99cj.com.cn)
 * @date    2016-11-02 09:14:33
 */

var apiUrl = '/controller/xm_website/xm_website.json';
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
        banner: slot_data.slider,
        parts1: slot_data.one,
        parts2: slot_data.two,
        parts3: slot_data.three
      }
    });
    slider();
  }
});

function slider() {
  var index = 0;
  var imgLength = $('#J_slider-img li').length;
  var ctWidth = imgLength * 100;
  var itemWidth = 1 / imgLength * 100;
  $('#J_slider-img').width(ctWidth + '%');
  $('#J_slider-img li').width(itemWidth + '%');

  var rollEvent = function() {
    if (index === imgLength - 1) {
      var ctPosit = (index + 1) * 100; //300
      $('#J_slider').append($('#J_slider-img').clone());
      $('#J_slider-img:last').css('left', '100%');
      $('#J_slider-img:first').animate({
        'left': '-' + ctPosit + '%'
      }, 500);
      $('#J_slider-img:last').animate({
        'left': '0'
      }, 500);
      var timer = setInterval(function() {
        $('#J_slider #J_slider-img:first').remove();
      }, 500);
      index = 0;
    } else {
      index++;
      var ctPosit = index * 100;
      $('#J_slider-img').animate({
        'left': '-' + ctPosit + '%'
      }, 500);
    }
  };
  setInterval(rollEvent, 3000);
}