Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'coc7-babele-cs',
			lang: 'cs',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/coc7-babele-cs/img/fvtt-anvil-cs.png";
		
	}
});
