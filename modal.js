document.addEventListener("DOMContentLoaded", function() {
	console.log('loaded');
	const selects = document.querySelectorAll('.mktoFormRow select');
	if ( selects.length < 0 ) {
		return;
	}

	selects.forEach(select => {
		select.addEventListener('change', () => {
			setTimeout(() => {
				window.parent.postMessage(document.body.scrollHeight, '*');
			}, 200);
		})
	});

	// Select the input box and add a class to it's parent
	document.querySelector('input[type="checkbox"]').closest('.mktoFormRow').classList.add('input-confirmation-row')

});