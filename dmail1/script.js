var ostLaboratory = new Audio("../assets/sound/standard/3 - Laboratory.ogg")
const gameContainerDmail1Scene1 = document.getElementById("gameContainerDmail1Scene1")
const dmail1Scene1Dialogue = document.getElementById("dmail1Scene1Dialogue")
const dmail1Scene1DialogueText = document.querySelector("#dmail1Scene1Dialogue p")
const dmail1Scene1DialogueCharacterName = document.querySelector("#dmail1Scene1Dialogue .characterName")
const characterSpriteScene1 = document.querySelector("#gameContainerDmail1Scene1 .characterSpriteRight")

startArea1()
ostLaboratory.play()
ostLaboratory.volume = 0.75
ostLaboratory.loop = true

function startArea1() {
    setupArea("dmail1Area1DisplayPage")
    dmail1Area1DisplayPage(currentPage)
}
function dmail1Area1DisplayPage(index) {
    let interaction1Complete = false
    switch (index) {
        case 0:
            writeOn("Ughhhhhhh...... my head...", "dmail1Scene1DialogueText.innerHTML", 10, true, "page")
            break;
        case 1:
            dmail1Scene1DialogueCharacterName.innerHTML = "Mayuri"
            writeOn(`« Okarin! Ça va?? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            characterSpriteScene1.innerHTML = `<img src="../assets/char/MAY/std/may_alc04a.png" alt="">`
            break;
        case 2:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Ça va, plus ou moins... il est quel heure? »`, "dmail1Scene1DialogueText.innerHTML", 50, true, "page")
            break;
        case 3:
            dmail1Scene1DialogueCharacterName.innerHTML = "Mayuri"
            characterSpriteScene1.innerHTML = '<img src="../assets/char/MAY/std/may_alb03a.png" alt="">'
            writeOn(`« Tu dormais sur le sofa et puis t'a juste fait 'fwooop'. J'étais tellement inquiète! »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            //Interaction here
            dmail1Scene1DialogueCharacterName.innerHTML = ""
            writeOn(`Veuillez confirmer que vous n'êtes pas un agent de l'organisation qui travaille dans les ténèbres pour entraver à notre travaille de recherche.`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            alert("Hello World")
            writeOn(`Complete`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 6:
            setupArea("dmail1Area1DisplayPage", true)
            startArea2()
            break;

    }
}
const gameContainerDmail1Scene2 = document.getElementById("gameContainerDmail1Scene2")
const dmail1Dialogue2 = document.querySelector("#gameContainerDmail1Scene2 .dialogue")
const dmail1Dialogue2Text = document.querySelector("#gameContainerDmail1Scene2 .dialogue p")
const dmail1Dialogue2CharacterName = document.querySelector("#gameContainerDmail1Scene2 .characterName")
function startArea2() {
    console.log("Area 2 has started!!!!!!!!!!")
    ostLaboratory.pause()
    ostLaboratory.currentTime = 0
    gameContainerDmail1Scene1.style.display = "none"
    gameContainerDmail1Scene2.style.display = "inherit"

    setupArea("dmail1Area2DisplayPage")
    dmail1Area2DisplayPage(currentPage)
}
function dmail1Area2DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn("C'est une nouvelle page!!!!!!", "dmail1Dialogue2Text.innerHTML", 10, true, "page")
            break;
    }
}