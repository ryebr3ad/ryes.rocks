document.addEventListener('pointerdown', startTimer);
document.addEventListener('pointerup', placeRock);

document.getElementById('rockButton').addEventListener('click', triggerRocks)
document.getElementById('status').addEventListener('click', getStatus)