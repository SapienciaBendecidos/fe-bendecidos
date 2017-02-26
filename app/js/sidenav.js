$('#sidebar-ico').click(()=> {
	let $nav = $('#mySidenavN');
	if($nav.hasClass('hidden')) {
		$nav.removeClass('hidden') 
		} else {
			$nav.css('display', 'block');
			$('.nav-wrapper')
			.css({
				'z-index':'3',
				'display': 'block'
			});
		} 
});

$('#Login').click(()=> {
	$('#mySidenavN').addClass('hidden');
});

$('.State').click(()=> {
	let $nav = $('#mySidenavN');
	let $navIco = $('#sidebar-ico');
	if ($navIco.css('display')!=='none') {
		$nav.css('display', 'none');
		$('.nav-wrapper')
			.css({
				'z-index':'-1',
				'display': 'none'
			});
	}
});

$('.nav-wrapper').click(()=> {
	let $nav = $('#mySidenavN');
	$nav.css('display', 'none');
	$('.nav-wrapper')
		.css({
			'z-index':'-1',
			'display': 'none'
		});
});


