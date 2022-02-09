document.addEventListener('click', () => {
		setTimeout(() => {
			window.parent.postMessage(document.body.scrollHeight, 'https://nustdmsb.wpengine.com/');
		}, 200);
	})