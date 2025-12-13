function tarkistaElainpeli() {
    let pisteet = 0;

    const vastaukset = [
        { id: "koira", oikea: "koira", tulos: "koiraTulos" },
        { id: "kissa", oikea: "kissa", tulos: "kissaTulos" },
        { id: "hevonen", oikea: "hevonen", tulos: "hevonenTulos" }
    ];

    vastaukset.forEach(v => {
        const select = document.getElementById(v.id);
        const tulosEl = document.getElementById(v.tulos);

        if (select.value === "") {
            tulosEl.textContent = "";
            return;
        }

        if (select.value === v.oikea) {
            tulosEl.textContent = "Oikein";
            tulosEl.style.color = "green";
            pisteet++;
        } else {
            tulosEl.textContent = "Väärin";
            tulosEl.style.color = "red";
        }
    });

    document.getElementById("score").textContent = pisteet;
    document.getElementById("result").textContent =
        "Sait " + pisteet + " / 3 oikein.";

    localStorage.setItem("elainpeliPisteet", pisteet);
}
