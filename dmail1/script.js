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
    switch (index) {
        case 0:
            writeOn("J'exlique pour la cinquième fois a Kurisu la situation, comment Mayuri va mourir, Sern nous traque et les dmails a ammuler.", "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Scene1DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Bon, le prochain dmail a annulé est celui de Moeka n'est-ce pas? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            characterSpriteScene1.innerHTML = `<img src="../assets/char/CRS/std/crs_alb01a.png" alt="">`
            break;
        case 2:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Ouais... mais je dois trouver un moyen de localiser Moeka. »`, "dmail1Scene1DialogueText.innerHTML", 20, true, "page")
            break;
        case 3:
            dmail1Scene1DialogueCharacterName.innerHTML = "Kurisu"
            characterSpriteScene1.innerHTML = '<img src="../assets/char/CRS/std/crs_alb01a.png" alt="">'
            writeOn(`« Comment comptes-tu faire? »`, "dmail1Scene1DialogueText.innerHTML", 20, true, "page")
            break;
        case 4:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` Si je me rappelle bien, elle m'a dit une fois qu'elle travaillait au `, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Je pense pouvoir trouver de l'information où elle travaillait avant.`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 6:
            dmail1Scene1DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Oh. Tu pourrais aller demander au boss s'il pourrait te donner son adresse. »`, "dmail1Scene1DialogueText.innerHTML", 20, true, "page")
            characterSpriteScene1.innerHTML = '<img src="../assets/char/CRS/std/crs_alb01a.png" alt="">'
            break;
        case 7:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Oui, c'est exact. Allons-y, pas de temps a perdre. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 8:
            cleanArea()
            startArea2()
           
    }
}


const gameContainerDmail1Scene2 = document.getElementById("gameContainerDmail1Scene2")
const dmail1Scene2Dialogue2 = document.querySelector("#dmail1Scene2Dialogue")
const dmail1Scene2DialogueText = document.querySelector("#dmail1Scene2Dialogue p")
const dmail1Scene2DialogueCharacterName = document.querySelector("#dmail1Scene2Dialogue .characterName")
const characterSpriteScene2 = document.querySelector("#gameContainerDmailScene2 .characterSpriteCenter")


function startArea2() {
    console.log("Area 2 has started!")
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
            dmail1Scene2DialogueCharacterName.innerHTML = "Boss"
            writeOn(`« Bonjour monsieur, puis-je vous aider? »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Scene2DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Bonjour, est-ce qu'il y aurait sans par hasard une femme nommée Moeka qui travaillait ici? »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 2:
            dmail1Scene2DialogueCharacterName.innerHTML = "Boss"
            writeOn(`« Moeka? Oui, je crois bien. Pourquoi veux-tu savoir son adresse? C'est un peu sussy de ta part. »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 3:
            case 1:
            dmail1Scene2DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Uhh... ne vous inquiètez pas monsieur, tout est sous contrôle. Croyez moi, hail Hydra. »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            dmail1Scene2DialogueCharacterName.innerHTML = "Boss"
            writeOn(`« Ohhh je voiiis. Elle habite dans le coin, dans un appartement sur la rue  »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene2DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« D'accord merci. »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            cleanArea()
            startArea3()
            
    }
}

const gameContainerDmail1Scene3 = document.getElementById("gameContainerDmail1Scene3")
const dmail1Scene3Dialogue3 = document.querySelector("#gameContainerDmail1Scene3")
const dmail1Scene3DialogueText = document.querySelector("#gameContainerDmail1Scene3 .dialogue p")
const dmail1Scene3DialogueCharacterName = document.querySelector("#gameContainerDmail1Scene3 .characterName")
const characterSpriteScene3 = document.querySelector("#gameContainerDmail1Scene3 .characterSpriteCenter")

function startArea3(){
    gameContainerDmail1Scene2.style.display = "none"
    gameContainerDmail1Scene3.style.display = "inherit"
    
    setupArea("dmail1Area3DisplayPage")
    dmail1Area3DisplayPage(currentPage)
}
function dmail1Area3DisplayPage(index) {
    switch (index) {
        case 0:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` Bon, elle devrait habiter ici. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            gameContainerDmail1Scene3.style.backgroundImage = `<img src="../assets/bg/moekahouse/BG33N2.PNG">`
            writeOn(` Je dois vite aller la convaincre de me dire quel etait son dmail. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 2:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Allo? Moeka? T'es la? » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 3:
            writeOn(` Personne repond... je vais quand meme rentrer heheheha. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            writeOn(` « Moeka? Qu'est-ce que tu fais dans le coin avec ton cellulaire!? » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            writeOn(`FB FB FB FB FB... s'il te plait repond moi... `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 6:
            writeOn(` « Moeka! Moeka!!! Ecoute moi! C'est ugent!!  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 7:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « FB FB FB...  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 8:
            writeOn(` Je lui arracha des mains son cellulaire `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 9:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « REDONNE MOI CA ESPECE DE PITE!! » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 10:
            writeOn(` « Mais ptn ecoute moi! c'est urgent!! Laisse moi t'expliquer un peu! » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 11:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « Depeche toi, je t'ecoute... » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 12:
            writeOn(` « Te rappeles-tu avoir envoye un dmail? Il faut que tu me dises c'est quoi. La vie de Mayuri depend de ca... » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 13:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « ... » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 14:
            writeOn(` « Eille! Dit quelque chose! Ecoute moi stp, j'ai besoin de ta cooperation.  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 15:
            writeOn(` « En annulant le dmail que tu as envoye, nous allons pouvoir mettre fin a cette folie. » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 16:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « ...je ne recois que des ordres de FB. » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;


    }
}