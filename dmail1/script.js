// Félix Wu - 2022-05-30 - DMAIL 1 (NIVEAU 1)

const ostLaboratory = new Audio("../assets/sound/standard/3 - Laboratory.ogg")
const ostSuspiciousEyes = new Audio("../assets/sound/standard/5 - Suspicious Eyes.ogg")
const ostChaosMind = new Audio("../assets/sound/standard/20 - Chaos mind.ogg")
const ostAssailant = new Audio("../assets/sound/standard/6 - Assailant.ogg")
const ostCrossroads = new Audio("../assets/sound/standard/10 - Crossroads.ogg")
const sfxTimeLeap = new Audio("../assets/sound/sfx/timeleap.ogg")
const gameContainerDmail1Scene1 = document.getElementById("gameContainerDmail1Scene1")
const dmail1Scene1Dialogue = document.getElementById("dmail1Scene1Dialogue")
const dmail1Scene1DialogueText = document.querySelector("#dmail1Scene1Dialogue p")
const dmail1Scene1DialogueCharacterName = document.querySelector("#dmail1Scene1Dialogue .characterName")
const characterSpriteScene1 = document.querySelector("#gameContainerDmail1Scene1 .characterSpriteCenter")

startArea1()

function startArea1() {
    setupArea("dmail1Area1DisplayPage")
    dmail1Area1DisplayPage(currentPage)
}
function dmail1Area1DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn("J'exlique pour la cinquième fois à Kurisu la situation, comment Mayuri va mourir, Sern nous traque et les dmails a annuler.", "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Scene1DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Bon, le prochain dmail à annuler est celui de Moeka n'est-ce pas? »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            characterSpriteScene1.innerHTML = `<img src="../assets/char/CRS/std/crs_alb01a.png" alt="">`
            ostSuspiciousEyes.play()
            ostSuspiciousEyes.volume = volume
            ostSuspiciousEyes.loop = true
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
            writeOn(`« Si je me rappelle bien, elle m'a dit une fois qu'elle travaillait dans une agence de presse, Arc Rewrite. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene1DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Je pense pouvoir trouver de l'information où elle travaillait avant. »`, "dmail1Scene1DialogueText.innerHTML", 30, true, "page")
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
            writeOn(`« Bonjour, est-ce qu'il y aurait par hasard une femme nommée Moeka qui travaillait ici? »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 2:
            dmail1Scene2DialogueCharacterName.innerHTML = "Boss"
            writeOn(`« Moeka? Oui, je crois bien. Pourquoi veux-tu savoir son adresse? C'est un peu sussy de ta part. »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 3:
            case 1:
            dmail1Scene2DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Uhh... ne vous inquiètez pas monsieur, tout est sous contrôle. Nous avons perdu contact, donc... ouais. »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            dmail1Scene2DialogueCharacterName.innerHTML = "Boss"
            writeOn(`« Ohhh je voiiis. Elle habite dans le coin, dans un appartement à deux coins de rue d'ici.  »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene2DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« D'accord, merci. »`, "dmail1Scene2DialogueText.innerHTML", 30, true, "page")
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
            ostSuspiciousEyes.pause()
            ostSuspiciousEyes.currentTime = 0
            writeOn(` Bon, elle devrait habiter ici. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 1:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            ostChaosMind.play()
            ostChaosMind.volume = volume
            ostChaosMind.loop = true
            gameContainerDmail1Scene3.style.backgroundImage = "url(../assets/bg/moekahouse/BG33N2.PNG)"
            writeOn(` Je dois vite aller la convaincre de me dire quel était son dmail. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 2:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` knock knock « Allo? Moeka? T'es là? » `, "dmail1Scene3DialogueText.innerHTML", 80, true, "page")
            break;
        case 3:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            writeOn(` Personne répond... mais je vais quand même entrer. `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 4:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            gameContainerDmail1Scene3.style.backgroundImage = "url(../assets/bg/moekahouse/BG34N2.PNG)"
            writeOn(` « Moeka? Qu'est-ce que tu fais dans le coin avec ton cellulaire!? » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 5:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_ala02a.png">`
            writeOn(`FB FB FB FB FB... s'il te plait répond moi... `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 6:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Moeka! Moeka!!! Écoute moi! C'est ugent!!  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 7:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_ala02a.png">`
            writeOn(` « FB FB FB...  » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 8:
            dmail1Scene3DialogueCharacterName.innerHTML = ""
            writeOn(` Je lui arracha des mains son cellulaire `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 9:
            ostChaosMind.pause()
            ostChaosMind.currentTime = 0
            ostAssailant.play()
            ostAssailant.volume = volume
            ostAssailant.loop = true
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb0xx.png">`
            writeOn(` « REDONNE MOI CA ESPÈCE DE- » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 10:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Laisse moi t'expliquer un peu. » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 11:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb05a.png">`
            writeOn(` « QUOI? » `, "dmail1Scene3DialogueText.innerHTML", 50, true, "page")
            break;
        case 12:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Te rappeles-tu avoir envoyé un dmail? Il faut que tu me dises c'est quoi. » `, "dmail1Scene3DialogueText.innerHTML", 30, true, "page")
            break;
        case 13:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb05a.png">`
            writeOn(` « ... » `, "dmail1Scene3DialogueText.innerHTML", 100, true, "page")
            break;
        case 14:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Eille! Dit quelque chose! Je vais faire ce qu'il faut pour savoir ce que j'ai besoin de savoir.  » `, "dmail1Scene3DialogueText.innerHTML", 20, true, "page")
            break;
        case 15:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « En annulant le dmail que tu as envoyé, tu ne vas pas... le monde ne va pas... tuer Mayuri. » `, "dmail1Scene3DialogueText.innerHTML", 50, true, "page")
            break;
        case 16:
            dmail1Scene3DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb03a.png">`
            writeOn(` « ...je ne reçois que des ordres de FB. » `, "dmail1Scene3DialogueText.innerHTML", 50, true, "page")
            break;
        case 17:
            dmail1Scene3DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « FB...? » `, "dmail1Scene3DialogueText.innerHTML", 100, true, "page")
            break;
        case 18:
            writeOn(`Je réalise que seulement la violence fonctionnera. Je la frappa de toute mes forces et me precipita à l'extérieur. Mon coup devrait la tenir KO queques minutes. `, "dmail1Scene3DialogueText.innerHTML", 70, true, "page")
            characterSpriteScene3.innerHTML = "none"
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
const cellulaireArea4 = document.getElementById("cellulaireArea4")
const voiceOnlyScreen = document.getElementById("voiceOnlyArea4")


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
            break;
        case 3:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Kurisu! Active la machine! Je sais quoi faire! »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            cellulaireArea4.style.display = "inherit"
            voiceOnlyScreen.style.display = "inherit"
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
            writeOn(`Je vais faire en sorte qu'elle envoie un message à FB disant de ne pas aller chercher le IBN 5100. Ainsi, ils ne seront jamais aller le chercher.`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 5:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Je suis prêt. Es-tu en position? »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 6:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Oui! Quand tu veux! »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 7:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Moment de silence...`, "dmail1Scene4DialogueText.innerHTML", 100, true, "page")
            break;
        case 8:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Que- Quoi!? »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 9:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Ça n'a pas marché!? »`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 10:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Je ne comprend pas... ça n'a pas marché. Peut-être que le dmail envoyé par Moeka n'est pas la source principale du problème...? `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 11:
            dmail1Scene4DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(` « Qu'est-ce qui n'aurait pas marché? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 12:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Je pense que nous avons pas résolu le problème comme il fallait...  » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 13:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Attend un peu, je vais aller revoir Moeka.  » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 14:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Ça aurait pu être pire. Je l'ai peut-être frappait trop fort, mais au moins elle n'avait pas son pistolet. `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            gameContainerDmail1Scene4.style.backgroundImage = "url(../assets/bg/moekahouse/BG33N2.PNG)"
            cellulaireArea4.style.display = "none"
            break;
        case 15:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Moeka? Tout va bien? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 16:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            gameContainerDmail1Scene4.style.
            backgroundImage = "url(../assets/bg/moekahouse/BG34N2.PNG)"
            characterSpriteScene4.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb05a.png">`
            writeOn(` « T'en a pas assez fait? Dégage!! » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 17:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Écoute. Je vais t'addresser calmement, et tu vas coopérer avec moi. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 18:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb03a.png">`
            writeOn(` « ...... » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 19:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Je vais sauver Mayuri. Si tu ne m'aides pas, je vais jamais pouvoir la sauver. Je suis prêt a combattre le destin, tuer s'il le faut, je ne vais pas abandonner Mayuri. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 20:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(` Je ne peux pas abandonner Mayuri, pas rendu là... encore un petit effort, aller... `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 21:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb03a.png">`
            writeOn(` « ... je n'écoute que FB. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 22:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Mais c'est qui ce de FB? » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 23:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            writeOn(` « Il m'a sauvé, il m'a donné une place où vivre, un travail. C'est lui qui nous donné les ordres, comme d'aller chercher le IBN 5100, il se trouve actuellement au coinlocker- » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 24:
            dmail1Scene4DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(` « Hahaha merci pour l'info, maintenant je sais comment trouver FB. » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 25:
            dmail1Scene4DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene3.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb0xx.png">`
            writeOn(` « NOOOOOOO- » `, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
            break;
        case 26:
            dmail1Scene4DialogueCharacterName.innerHTML = ""
            writeOn(`Je la frappa à nouveau et sorti. Je vais attendre que FB vienne chercher le IBN5100 au coinlockers. Il ne pourra pas m'échapper.`, "dmail1Scene4DialogueText.innerHTML", 70, true, "page")
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
const characterSpriteScene5L = document.querySelector("#gameContainerDmail1Scene5 .characterSpriteLeft")
const characterSpriteScene5R = document.querySelector("#gameContainerDmail1Scene5 .characterSpriteRight")
let tenPhonePass
const dmail1Area5Quiz = document.getElementById("dmail1Area5Quiz")
const cellulaireArea5 = document.getElementById("cellulaireArea5")
const voiceOnlyScreen5 = document.getElementById("voiceOnlyArea5")

function startArea5(){
    gameContainerDmail1Scene4.style.display = "none"
    gameContainerDmail1Scene5.style.display = "inherit"
    setupArea("area5DisplayPage")
    area5DisplayPage(currentPage)
}
function area5DisplayPage(index) {
    switch (index) {
        case 0:
            ostAssailant.pause()
            ostAssailant.currentTime = 0
            ostSuspiciousEyes.play()
            ostSuspiciousEyes.volume = volume
            ostSuspiciousEyes.loop = true
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(` FB... il devrait venir chercher le IBN 5100 d'une minute à l'autre. `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 1:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(`........`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 2:
            dmail1Scene5DialogueCharacterName.innerHTML = "Tennouji"
            characterSpriteScene5R.innerHTML = `<img src="../assets/char/TEN/ten_bla01a.png">`
            writeOn(`« Ahh quelle belle journée pour venir chercher le- »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 3:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(` Mais qu'est-ce que- Braun!? Que fait-il ici à cet heure? `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 4:
            dmail1Scene5DialogueCharacterName.innerHTML = "Tennouji"
            characterSpriteScene5R.innerHTML = `<img src="../assets/char/TEN/ten_bla03a.png">`
            writeOn(`« Rintaro? Tu fais quoi ici? »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 5:
            dmail1Scene5DialogueCharacterName.innerHTML = "Rintaro"
            writeOn(`« Je me posais la même question pour toi. T'utilises un de ses coinlockers? »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 6:
            dmail1Scene5DialogueCharacterName.innerHTML = "Tennouji"
            characterSpriteScene5R.innerHTML = `<img src="../assets/char/TEN/ten_bla01a.png">`
            writeOn(`« Je suis juste venu chercher un certain objet dans mon coinlocker, rien de plus normal. »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 7:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(`C'est étrange... quelque chose me dit qu'il ment... ou peut-être est-ce qu'un pure hasard qu'il soit là à cet heure?`, "dmail1Scene5DialogueText.innerHTML", 50, true, "page")
            break;
        case 8:
            dmail1Scene5DialogueCharacterName.innerHTML = "Tennouji"
            characterSpriteScene5R.innerHTML = `<img src="../assets/char/TEN/ten_bla01a.png">`
            writeOn(`« Bon pas grave, je devrais me dépecher à prendre mon truc, il se fait tard. »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 9:
            gameContainerDmail1Scene5.style.backgroundImage = "url(../assets/bg/coinlocker/BG21NR1.PNG)"
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            characterSpriteScene5R.innerHTML = "none"
            writeOn(` Je le vis se diriger vers le casier du coin en bas à droite... l'emplacement du IBN 5100!!! `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 10:
            dmail1Scene5DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene5L.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb03a.png">`
            writeOn(`« ... FB? »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 11:
            dmail1Scene5DialogueCharacterName.innerHTML = "Tennouji"
            characterSpriteScene5R.innerHTML = `<img src="../assets/char/TEN/ten_bla02a.png">`
            writeOn(`« Hm? À qui ai-je l'honneur? »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 12:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(`Non, c'est impossible. Braun ne peut pas être- Et qu'est-ce que Moeka fait ici!? `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 13:
            dmail1Scene5DialogueCharacterName.innerHTML = "Moeka"
            characterSpriteScene5L.innerHTML = `<img src="../assets/char/MOE\\std/moe_alb03a.png">`
            writeOn(`« C'est FB. »`, "dmail1Scene5DialogueText.innerHTML", 100, true, "page")
            break;
        case 14:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(` Il y a eu un moment de silence quand soudain, Braun éclata de rire. `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 15:
            ostSuspiciousEyes.pause()
            ostSuspiciousEyes.currentTime = 0
            ostCrossroads.play()
            ostCrossroads.volume = volume
            ostCrossroads.loop = true
            dmail1Scene5DialogueCharacterName.innerHTML = "Tennouji"
            characterSpriteScene5R.innerHTML = `<img src="../assets/char/TEN/ten_bla01a.png">`
            writeOn(`« HAHAHAHAHAHA! C'est pas vrai, ils m'ont démasqué. Peu importe comment vous avez fait, mais c'est fini tôt pour moi... adios. »`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 16:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            characterSpriteScene5R.innerHTML = "none"
            characterSpriteScene5L.innerHTML = "none"
            writeOn(` Braun s'en alla... disparaissant dans le noir d'une rue suspicieuse... laissant échapper son cellulaire...! `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 17:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(` Son cellulaire! Mais oui! C'est ça la solution! Je ramassa son cellulaire et me dépêcha à- `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 18:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(` Oh non! Il faut son mot de passe pour ouvrir son cellulaire! `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            tenPhonePass = Math.floor(Math.random() * (9999 - 1000) + 1000)
            console.log("The password is: " + tenPhonePass)
            break;
        case 19:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            dmail1Scene5DialogueText.innerHTML = `Veuillez deviner le mot de passe (4 chiffres).`
            dmail1Area5Quiz.style.display = "inherit"
            break;
        case 20:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            ostCrossroads.pause()
            ostCrossroads.currentTime = 0
            dmail1Area5Quiz.style.display = "none"
            writeOn(`Ça y est, je l'ai ouvert! Il ne me reste qu'à envoyer un message à Moeka disant de ne pas aller chercher le IBN 5100! `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 21:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(`Je sorti mon cellulaire et appela Kurisu. Cette fois-ci, ça va marcher, j'en suis sûr. `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            cellulaireArea5.style.display = "inherit"
            voiceOnlyScreen5.style.display = "inherit"
            break;
        case 22:
            dmail1Scene5DialogueCharacterName.innerHTML = "Kurisu"
            writeOn(`« Quand tu veux! » `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 23:
            dmail1Scene5DialogueCharacterName.innerHTML = ""
            writeOn(`Aller, dis moi que ça marche... `, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            break;
        case 24:
            sfxTimeLeap.play()
            sfxTimeLeap.volume = volume
            setTimeout(() => {
                gameContainerDmail1Scene5.style.animation = "fadein 3s"
                gameContainerDmail1Scene5.style.backgroundImage = "none"
                gameContainerDmail1Scene5.style.backgroundColor = "black"
            }, 3000)
            setTimeout(() => {
                writeOn(`( Saut à 0.571046Alpha )`, "dmail1Scene5DialogueText.innerHTML", 70, true, "page")
            }, 7000)
            break;
        case 25:
            window.location.replace("../dmail2/index.html")
            break;



    }
}

const dmail1Area5QuizAnswer = document.getElementById("dmail1Area5QuizAnswer")

function dmail1Area5QuizHandler() {
    if (tenPhonePass === Number(dmail1Area5QuizAnswer.value)) {
        page = 20
        currentPage = 20
        area5DisplayPage(20)
    } else {
        let hint = String(tenPhonePass)[0] + String(tenPhonePass)[1]
        dmail1Scene5DialogueText.innerHTML = "Mauvaise réponse... Ressayez dans 5 secondes! Indice: " + hint + "xx"
        dmail1Area5Quiz.style.display = "none"
        setTimeout(() => {
            area5DisplayPage(19)
        }, 5000)

    }
}