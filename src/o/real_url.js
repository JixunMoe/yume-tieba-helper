{
	name: '������ת�����',
	desc: '���ٶ���ν��ȫ���Ӹĳ�ֱ����',
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
				GM_xmlhttpRequest ({
					method: 'HEAD',
					url: $url,
					headers: {
						// ȥ��İٶ�
						Referer: 'http://tieba.baidu.com/p/123456789'
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