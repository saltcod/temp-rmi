
const selects = document.querySelectorAll('.mktoFormRow select');

selects.forEach(select => {
	select.addEventListener('onChange', () => {
		setTimeout(() => {
			window.parent.postMessage(document.body.scrollHeight, '*');
		}, 200);
	})
})
