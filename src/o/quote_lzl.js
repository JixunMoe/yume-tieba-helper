{
	name: '¥��¥��������',
	desc: '����¥��¥�Ļظ�',
	flag: __type_lzl,
	_proc: function (floorType, args) {
		$('<a>').text('����').addClass('jx d_tail')
			.insertBefore($('.lzl_time', args._main))
			.after($('<span>').addClass('d_tail').text(' | '))
			.data('jx', 'quote_lzl');
	},
	_click: function ($ele, $eve) {
		var $editor = $('#ueditor_replace');
		var $cnt = $ele.parents('.lzl_cnt');
		$('<p>').appendTo($editor)
			.append ('���� @' + $cnt.find('.j_user_card').attr('username') + ' ��¥��¥�ķ��ԣ�<br>')
			.append ($ele.parents('.lzl_cnt').find('.lzl_content_main').text())
			.append ('<br>')
			.append ('��������������������')
			.append ('<br> &gt;<br>');

		$.goToEditor();
	}
}