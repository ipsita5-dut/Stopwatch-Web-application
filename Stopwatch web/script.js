let hrs = 0;
let min = 0;
let sec = 0;
let millisec = 0;
let timer;
let running = false;
let lapNumber = 1;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10); 
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    hrs = 0;
    min = 0;
    sec = 0;
    millisec = 0;
    updateTime();
    clearLaps();
    lapNumber = 1;
}

function updateTime() {
    millisec++;
    if (millisec == 100) {
        millisec = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hrs++;
    }

    document.getElementById("hrs").textContent = padZero(hrs);
    document.getElementById("min").textContent = padZero(min);
    document.getElementById("sec").textContent = padZero(sec);
    document.getElementById("milisec").textContent = padZero(millisec);
}

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

function lapTime() {
    let lapTime = `${padZero(hrs)}:${padZero(min)}:${padZero(sec)}.${padZero(millisec)}`;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapNumber}: ${lapTime}`;
    document.getElementById("lapList").appendChild(lapItem);
    lapNumber++;
}

function clearLaps() {
    document.getElementById("lapList").innerHTML = "";
    lapNumber = 1;
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("lapBtn").addEventListener("click", lapTime);
