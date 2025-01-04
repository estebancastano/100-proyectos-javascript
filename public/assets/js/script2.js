const translations = {
    en: {
        title: "Password Generator",
        subtitle: "Password length:",
        placeholder: "Enter a length for the password",
        submit: "Generate",
        validLength: "Please enter a valid length!",
        tooHigher: "Please enter a length less than 20.",
        tooLower: "Please enter a length greater than 12.",
        result: "Generated password: ",
    },
    es: {
        title: "Generador de Contraseñas",
        subtitle: "Longitud de la contraseña:",
        placeholder: "Ingresa la longitud de la contraseña",
        submit: "Generar",
        validLength: "¡Por favor ingresa una longitud válida!",
        tooHigher: "¡Por favor ingresa una longitud menor que 20!",
        tooLower: "¡Por favor ingresa una longitud mayor que 12!",
        result: "Contraseña generada: ",
    }
};


let currentLanguage = "en";

function changeLanguage() {
    currentLanguage = document.getElementById("languageSelector").value;
    const texts = translations[currentLanguage];
    document.getElementById("title").textContent = texts.title;
    document.getElementById("span").textContent = texts.subtitle;
    document.getElementById("length").placeholder = texts.placeholder;
    document.getElementById("submitButton").textContent = texts.submit;
    document.getElementById("password").textContent = "";
}

function generatePassword() {
    const confirmationPasswordElement = document.getElementById("password");
    const texts = translations[currentLanguage];
    const length = parseInt(document.getElementById('length').value);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    if (isNaN(length) || length <= 0) {
        confirmationPasswordElement.innerHTML = texts.validLength;
        return;
    }
    if (length > 20) {
        document.getElementById('password').innerHTML = 'Please enter a length less than 20.';
        return;
    }
    if (length < 12) {
        document.getElementById('password').innerHTML = 'Please enter a length greater than 12.';
        return;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }
    document.getElementById('password').innerHTML = texts.result + password;
}

document.getElementById("length").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        generatePassword();
    }
});
