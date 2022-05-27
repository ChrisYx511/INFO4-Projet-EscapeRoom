const ostChaosMind = new Audio("../assets/sound/standard/20 - Chaos mind.ogg")
let textTone = new Audio("../" + returnRingtone(selectedTextTone))

const gameContainerDmail2Scene1 = document.getElementById("gameContainerDmail2Scene1")
const area1Text = document.querySelector("#gameContainerDmail2Scene1 .dialogue p")
const area1ChacterName = document.querySelector("#gameContainerDmail2Scene1 .characterName")
const area1CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene1 .characterSpriteCenter")
startArea1()
function startArea1() {
    setupArea("area1DisplayPage")
    area1DisplayPage(currentPage)
}
function area1DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`.... Est-ce que ça a marché??`, "area1Text.innerHTML", 20, true, "page")
            break;
        case 1:
            writeOn(`Je prend une grande respiration et regarda à côté de moi. 
            Le cellulaire dont je tenais m'appartenait.`, "area1Text.innerHTML", 15, true, "page") 
            ostChaosMind.play()
            ostChaosMind.volume = 0.75
            ostChaosMind.loop = true
            break;
        case 2:
            writeOn(`Tout devrais être rentré dans l'ordre, du moins je l'espère.`, "area1Text.innerHTML", 15, true, "page")
            break;
        case 3:
            writeOn(`Je jette un nouveau regard à mon entourage et réalise que je suis chez Moeka, pour une raison dont j'ignore.`, "area1Text.innerHTML", 15, true, "page")
            break;
        case 4:
            cleanArea()
            startArea2()
        }
}
const gameContainerDmail2Scene2 = document.getElementById("gameContainerDmail2Scene2")
const area2Text = document.querySelector("#gameContainerDmail2Scene2 .dialogue p")
const area2ChacterName = document.querySelector("#gameContainerDmail2Scene2 .characterName")
const area2CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene2 .characterSpriteCenter")
const area2CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene2 .characterSpriteLeft")
const area2CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene2 .characterSpriteRight")
const area2CellPhone = document.querySelector("#gameContainerDmail2Scene2 .cellPhone")
const area2Msg1 = document.getElementById("dmail2Scene2Msg1")
const area2Msg2 = document.getElementById("dmail2Scene2Msg2")

function startArea2() {
    gameContainerDmail2Scene1.style.display = "none"
    gameContainerDmail2Scene2.style.display = "inherit"
    setupArea("area2DisplayPage")
    area2DisplayPage(currentPage)
}
function area2DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`J'entend Kiryu Moeka s'approcher.`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 1:
            area2CharacterSpriteCenter.innerHTML = `<img src="../assets/char/MOE/std/moe_alb01a.png" alt="">`
            writeOn(`Silencieuse, comme d'habitude, et sans blessures mortelles. Tout semble correct.`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 2:
            area2CharacterSpriteCenter.innerHTML = `<img src="../assets/char/MOE/std/moe_ala01a.png" alt="">`
            writeOn(`Elle commence à rédiger un courriel, avec sa vitesse qui défie les lois de la physique.
            Je suis presque surpris, ça fait une éternité que je n'ai pas vu ça.`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 3:
            textTone.play()
            textTone.addEventListener("ended", () => {
                textTone.currentTime = 0
            }, { once: true })
            writeOn(`(Continuez pour lire le message...)`, "area2Text.innerHTML", 10, true, "page")
            break;
        case 4:
            area2CellPhone.style.display = "inherit"
            area2Msg1.style.display = "inherit"
            setTimeout (() => {
                writeOn(`(Continuez pour fermer le message...)`, "area2Text.innerHTML", 10, true, "page")
            }, 2000)
            break;
        case 5:
            area2CellPhone.style.display = "none"
            area2Msg1.style.display = "none"
            area2ChacterName.innerHTML = "Rintaro"
            writeOn(`Ton patron? Tu veux dire FB?`, "area2Text.innerHTML", 20, true, "page")
            break;
        }
}