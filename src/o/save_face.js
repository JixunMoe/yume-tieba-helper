{
	name: '��������',
	desc: '�������𿨣�����һ��������ʾ��',
	flag: __type_floor,
	_init: function () {
		_css.append ('.save_lz_face::before{content:attr(who) " ʹ��������"}');
	},
	_proc: function (floorType, args) {
		if ($('.save_face_post', args._main).size()) {
			// ��������
			$('<div>').addClass('floor-stripe save_lz_face')
				.attr ('who', $('.p_author_name', args._main).text())
				.insertBefore (args._main);

			args._main.addClass('savedFace').hide();
		}
	}
}