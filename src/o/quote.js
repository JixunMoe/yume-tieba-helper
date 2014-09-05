{
	name: '����¥��',
	desc: '����ĳһ�������',
	flag: __type_floor,
	_proc: function (floorType, args) {
		var $quote = $('<li>').addClass('pad-left').append(
			$('<a>').text('#����').addClass('jx')
				.data('jx', 'quote').data('floor', args.floorNum)
		).prependTo($('.p_tail', args._main));
	},
	_click: function ($ele, $eve) {
		var $floor  = $ele.parents('.l_post');
		var $editor = $('#ueditor_replace');
		var $quote = $('<p>').appendTo($editor);

		$quote
			.append ('���� ' + $ele.data('floor') + '¥ @' + $('.p_author_name', $floor).first().text() + ' �ķ��ԣ�')
			.append ('<br>')
			.append ('��������������������')
			.append ('<br>');

		$('.j_d_post_content', $floor).contents().each(function (i, ele) {
			if (ele.nodeType == 3) {
				if (ele.nodeValue.trim() !== '')
					$quote.append (ele.nodeValue);

				return ;
			}

			var $ele = $(ele);
			if ($ele.is('a')) {
				if ($ele.find('img').size()) {
					$quote.append ('[#ͼƬ]');
				} else {
					$quote.append ($ele.text());
				}
			} else if ($ele.is ('img')) {
				$quote.append ('[#����]');
			} else if ($ele.is ('object,embed')) {
				$quote.append ('[#��Ƶ]');
			} else {
				$quote.append ($ele.clone());
			}
		});

		$quote.append ('<br>&gt; ');
		$.goToEditor();
	}
}