{
	name: '���������������ƹ�����',
	desc: '�������ڵ������ƹ����������滻Ϊ��ͨ�ı�',
	flag: __type_lzl | __type_floor,
	_proc: function (floorType, args) {
		this.rmLinkText (args._main);
	},
	_init: function () {
		this.rmLinkText ();
	},
	rmLinkText: function (_p) {
		$(_p || 'body').find ('a.ps_cb').each(function () {
			$(this).after (document.createTextNode (this.textContent));
		}).remove();
	}
}