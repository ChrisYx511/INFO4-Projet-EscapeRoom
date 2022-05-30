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
            characterSpriteScene1.innerHTML = '<img src="../assets/char/CRS/std/crs_alb09a.png" alt="">'
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
        case 6:
            cleanArea()
            startArea3()
            break;
            
    }
}

const gameContainerDmail1Scene3 = document.getElementById("gameContainerDmail1Scene3")
const dmail1Scene3DialogueText = document.querySelector("#gameContainerDmail1Scene3 .dialogue p")
const dmail1Scene3DialogueCharacterName = document.querySelector("#gameContainerDmail1Scene3 .dialogue .characterName")
const characterSpriteScene3 = document.querySelector("#gameContainerDmail1Scene3 .characterSpriteCenter")

function startArea3(){
    gameContainerDmail1Scene2.style.display = "none"
    gameContainerDmail1Scene3.style.display = "inherit"
    console.log('it works')
    setupArea("dmail1Area3DisplayPage")
    dmail1Area3DisplayPage(currentPage)
}
function dmail1Area3DisplayPage(index) {
    switch (index) {
        case 0:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            writeOn(` Bon, elle devrait habiter ici. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            gameContainerDmail1Scene3.style.backgroundImage = "url(../assets/bg/moekahouse/BG33N2.PNG)"
            writeOn(` Je dois vite aller la convaincre de me dire quel etait son dmail. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 2:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` knock knock « Allo? Moeka? T'es la? » `, "dmail1Scene3DialogueText.innerHTML", 80, true, "page")
            break;
        case 3:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            writeOn(` Personne repond... je vais quand meme rentrer heheheha. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            gameContainerDmail1Scene3.style.backgroundImage = "url(../assets/bg/moekahouse/BG34N2.PNG)"
            writeOn(` « Moeka? Qu'est-ce que tu fais dans le coin avec ton cellulaire!? » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE/moe_ala02a.png">`
            writeOn(`FB FB FB FB FB... s'il te plait repond moi... `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 6:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Moeka! Moeka!!! Ecoute moi! C'est ugent!!  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 7:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE/moe_ala02a.png">`
            writeOn(` « FB FB FB...  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 8:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            writeOn(` Je lui arracha des mains son cellulaire `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 9:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE/moe_alb0xx.png">`
            writeOn(` « REDONNE MOI CA ESPECE DE PITE!! » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 10:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Mais ptn ecoute moi! c'est urgent!! Laisse moi t'expliquer un peu! » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 11:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE/moe_alb05a.png">`
            writeOn(` « Depeche toi, je t'ecoute... » `, "dmail1Scene3DialogueText.innerHTML", 50, true, "page")
            break;
        case 12:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Te rappeles-tu avoir envoye un dmail? Il faut que tu me dises c'est quoi. La vie de Mayuri depend de ca... » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 13:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE/moe_alb05a.png">`
            writeOn(` « ... » `, "dmail1Scene3DialogueText.innerHTML", 100, true, "page")
            break;
        case 14:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Eille! Dit quelque chose! Ecoute moi stp, j'ai besoin de ta cooperation.  » `, "dmail1Scene3DialogueText.innerHTML", 20, true, "page")
            break;
        case 15:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « En annulant le dmail que tu as envoye, nous allons pouvoir mettre fin a cette folie. » `, "dmail1Scene3DialogueText.innerHTML", 50, true, "page")
            break;
        case 16:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE/moe_alb03a.png">`
            writeOn(` « ...je ne recois que des ordres de FB. » `, "dmail1Scene3DialogueText.innerHTML", 50, true, "page")
            break;
        case 17:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « FB...? » `, "dmail1Scene3DialogueText.innerHTML", 100, true, "page")
            break;
        case 18:
            writeOn(` Je la frappa de toute mes forces et me precipita a l'exterieur. Mon coup devrait la tenir KO queques minutes HAHA.`, "dmail1Scene3DialogueText.innerHTML", 70, true, "page")
            gameContainerDmail1Scene3.style.backgroundImage = "url(../assets/bg/moekahouse/BG33N2.PNG)"
            break;
        case 19:
            cleanArea()
            startArea4()
            break;
    }
}

const gameContainerDmail1Scene4 = document.getElementById("gameContainerDmail1Scene4")
const dmail1Scene4DialogueText = document.querySelector("#gameContainerDmail1Scene4 .dialogue p")
const dmail1Scene4DialogueCharacterName = document.querySelector("#gameContainerDmail1Scene4 .dialogue .characterName")
const characterSpriteScene4 = document.querySelector("#gameContainerDmail1Scene4 .characterSpriteCenter")
const cellulaireArea4 = document.querySelector("#gameContainerDmail1Scene4 .cellPhone")
const voiceOnlyScreen = document.querySelector ("#gameContainerDmail1Scene4 .phoneMailDetails")

function startArea4(){
    gameContainerDmail1Scene3.style.display = "none"
    gameContainerDmail1Scene4.style.display = "inherit"
    setupArea("area4DisplayPage")
    area4DisplayPage(currentPage)
}
function area4DisplayPage(index) {
    switch (index) {
        case 0:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Cette femme... c'est pas croyable.`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 1:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Peu importe, maintenant je sais quoi faire pour annuler le dmail. Je dois appeler Kurisu et vite!`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 2:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`Je sorti mon cellulaire et appela Kurisu. `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            cellulaireArea4.style.display = "inherit"
            break;
        case 3:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Kurisu! Active la machine! Je sais quoi faire! »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            voiceOnlyScreen.innerHTML = "inherit"
            break;
        case 2:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Kurisu! Active la machine! Je sais quoi faire! »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 3:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« D'accord! »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 4:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(`Je vais faire en sorte qu'elle envoie un message a FB disant de ne pas aller chercher le IBM 500. Ainsi, ils ne seront jamais aller le chercher.`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 5:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Je suis pret. Est-tu en position? »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 6:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Oui! Quand tu veux! »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 7:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(`moment de silence...`, "dmail1Scene4DialogueText.innerHTML", 100, true, "page")
            break;
        case 8:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Que- Quoi!? »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 9:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Ca pas marche!? »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 10:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Je ne comprend pas... cela n'a pas marche. Peut-etre que le dmail envoye par Moeka n'est pas la source principale du probleme...? `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 11:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(` « Qu'est-ce qui n'aurait pas marche? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 12:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Je pense que nous avons pas resolu le probleme comme il fallait...  » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 13:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Attend un peu, je vais aller revoir Moeka.  » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 14:

            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` J'espere qu'elle va bien, je l'ai peu-etre frappait trop fort, qui sait... `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            gameContainerDmail1Scene4.style.backgroundImage = "url(../assets/bg/moekahouse/BG33N2.PNG)"
            cellulaireArea4.style.display = "none"
            break;
        case 15:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Moeka? Tout va bien? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 16:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « T'en a pas assez fait? Degage!! » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 17:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Ecoute je sais, je suis vraiment desole pour tantot... mais faudrait que tu cooperes un peu plus stp. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 18:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « Grrrrr pourquoi devrai-je t'ecouter? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 19:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Parce que je te l'ai deja dit. Je veux sauver Mayuri. Si tu ne m'aides pas, je vais jamais pouvoir la sauver. Je suis pret a combattre le destin, je ne vais pas abandonner Mayuri. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 20:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Je ne peux pas abandonner Mayuri, pas rendu la... encore un petit effort, aller... `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 21:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « Je suis desole... je n'ecoute que FB. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 22:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Mais c'est qui ce ptn de FB? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 23:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « Il m'a sauve, il m'a donne une place ou vivre, un travail. C'est lui qui nous donne les ordres, comme d'aller chercher le IBM 500, il se trouve actuellement au coinlockers- » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 24:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Hahaha merci pour l'info, maintenant je sais comment trouver FB. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 25:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « NOOOOOOO- » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 26:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(`Je la frappa a nouveau et sorti. Je vais attendre que FB vienne chercher le IBM 500 au coinlockers. Il ne pourra pas m'echapper.`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 27:
            cleanArea()
            startArea5()
    }
}

const gameContainerDmail1Scene5 = document.getElementById("gameContainerDmail1Scene5")
const dmail1Scene5DialogueText = document.querySelector("#gameContainerDmail1Scene5 .dialogue p")
const dmail1Scene5DialogueCharacterName = document.querySelector("#gameContainerDmail1Scene5 .dialogue .characterName")
const characterSpriteScene5 = document.querySelector("#gameContainerDmail1Scene5 .characterSpriteCenter")

function startArea5(){
    gameContainerDmail1Scene4.style.display = "none"
    gameContainerDmail1Scene5.style.display = "inherit"
    setupArea("area5DisplayPage")
    area5DisplayPage(currentPage)
}
function area5DisplayPage(index) {
    switch (index) {
        case 0:

    }
}