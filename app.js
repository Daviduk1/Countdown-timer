const countMinutes = document.querySelector('.minutes');
const countSeconds = document.querySelector('.seconds');
const startButton = document.querySelector('.control');
const resetButton = document.querySelector('.reset');
const stopButton = document.querySelector('.stop');

let interval = null;
let time = 0;


function tick () {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    countMinutes.innerHTML = minutes < 10 ? ('0' + minutes) : minutes;
    countSeconds.innerHTML = seconds < 10 ? ('0' + seconds) : seconds;

    if (time <= 0) {
        clearInterval(interval)
        startButton.disabled = false
    }

    time--;
}

resetButton.onclick = function () {
    if (interval) {
        clearInterval(interval)
        countMinutes.innerHTML = '00'
        countSeconds.innerHTML = '00'
        startButton.disabled = false
    }
    let inputMinutes = prompt('Enter number of minutes')
    time = inputMinutes * 60;
    countMinutes.innerHTML = '0' + Math.floor(time / 60).toString().slice(-2)
}

startButton.onclick = function () {
    interval = setInterval(tick, 1000)
    startButton.disabled = true;
}

stopButton.onclick = function () {
    clearInterval(interval);
    startButton.disabled = false
}




