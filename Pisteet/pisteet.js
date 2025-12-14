//Lasketaan pisteet yhteen
function calculatePoints() {
    const scores = [
        { name: "Aakkoset järjestykseen", key: "pisteet_aakkoset" },
        { name: "Englannin alkeet", key: "pisteet_englanti" },
        { name: "Matikka -peli", key: "pisteet_matikka" },
        { name: "Mitä kello on?", key: "pisteet_kello" },
        { name: "Tunnista eläin", key: "pisteet_elaimet" }
    ];
    let totalScore=0;
    const result = document.getElementById("total-score");
    scores.forEach(item => {
        
        let score = localStorage.getItem(item.key);
        if(score==="Oikein"){
            score=1;
        }
        if(score==="Ei mennyt läpi"){
            score=0;
        }
        if(score===null){
            score=0;
        }
        const score2=Number(score);
        totalScore+=score2;
        result.textContent = totalScore;
    });
}
//Tuodaan pisteet peleistä tälle sivulle
function loadScores() {
    const scores = [
        { name: "Aakkoset järjestykseen", key: "pisteet_aakkoset" },
        { name: "Englannin alkeet", key: "pisteet_englanti" },
        { name: "Matikka -peli", key: "pisteet_matikka" },
        { name: "Mitä kello on?", key: "pisteet_kello" },
        { name: "Tunnista eläin", key: "pisteet_elaimet" }
    ];

    const list = document.getElementById("scoresList");
    list.innerHTML = "";

    scores.forEach(item => {
        const score = localStorage.getItem(item.key);
        const li = document.createElement("li");

        li.textContent = `${item.name}: ${score !== null ? score : "ei pelattu"}`;
        list.appendChild(li);
    });
}
calculatePoints();
loadScores();