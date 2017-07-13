/**
 * @authors chenfuxin (since1991_vip@163.com)
 * @date    2017-01-20 16:17:41
 */

$(document).ready(function() {
	var url = '../h5_weixin01/js/data_historical.json';

	$.ajax({
		url: url,
		dataType: 'json',
		error: function() {console.log('error')},
		success: function(data) {
			if (data && data.code === 0) {
				var _data = data.data;
				
				new Vue({
					el: '#gzHistorical',
					data: {
						data: _data
					}
				});
			}
		}
	});
});
