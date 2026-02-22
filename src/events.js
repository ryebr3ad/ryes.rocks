document.addEventListener('mousedown', startTimer);
document.addEventListener('touchstart', startTimer);

document.addEventListener('mouseup', placeRock);
document.addEventListener('touchend', placeRock);

document.getElementById('rockButton').addEventListener('click', triggerRocks)
