const translations = {
    en: {
        title: "Unit Converter",
        placeholder: "Enter value",
        validLength: "Please enter a valid number greater than 0!",
        conversions: {
            kg: "{value} kg is equal to {result} lb",
            g: "{value} g is equal to {result} oz",
            mg: "{value} mg is equal to {result} oz",
            lb: "{value} lb is equal to {result} kg",
            oz: "{value} oz is equal to {result} kg",
        },
    },
    es: {
        title: "Conversor de Unidades",
        placeholder: "Ingresa un valor",
        validLength: "¡Por favor ingresa un número mayor que 0!",
        conversions: {
            kg: "{value} kg equivale a {result} lb",
            g: "{value} g equivale a {result} oz",
            mg: "{value} mg equivale a {result} oz",
            lb: "{value} lb equivale a {result} kg",
            oz: "{value} oz equivale a {result} kg",
        },
    }
};

let currentLanguage = "en";

function changeLanguage() {
    currentLanguage = document.getElementById("languageSelector").value;
    const texts = translations[currentLanguage];
    document.getElementById("title").textContent = texts.title;
    document.getElementById("input").placeholder = texts.placeholder;
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input'); 
    const unit = document.getElementById('unit');  
    const output = document.getElementById('output');

    input.addEventListener('input', convert);
    unit.addEventListener('change', convert);

    function convert() {
        const value = parseFloat(input.value); 
        const selectedUnit = unit.value;
        const texts = translations[currentLanguage];
    
        if (isNaN(value) || value <= 0) {
            output.textContent = texts.validLength; 
            return;
        }
    
        let result;
    
        switch (selectedUnit) {
            case 'kg':
                result = (value * 2.20462).toFixed(2);
                break;
            case 'g':
                result = (value * 0.035274).toFixed(2);
                break;
            case 'mg':
                result = (value * 0.000035274).toFixed(2);
                break;
            case 'lb':
                result = (value * 0.453592).toFixed(2);
                break;
            case 'oz':
                result = (value * 0.0283495).toFixed(2);
                break;
            default:
                output.textContent = 'Invalid unit';
                return;
        }
    
        const conversionTemplate = texts.conversions[selectedUnit];
        const translatedResult = conversionTemplate
            .replace("{value}", value)
            .replace("{result}", result);
    
        output.textContent = translatedResult;
    }
    
});
