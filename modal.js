
const selects = document.querySelectorAll('.mktoFormRow select');
console.log(selects);
selects.forEach(select => {
	select.addEventListener('change', () => {
		setTimeout(() => {
			window.parent.postMessage(document.body.scrollHeight, '*');
		}, 200);
	})
})
