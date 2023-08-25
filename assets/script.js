const cronometro = document.querySelector("#cronometro")
const botaoStart = document.querySelector('.start-btn');
const botaoPause = document.querySelector('.pause-btn');
const botaoZerar = document.querySelector('.stop-btn');
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

botaoStart.addEventListener('click', () =>{
    botaoStart.disabled = true;
    botaoPause.disabled = false;
});

botaoPause.addEventListener('click', () =>{
    botaoStart.disabled = false;
    botaoPause.disabled = true;
});

botaoZerar.addEventListener('click', () =>{
    botaoZerar.disabled = false;
    botaoStart.disabled = false;
    botaoPause.disabled = false;
});

function init(){
    cronometrar();
    interval = setInterval(cronometrar, 1000);
}

const pause = () =>{
    clearInterval(interval);
}

const clearAll = () =>{
    clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;

    cronometro.innerHTML = "00:00:00"
}

const digitZero = (digit) => {
    if(digit < 10){
        return `0${digit}`;
    }else{
        return digit;
    }
}

function cronometrar(){
    seconds++;

    if(seconds === 60){
        minutes++;
        seconds = 0;
    }
    if(minutes === 60){
        minutes == 0;
        hours++;
    }

    cronometro.innerHTML = `${digitZero(hours)}:${digitZero(minutes)}:${digitZero(seconds)}`;
}