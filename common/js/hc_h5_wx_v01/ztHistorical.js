/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-01-20 15:00:45
 */

$(document).ready(function() {
	var dataUrl = '../h5_weixin01/js/data.json';

	$.ajax({
		url: dataUrl,
		dataType: 'json',
		error: function() {console.lgo('error')},
		success: function(data) {
			var _data = data.data;
			
			new Vue({
				el: '#ztHistorical',
				data: {
					data: _data
				}
			});
		}
	});
});
