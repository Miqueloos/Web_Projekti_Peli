const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");

let chosen = [];
let shuffled = [];
let placed = [];

const lettersEl = document.getElementById("letters");
const slotsEl = document.getElementById("slots");
const message = document.getElementById("message");

function shuffle(arr) {
for (let i = arr.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[arr[i], arr[j]] = [arr[j], arr[i]];
}
}

function startGame() {
message.textContent = "";

// Valitaan 8 kirjainta
    chosen = alphabet.slice(0, 29);
    shuffle(chosen);

    shuffled = [...chosen];
    shuffle(shuffled);

    placed = Array(chosen.length).fill(null);

    render();
}

function render() {
    lettersEl.innerHTML = "";
    slotsEl.innerHTML = "";

    shuffled.forEach((letter, i) => {
        if (!letter) return;
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.textContent = letter;
        tile.onclick = () => placeLetter(i);
        lettersEl.appendChild(tile);
    });

    placed.forEach((letter, i) => {
        const slot = document.createElement("div");
        slot.className = "slot" + (letter ? " filled" : "");
        slot.textContent = letter ? letter : "";
        slot.onclick = () => removeLetter(i);
        slotsEl.appendChild(slot);
    });
}

function placeLetter(index) {
    const letter = shuffled[index];
    if (!letter) return;

    const firstEmpty = placed.indexOf(null);
    if (firstEmpty === -1) return;

    placed[firstEmpty] = letter;
    shuffled[index] = null;
    render();
}

function removeLetter(slotIndex) {
    const letter = placed[slotIndex];
    if (!letter) return;

    const freeIndex = shuffled.indexOf(null);
    if (freeIndex !== -1) shuffled[freeIndex] = letter;
    else shuffled.push(letter);

    placed[slotIndex] = null;
    render();
}

function checkOrder() {
    const correct = [...chosen].sort();

    if (placed.includes(null)) {
        message.textContent = "Valitse kaikkiin laatikoihin kirjaimet ennen tarkistusta!";
        message.style.color = "orange";
        return;
    }

    if (placed.join("") === correct.join("")) {
        message.textContent = "Hyvä, järjestit kirjaimet oikein, hienoa! :) ";
        message.style.color = "lightgreen";
    } else {
        message.textContent = "Ei ihan oikein, yritä vielä uudelleen!";
        message.style.color = "red";
    }
}

document.getElementById("newGame").onclick = startGame;
document.getElementById("checkOrder").onclick = checkOrder;

startGame();
