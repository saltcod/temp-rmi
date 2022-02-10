document.addEventListener('click', () => {
	setTimeout(() => {
		window.parent.postMessage(document.body.scrollHeight, '*');
	}, 200);
})