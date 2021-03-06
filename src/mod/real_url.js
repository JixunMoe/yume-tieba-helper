{
	name: '贴吧跳转链解除',
	desc: '将百度所谓安全链接改成直链。',
	flag: __type_floor | __type_lzl,
	_proc: function (floorType, args) {
		var $floor = $(args._main);
		$floor.find('a[href*="jump.bdimg.com/safecheck"]').each(function (i, ele) {
			var $ele = $(ele),
				$url = $ele.text();

			if ($url.indexOf('@') === 0) {
				// Do nothing.
			} else if (/^https?:\/\//.test($url)) {
				$ele.attr('href', $url);
			} else {
				// HEAD 请求会变成 error ..?
				GM_xmlhttpRequest ({
					method: 'GET',
					url: ele.href,
					headers: {
						// 去你的百度
						Referer: 'http://tieba.baidu.com/p/123456789',
						Range: 'bytes=0-0'
					},
					onload: function (response) {
						if (response.finalUrl.indexOf('http') === 0) {
							$ele.attr('href', response.finalUrl);
						}
					}
				});
			}
		});
	}
}