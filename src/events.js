//document.addEventListener('mousedown', startTimer);
//document.addEventListener('touchstart', startTimer);

//document.addEventListener('mouseup', placeRock);
//document.addEventListener('touchend', placeRock);

document.addEventListener('pointerdown', startTimer);
document.addEventListener('pointerup', placeRock);

document.getElementById('rockButton').addEventListener('click', triggerRocks)
document.getElementById('status').addEventListener('click', getStatus)