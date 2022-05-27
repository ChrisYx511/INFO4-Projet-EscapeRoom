var ostLaboratory = new Audio("../assets/sound/standard/3 - Laboratory.ogg")
const gameContainerDmail1Scene1 = document.getElementById("gameContainerDmail1Scene1")
const dmail1Scene1Dialogue = document.getElementById("dmail1Scene1Dialogue")
const dmail1Scene1DialogueText = document.querySelector("#dmail1Scene1Dialogue p")
const dmail1Scene1DialogueCharacterName = document.querySelector("#dmail1Scene1Dialogue .characterName")
const characterSpriteScene1 = document.querySelector("#gameContainerDmail1Scene1 .characterSpriteCenter")

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
            dmail1Scene1DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Bon, le prochain dmail a annulé est celui de Moeka n'est-ce pas? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            characterSpriteScene1.innerHTML = `<img src="../assets/char/MAY/std/crs_alb01a.png" alt="">`
            break;
        case 2:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Ouais... mais je dois trouver un moyen de localiser Moeka. »`, "dmail1Scene1DialogueText.innerHTML", 50, true, "page")
            break;
        case 3:
            dmail1Scene1DialogueCharacterName.innerHTML = "Kurisu"
            characterSpriteScene1.innerHTML = '<img src="../assets/char/MAY/std/crs_alb01a.png" alt="">'
            writeOn(`« Comment comptes-tu faire? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            //Interaction here
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Je me rappelle qu'elle m'a dit une fois qu'elle travaillait au » `, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Dialogue2CharacterName.innerHTML = "Kurisu"
            writeOn(`« Oh. Tu pourrais aller demander au boss s'il pourrait te donner son adresse. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            characterSpriteScene1.innerHTML = '<img src="../assets/char/MAY/std/crs_alb01a.png" alt="">'
            break;
        case 6:
            dmail1Dialogue2CharacterName.innerHTML = "Rintaro"
            writeOn(`« Allons demander sur place. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 7:
            cleanArea()
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
            dmail1Dialogue2CharacterName.innerHTML = "Boss"
            writeOn(`« Bonjour monsieur, puis-je vous aider? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Dialogue2CharacterName.innerHTML = "Rintaro"
            writeOn(`« Bonjour, est-ce qu'il y aurait sans par hasard une femme nommée Moeka qui travaillait ici? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 2:
            dmail1Dialogue2CharacterName.innerHTML = "Boss"
            writeOn(`« Moeka? Oui, je crois bien. Pourquoi veux-tu savoir son adresse? C'est un peu sussy de ta part. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 3:
            case 1:
            dmail1Dialogue2CharacterName.innerHTML = "Rintaro"
            writeOn(`« Uhh... ne vous inquiètez pas monsieur, tout est sous contrôle. Croyez moi, hail Hydra. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            dmail1Dialogue2CharacterName.innerHTML = "Boss"
            writeOn(`« Ohhh je voiiis. Elle habite dans le coin, dans un appartement sur la rue  »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Dialogue2CharacterName.innerHTML = "Rintaro"
            writeOn(`« D'accord Merci. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            cleanArea()
            startArea3()
            break;
    }
}