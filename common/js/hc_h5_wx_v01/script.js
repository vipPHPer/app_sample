/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-01-19 11:03:36
 */

var apiUrl = '/controller/hc_h5_wx_v01/data.json';
var apiPhoneUrl = '/controller/hc_h5_wx_v01/get_phone.json';
var apiLoginRegisterUrl = '/controller/hc_h5_wx_v01/get_login_register.json';

var _common = {
  //ajax请求
  sendAjax: function(type, url, params, dataType, callback) {
    $.ajax({
      type: type,
      url: url,
      data: params,
      dataType: dataType,
      success: callback
    });
  }
};

_common.sendAjax('GET', apiUrl, '', 'json', function(data) {
  if (data && data.code === 0) {
    var data = data.data;

    if (data.length === '') {
      $('.font').removeClass('hide');
    } else {
      $('.font').addClass('hide');
    }

    window.vm = new Vue({
      el: '#app',
      data: {
        data: data
      }
    });
  }
});

/* 登录注册切换 */
var $hd = $('#J_hd');
var $bd = $('#J_bd');
var $hdBtn = $hd.find('li');
var $bdCon = $bd.find('ul');

$hdBtn.on('click', function() {
  var index = $(this).index();
  var _this = $(this);
  _this.find('div').addClass('on').parent().siblings().find('div').removeClass('on');
  $bdCon.hide().eq(index).show();
  return false;
});

/* 获取验证码 */
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
      skin: 'msg',
      time: 2
    });
    $('#code').attr('disabled', false);
    return false;
  } else {
    _common.sendAjax('GET', apiPhoneUrl, { phone: phone }, 'json', function(data) {
      if (data && data.code === 0) {
        time($('#code'));
        layer.open({
          content: '验证码已发送到您的手机，请注意查收！',
          skin: 'msg',
          time: 2
        });
      }
    });
  }
});