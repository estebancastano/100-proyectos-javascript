let timerInterval; // Variable para almacenar el intervalo
let elapsedTime = 0; // Tiempo transcurrido en segundos

// Obtener los elementos del DOM
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Función para formatear el tiempo
function formatTime(value) {
    return String(value).padStart(2, "0");
}

// Función para actualizar el temporizador en pantalla
function updateTimerDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
}

// Función para iniciar el temporizador
function startTimer() {
    if (timerInterval) return; // Evitar múltiples intervalos
    timerInterval = setInterval(() => {
        elapsedTime++;
        updateTimerDisplay();
    }, 1000);
}

// Función para detener el temporizador
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reiniciar el intervalo
}

// Agregar eventos a los botones
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
