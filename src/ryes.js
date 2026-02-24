let startTime = 0;
let x = 0;
let y = 0;

let enabled = false;

function startTimer(e) {
	if (!enabled) {
		return;
	}
	if (e.type === 'mousedown') {
		if (e.button != 0) {
			return;
		}
		x = e.clientX;
		y = e.clientY;
	}
	if (e.type === 'touchstart') {
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
	}
	startTime = +(new Date());
}

async function placeRock(e) {
	if (!enabled) {
		return;
	}
	if (e.type === 'mousedown') {
		if (e.button != 0) {
			return;
		}
	}
	let duration = (+(new Date()) - startTime) / 1000;
	const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	const oscillator = audioCtx.createOscillator();
	const gainNode = audioCtx.createGain();

	const rock = document.createElement('div');
	rock.innerText = '🪨';
	rock.style.position = 'absolute';
	rock.style.left = x + 'px';
	rock.style.top = y + 'px';
	rock.style.pointerEvents = 'none';
	rock.style.fontSize = `${30 + (15 * duration)}px`;

	document.body.appendChild(rock);
	const frequency = (x / window.innerWidth) * 1000 + 200;
	oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

	gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

	oscillator.connect(gainNode);
	gainNode.connect(audioCtx.destination);

	oscillator.start();
	oscillator.stop(audioCtx.currentTime + 0.5);

	const res = await fetch('https://ryes.rocks/api/add-rock', {
		method: 'POST', headers: {
			'x-api-key': '^gzJcKaMN%UiXguhbk9EcT4J!rt$A()oPb^vexS4'
		}
	});
	const json = await res.json();
	console.log(json);

	setTimeout(() => document.body.removeChild(rock), 1000);

}

function triggerRocks(e) {
	enabled = !enabled;
	if (enabled) {
		document.getElementById('rockButton').textContent = 'Disable Rocks'
	}
	else {
		document.getElementById('rockButton').textContent = 'Enable Rocks'
	}
}

async function getStatus() {
	try {
		let res = await fetch('https://ryes.rocks/api/status', {
			method: 'GET', headers: {
				'x-api-key': '^gzJcKaMN%UiXguhbk9EcT4J!rt$A()oPb^vexS4'
			}
		});
		let status = await res.json();
		showToast(status.message);
	} catch (error) {
		console.error(error.message);
	}
}

function showToast(message) {
	const container = document.getElementById('toast-container');
	const toast = document.createElement('div');

	toast.className = 'toast';
	toast.innerText = message;

	container.appendChild(toast);
	toast.classList.add('show');

	setTimeout(() => {
		toast.classList.remove('show');
		setTimeout(() => toast.remove(), 300)
	}, 1000);
}