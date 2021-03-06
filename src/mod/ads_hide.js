{
	name: '广告隐藏、屏蔽',
	desc: '屏蔽无用、广告内容',
	flag: ~0,
	_init: function () {
		var $ads = [
			// 贴吧推广
			'.spreadad, .game_frs_step1, .BAIDU_CLB_AD, .dasense, .u9_head',
			'.j_click_stats, .p_postlist>div:not(.l_post):not(.p_postlist)',
			'[id="pagelet_frs-header/pagelet/head_content_middle"]',
			'[id="pagelet_encourage-appforum/pagelet/my_app"]',
			'.life_helper',
			
			// 到处插入的广告
			'[data-daid]',

			// 右下角广告
			'#game_pop_window',
			
			// 直播
			'#game_live_list',

			// 10 年
			'#j_ten_years',

			// 1l 下方的广告
			'#sofa_post, .banner_post',

			// 贴吧顶部广告
			'#pb_adbanner',
			
			// 图片页面
			'.af_head_gamelink',
			
			// 左右侧
			'.j_couplet',

			// 右侧
			'#encourage_entry',
			'.platform_aside_tieba_partner',

			// 客户端发贴 x 倍经验
			'.tb_poster_placeholder',

			// 语音按钮 (需要客户端)
			'.edui-btn-voice, .j_voice_ad_gif, .lzl_panel_voice',

			// 发帖请遵守 ....
			'.poster_head_surveillance',

			// 不水能死何弃疗！
			'.lzl_panel_wrapper > tbody > tr > td:first-child > p',

			// 会员相关广告
			'.doupiao_offline, .fMember_cnt',

			// 右上角
			'.u_tshow, .u_tbmall, .u_app, .u_wallet, .u_xiu8',
			'.u_mytbmall, .u_joinvip, .u_baiduPrivilege, .u_appcenterEntrance',

			// 右下角
			'#pop_frame, #__bdyx_tips, #__bdyx_tips_icon',

			// 猜拳
			'.add_guessing_btn, .guessing_watermark',
			
			// 帖子推荐
			'.thread_recommend',
			
			// 右下角广告
			'#__bdyx_tips, #__bdyx_tips_icon, .baidu-tuisong-wrap, .baidutuisong',

			// 打赏、分享
			'.reward_btn, .share_btn_wrapper',

			// 烟花
			'.firework_sender_wrap, .global_notice_wrap',

			'.tbui_fbar_share, .tbui_fbar_tsukkomi, .tbui_fbar_props, .tbui_fbar_square, .tbui_fbar_home',

			'#tshow_out_date_warn, #selectsearch-icon',
			
			// 贴吧推荐
			'#forum_recommend'
		].join(', ');

		$($ads).remove();
		$('<style>').text($ads + <% ~ads_hide.css %>).appendTo (document.head);

		// 只保留 [看帖、图片、精品、视频] 四个选项
		$('.j_tbnav_tab').filter (function (i) { return i > 3; }).remove ();

		// 执行三次, 确保分隔符会消失
		for (var i = 3; i--; ) {
			setTimeout (function () {
				$('.split_text').next('.split_text').remove();
				$('.split').filter(function () {
					return this.nextElementSibling === null
						|| this.nextElementSibling.className == this.className
						|| !$(this.nextElementSibling).is(':visible');
				}).remove();
			}, 3000 * i);
		}
		
		this.removePromoteThread();
	},
	
	_proc: function (floorType, args) {
		if (floorType == __type_forum) {
			if (args.thread.find('.threadlist_rep_num').text() == '推广')
				args.thread.remove();
		}
	},
	
	removePromoteThread: function () {
		// 清理帖子列表的推广
		var it = document.evaluate('//*[@id="thread_list"]/li/div/div/div[text()="推广"]', document.body, null, XPathResult.ANY_TYPE, null);
		var thread, threads = [];
		
		while (thread = it.iterateNext())
			threads.push(thread);
		
		$(threads).parents('li').remove();
	}
}
