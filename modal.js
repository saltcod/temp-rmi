MktoForms2.whenReady(() => {

	const selects = document.querySelectorAll('.mktoFormRow select');

	if ( selects.length < 0 ) {
		return;
	}

	console.log(selects); // sometimes this is: [node, node], sometimes is []

	selects.forEach(select => {
		select.addEventListener('change', () => {
			console.log('changed');
			// Add a wrapper to the row with the checkbox to aid with alignment
			setTimeout(() => {
				document.querySelector('input[type="checkbox"]').closest('.mktoFormRow').classList.add('input-confirmation-row')
			}, 20);

			setTimeout(() => {
				window.parent.postMessage(document.body.scrollHeight, '*');
			}, 200);
		})
	});

});