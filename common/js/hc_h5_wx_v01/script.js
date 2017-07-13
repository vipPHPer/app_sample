/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-01-19 11:03:36
 */

var apiUrl = 'controller/hc_h5_wx_v01/data.json';
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

function getData() {
  var dataUrl = '/controller/hc_h5_wx_v01/data.json';
  $.ajax({
    url: dataUrl,
    dataType: 'json',
    error: function() { console.log('error'); },
    success: function(data) {
      if (data && data.code === 0) {
        var data = data.data;

        if (data.length !== '') {
          $('.font').addClass('hide');
        } else {
          $('.font').removeClass('hide');
        }

        new Vue({
          el: '#app',
          data: {
            data: data
          }
        });
      } else {
        console.log(data.msg);
      }
    }
  });
}

/* 登录注册切换 */
function switchLoginZhuce() {
  var $hd = $('#J_hd');
  var $hdBtn = $hd.find('li');
  var $bdCon = $('#J_bd').find('ul');

  $hdBtn.on('click', function() {
    var _index = $(this).index();
    $(this).find('div').addClass('on').parent().siblings().find('div').removeClass('on');

    $bdCon.hide().eq(_index).show();

    return false;
  });
}

/* 获取验证码 */
function getVcodeverify() {
  var wait = 59;

  var time = function(o) {
    if (wait === 0) {
      o.attr('disabled', false);
      o.val('重新获取');
      wait = 10;
    } else {
      o.attr('disabled', true);
      o.val('重新发送(' + wait + ')');
      wait--;
      setTimeout(function() {
        time(o);
      }, 1000);
    }
  };

  $('#code').on('click', function() {
    $('#code').attr('disabled', true);
    var phone = $('#moble').val();
    if (phone === '' || phone.length !== 11 || !(/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
      layer.open({
        content: '手机号码不正确',
        time: 2
      });
      $('#code').attr('disabled', false);
      return false;
    } else {
      $.ajax({
        url: '',
        dataType: 'json',
        error: function() {
          time($('#code'));
          layer.open({
            content: '验证码已发送到您的手机，请注意查收！',
            time: 2
          });
        },
        success: function(data) {
          if (data && data.code === 0) {
            time($('#code'));
          } else {
            console.log(data.msg);
            $('#code').attr('disabled', false);
          }
        }
      });
    }

    return false;
  });
}

$(document).ready(function() {
  getData();
  switchLoginZhuce();
  getVcodeverify();
});