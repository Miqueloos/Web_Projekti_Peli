 // Kysymyslista 
    const questions = [
        { fi: "Minun nimeni on", en: "My name is" },
        { fi: "Kuka sinä olet", en: "Who are you" },
        { fi: "Kuinka vanha sinä olet", en: "How old are you" },
        { fi: "Auto", en: "Car" },
        { fi: "Kukka", en: "Flower" },
        { fi: "Vihreä", en: "Green" },
        { fi: "Maanantai", en: "Monday" },
        { fi: "Punainen", en: "Red" },
        { fi: "Koira", en: "Dog" },
        { fi: "Kissa", en: "Cat" }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        if (currentQuestion >= questions.length) {
            endGame();
            return;
        }

        const q = questions[currentQuestion];
        document.getElementById("question").textContent =
            `Mikä on "${q.fi}" englanniksi?`;

        document.getElementById("answerInput").value = "";
        document.getElementById("feedback").textContent = "";
    }
// Tarkistetaan onko vastaus oikein
    function checkAnswer() {
        const userAnswer = document.getElementById("answerInput").value
            .trim().toLowerCase();
        const correct = questions[currentQuestion].en.toLowerCase();

        if (userAnswer === correct) {
            score++;
            document.getElementById("feedback").textContent = "Oikein!";
            document.getElementById("feedback").style.color = "green";
        } else {
            document.getElementById("feedback").textContent =
                `Väärin. Oikea vastaus on "${correct}".`;
            document.getElementById("feedback").style.color = "red";
        }

        document.getElementById("score").textContent = "Pisteet: " + score;

        currentQuestion++;
        setTimeout(loadQuestion, 1500);
    }
//Lopetetaan peli kun kaikki kysymykset on käyty läpi
    function endGame() {
        document.getElementById("gameBox").style.display = "none";

        const resultBox = document.getElementById("resultBox");
        resultBox.style.display = "block";

        resultBox.textContent =
            `Peli päättyi! Sait ${score} / ${questions.length} pistettä.`;
//Viedään pelin pisteet localStorageen jotta se näkyy pisteet sivulla
        localStorage.setItem("pisteet_englanti", score);
    }

    loadQuestion();