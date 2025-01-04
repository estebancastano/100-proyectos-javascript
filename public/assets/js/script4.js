function updateDigitalClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0"); // Asegura 2 dígitos
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = currentTime;
}

setInterval(updateDigitalClock, 1000);

updateDigitalClock();

