let startTime = 0;
let x = 0;
let y = 0;

let enabled = false;
let clicked = false;

const socket = io("https://ryes.rocks", {
	path: "/api/socket.io"
});

socket.on('new-rock', (rock) => {
	console.log(rock);
})

function startTimer(e) {
	//don't run if not enabled
	if (!enabled) {
		return;
	}
	//don't run if correct mouse button wasn't clicked.  I think a touch equals a left click?
	if (e.button != 0) {
		return
	}
	console.log(e);
	x = e.clientX;
	y = e.clientY;
	clicked = true;
	startTime = +(new Date());
}

function moveRock(e) {
	//don't run if not enabled
	if (!enabled) {
		return;
	}
	if (!clicked) {
		return;
	}
	x = e.clientX;
	y = e.clientY;
}


async function placeRock(e) {
	//don't run if not enabled
	if (!enabled) {
		return;
	}
	if (!clicked) {
		return;
	}
	//don't run if correct mouse button wasn't clicked.  I think a touch equals a left click?
	if (e.button != 0) {
		return
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
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			x, y
		}),
		headers: {
			'x-api-key': '^gzJcKaMN%UiXguhbk9EcT4J!rt$A()oPb^vexS4'
		}
	});
	const json = await res.json();
	console.log(json);
	clicked = false;
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
