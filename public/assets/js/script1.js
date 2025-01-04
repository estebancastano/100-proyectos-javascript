const translations = {
    en: {
        title: "Guess the Number",
        placeholder: "Enter a number",
        submit: "Submit",
        validNumber: "Please enter a valid number!",
        congratulations: "Congratulations! You guessed the number!",
        tooHigh: "The number is too high!",
        tooLow: "The number is too low!"
    },
    es: {
        title: "Adivina el Número",
        placeholder: "Ingresa un número",
        submit: "Comprobar",
        validNumber: "¡Por favor ingresa un número válido!",
        congratulations: "¡Felicidades! Adivinaste el número!",
        tooHigh: "¡El número es demasiado alto!",
        tooLow: "¡El número es demasiado bajo!"
    }
};


let currentLanguage = "en";

function changeLanguage() {
    currentLanguage = document.getElementById("languageSelector").value;
    const texts = translations[currentLanguage];
    document.getElementById("title").textContent = texts.title;
    document.getElementById("inputNumber").placeholder = texts.placeholder;
    document.getElementById("submitButton").textContent = texts.submit;
}

let randomNumber = Math.floor(Math.random() * 100) + 1;

function random() {
    const inputElement = document.getElementById("inputNumber");
    const confirmationElement = document.getElementById("confirmation");
    const inputNumber = parseInt(inputElement.value, 10);

    const texts = translations[currentLanguage];

    if (randomNumber === inputNumber) {
        confirmationElement.innerHTML = texts.congratulations;
        confirmationElement.style.color = "green";
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } else if (randomNumber < inputNumber) {
        confirmationElement.innerHTML = texts.tooHigh;
        confirmationElement.style.color = "red";
    } else {
        confirmationElement.innerHTML = texts.tooLow;
        confirmationElement.style.color = "red";
    }
}

document.getElementById("inputNumber").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        random();
    }
});