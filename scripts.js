window.addEventListener('load', () => {
	// noinspection JSUnresolvedVariable
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'yahoo.mp3');
	xhr.responseType = 'arraybuffer';
	xhr.addEventListener('load', () => {
		let playsound = (audioBuffer) => {
			let source = audioCtx.createBufferSource();
			source.buffer = audioBuffer;
			source.connect(audioCtx.destination);
			source.loop = false;
			source.start();

			setTimeout(function () {
				playsound(audioBuffer);
			}, 1000 + Math.random()*2500);
		};

		audioCtx.decodeAudioData(xhr.response).then(playsound);
	});
	xhr.send();
});