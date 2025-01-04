const translations = {
    en: {
        title: "Rock, paper or scissor",
        subtitle: "Choose your weapon:",
        rockOption: "🪨Rock",
        paperOption: "📜Paper",
        scissorOption: "✂️Scissor",
        draw: "It's a draw!",
        youWin: "You win!",
        computerWins: "Computer wins!",
        score: "Score: "
    },
    es: {
        title: "Piedra, papel o tijera",
        subtitle: "Escoge tu opción:",
        rockOption: "🪨Piedra",
        paperOption: "📜Papel",
        scissorOption: "✂️Tijera",
        draw: "¡Es un empate!",
        youWin: "¡Ganaste!",
        computerWins: "¡La computadora gana!",
        score: "Puntaje: "
    }
};

let currentLanguage = "en";
let counter = 0; 

function changeLanguage() {
    currentLanguage = document.getElementById("languageSelector").value;
    const texts = translations[currentLanguage];

    document.getElementById("title").textContent = texts.title;
    document.getElementById("subtitle").textContent = texts.subtitle;
    document.getElementById("rock").textContent = texts.rockOption;
    document.getElementById("paper").textContent = texts.paperOption;
    document.getElementById("scissor").textContent = texts.scissorOption;
}


function rockPaperScissor(playerChoice) {
    const things = ['Rock', 'Paper', 'Scissor'];
    const texts = translations[currentLanguage];
    const thing = things[Math.floor(Math.random() * things.length)];

    if (playerChoice === thing) {
        document.getElementById("result").innerHTML = texts.draw;
    } else if (
        (playerChoice === 'Rock' && thing === 'Scissor') ||
        (playerChoice === 'Paper' && thing === 'Rock') ||
        (playerChoice === 'Scissor' && thing === 'Paper')
    ) {
        document.getElementById("result").innerHTML = texts.youWin;
        counter += 1;
    } else {
        document.getElementById("result").innerHTML = texts.computerWins;
    }
    document.getElementById("counter").innerHTML = texts.score + counter;
}

