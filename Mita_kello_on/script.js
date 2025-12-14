const clockImages = [
    {src:"images/04_00.jpg", time:"04:00"},
    {src:"images/05_00.jpg", time:"04:00"},
    {src:"images/08_00.jpg", time:"08:00"},
    {src:"images/10_00.jpg", time:"10:00"},
    {src:"images/11_00.jpg", time:"11:00"},
    {src:"images/12_30.jpg", time:"12:30"},
    {src:"images/13_00.jpg", time:"13:00"},
    {src:"images/15_00.jpg", time:"15:00"},
]

let score = 0
let currentAnswer = ""

function changeClock() {
    const img = document.getElementById("clockimage")
    const randomIndex = Math.floor(Math.random() * clockImages.length)
    const chosen = clockImages[randomIndex]
    img.src = chosen.src
    currentAnswer = chosen.time
    generateOptions(chosen.time)
    document.getElementById("result").textContent = ""
}

function generateOptions(correctTime) {
    const optionsDiv = document.getElementById("options")
    optionsDiv.innerHTML = ""   
    const allTimes = clockImages.map(obj => obj.time)
    let wrongTimes = allTimes.filter(t=> t !== correctTime)
    wrongTimes.sort (() => Math.random() - 0.5 )
    let optionList =[correctTime, wrongTimes[0], wrongTimes[1]]

    optionList.forEach(t=>{
        optionsDiv.innerHTML +=`
            <label>
                <input type="radio" name="timeOption" value="${t}">
                ${t}
            </label><br>`
    })

}

function checkAnswer() {
    const result = document.getElementById("result")
    const selected = document.querySelector('input[name=timeOption]:checked')
        if(!selected) {
            result.textContent="Valitse vaihtoehto"
            return
        }

        if(selected.value === currentAnswer){
            result.textContent="Oikein"
            score++
            document.getElementById("score").textContent=score
            localStorage.setItem("pisteet_kello", score);
        }

        else{
            result.textContent="Ei ollut oikea, Yritä uudelleen!"
            
        }
}