window.addEventListener('load', () => {
	function playSoundScream(sound)
	{
		let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		let xhr = new XMLHttpRequest();
		xhr.open('GET', sound);
		xhr.responseType = 'arraybuffer';
		xhr.addEventListener('load', () => {
			let playsound = (audioBuffer) => {
				let source = audioCtx.createBufferSource();
				source.buffer = audioBuffer;
				source.connect(audioCtx.destination);
				source.loop = false;
				source.start();
				source.addEventListener("ended", function () {playSoundScream('sounds/screams/scream_' + ("0" + Math.floor(Math.random() * 88)).slice(-2) + '.mp3');}, false);
			};

			audioCtx.decodeAudioData(xhr.response).then(playsound);
		});
		xhr.send();
	}	
	function playSoundFart(sound)
	{
		let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		let xhr = new XMLHttpRequest();
		xhr.open('GET', sound);
		xhr.responseType = 'arraybuffer';
		xhr.addEventListener('load', () => {
			let playsound = (audioBuffer) => {
				let source = audioCtx.createBufferSource();
				source.buffer = audioBuffer;
				source.connect(audioCtx.destination);
				source.loop = false;
				source.start();
				source.addEventListener("ended", function () {playSoundFart('sounds/farts/fart_' + ("0" + Math.floor(Math.random() * 75)).slice(-2) + '.mp3');}, false);
			};

			audioCtx.decodeAudioData(xhr.response).then(playsound);
		});
		xhr.send();
	}
	
	playSoundScream('sounds/screams/scream_' + ("0" + Math.floor(Math.random() * 88)).slice(-2) + '.mp3');
	playSoundFart('sounds/farts/fart_' + ("0" + Math.floor(Math.random() * 75)).slice(-2) + '.mp3');
});

document.getElementById("changeMe").style.backgroundImage = 'url("' + "images/image (" + (Math.floor(Math.random() * 41) + 1) + ').png")';

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = "images/image (" + (Math.floor(Math.random() * 41) + 1) + ').png';

var j = 100;

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function changeMe() 
{
	document.getElementById("changeMe").style.backgroundSize= j + "% 100%";
	console.log(j + 'vw');
	j = j + 0.1;
	setTimeout(function () {
		changeMe();
	}, 10);
}
changeMe();

var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if(
  isChromium !== null &&
  typeof isChromium !== "undefined"
) {
   document.getElementById("start").style.display = "flex";
} else {
   document.getElementById("start").style.display = "none";
}

var button = document.getElementById("start");
button.onclick = function() {
  	function playSoundScream(sound)
	{
		let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		let xhr = new XMLHttpRequest();
		xhr.open('GET', sound);
		xhr.responseType = 'arraybuffer';
		xhr.addEventListener('load', () => {
			let playsound = (audioBuffer) => {
				let source = audioCtx.createBufferSource();
				source.buffer = audioBuffer;
				source.connect(audioCtx.destination);
				source.loop = false;
				source.start();
				source.addEventListener("ended", function () {playSoundScream('sounds/screams/scream_' + ("0" + Math.floor(Math.random() * 88)).slice(-2) + '.mp3');}, false);
			};

			audioCtx.decodeAudioData(xhr.response).then(playsound);
		});
		xhr.send();
	}	
	function playSoundFart(sound)
	{
		let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		let xhr = new XMLHttpRequest();
		xhr.open('GET', sound);
		xhr.responseType = 'arraybuffer';
		xhr.addEventListener('load', () => {
			let playsound = (audioBuffer) => {
				let source = audioCtx.createBufferSource();
				source.buffer = audioBuffer;
				source.connect(audioCtx.destination);
				source.loop = false;
				source.start();
				source.addEventListener("ended", function () {playSoundFart('sounds/farts/fart_' + ("0" + Math.floor(Math.random() * 75)).slice(-2) + '.mp3');}, false);
			};

			audioCtx.decodeAudioData(xhr.response).then(playsound);
		});
		xhr.send();
	}
	
	playSoundScream('sounds/screams/scream_' + ("0" + Math.floor(Math.random() * 88)).slice(-2) + '.mp3');
	playSoundFart('sounds/farts/fart_' + ("0" + Math.floor(Math.random() * 75)).slice(-2) + '.mp3');
}