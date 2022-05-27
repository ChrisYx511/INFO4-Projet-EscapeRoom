const ostChaosMind = new Audio("../assets/sound/standard/20 - Chaos mind.ogg")
const ostGateOfSteiner = new Audio("../assets/sound/standard/2 - Gate of Steiner - Main Theme.ogg")
let textTone = new Audio("../" + returnRingtone(selectedTextTone))

const gameContainerDmail2Scene1 = document.getElementById("gameContainerDmail2Scene1")
const area1Text = document.querySelector("#gameContainerDmail2Scene1 .dialogue p")
const area1CharacterName = document.querySelector("#gameContainerDmail2Scene1 .characterName")
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
            ostChaosMind.volume = volume
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
const area2CharacterName = document.querySelector("#gameContainerDmail2Scene2 .characterName")
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
            writeOn(`(Continuez pour lire le message...)`, "area2Text.innerHTML", 10, true, "page")
            break;
        case 4:
            area2CellPhone.style.display = "inherit"
            area2Msg1.style.display = "inherit"
            textTone.pause()
            textTone.currentTime = 0
            setTimeout(() => {
                writeOn(`(Continuez pour fermer le message...)`, "area2Text.innerHTML", 10, true, "page")
            }, 1000)
            break;
        case 5:
            area2CellPhone.style.display = "none"
            area2Msg1.style.display = "none"
            area2CharacterName.innerHTML = "Rintaro"
            writeOn(`« Ton patron? Tu veux dire FB? »`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 6:
            area2CharacterSpriteCenter.innerHTML = `<img src="../assets/char/MOE/std/moe_ala05a.png" alt="">`
            area2CharacterName.innerHTML = "Moeka"
            writeOn(`« ...! »`, "area2Text.innerHTML", 30, true, "page")
            break;
        case 7:
            textTone.play()
            area2CharacterName.innerHTML = ""
            writeOn(`(Continuez pour lire le message...)`, "area2Text.innerHTML", 10, true, "page")
            break;
        case 8:
            area2CellPhone.style.display = "inherit"
            area2Msg2.style.display = "inherit"
            textTone.pause()
            textTone.currentTime = 0
            setTimeout(() => {
                writeOn(`(Continuez pour fermer le message...)`, "area2Text.innerHTML", 10, true, "page")
            }, 1000)
            break;
        case 9:
            area2CellPhone.style.display = "none"
            area2Msg2.style.display = "none"
            writeOn(`
            Donc FB est encore en vie. C'est bon à savoir, mais je
            dois me rappeler qu'ils sont les ennemis. De plus, je ne
            pense pas que ça a sauvé leurs vies, même sur cette ligne
            du temps.
            `, "area2Text.innerHTML", 20, true, "page")
            break;
        case 10:
            area2CharacterSpriteCenter.innerHTML = ""
            writeOn(`En tout cas, comme le dernier, cette ligne du temps s'effacera bientôt lui aussi. 
            Je devrais aller m'assurer que le IBM5100 est au labo, le trouver et déjouer SERN une fois pour toute.`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 11:
            writeOn(`(Objectif: Trouver le IBM5100 dans le labo et débuter le hacking.)`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 12:
            cleanArea()
            startArea3()
    }
}
const gameContainerDmail2Scene3 = document.getElementById("gameContainerDmail2Scene3")
const area3Text = document.querySelector("#gameContainerDmail2Scene3 .dialogue p")
const area3CharacterName = document.querySelector("#gameContainerDmail2Scene3 .characterName")
const area3CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene3 .characterSpriteLeft")
const area3CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene3 .characterSpriteRight")

function startArea3() {
    gameContainerDmail2Scene2.style.display = "none"
    gameContainerDmail2Scene3.style.display = "inherit"
    setupArea("area3DisplayPage")
    area3DisplayPage(currentPage)
}
function area3DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`Sur le chemin, je suis passé devant le Braun Tube Workshop, dans lequel j'ai jeté un coup d'oeil.`, "area3Text.innerHTML", 20, true, "page")
            break;
        case 1:
            gameContainerDmail2Scene3.style.backgroundImage = "url(../assets/bg/brauntubeworkshop/BG04A2.PNG)"
            area3CharacterSpriteLeft.innerHTML = `<img src="../assets/char/NAE/nae_ama02a.png">`
            area3CharacterSpriteRight.innerHTML = `<img src="../assets/char/TEN/ten_bma01a.png">`
            writeOn(`Le tube de 42 pouces est allumé et Mr. Braun regarde la télé paisiblement avec sa fille. Ça va être correct pour le moment.`, "area3Text.innerHTML", 20, true, "page")
            break;
        case 2:
            writeOn(`Je monte les escaliers vers le labo...`, "area3Text.innerHTML", 20, true, "page")
            break;
        case 3:
            cleanArea()
            startArea4()
            break;
    }
}
const gameContainerDmail2Scene4 = document.getElementById("gameContainerDmail2Scene4")
const area4CharacterName = document.querySelector("#gameContainerDmail2Scene4 .characterName")
const area4CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene4 .characterSpriteCenter")
const area4CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene4 .characterSpriteLeft")
const area4CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene4 .characterSpriteRight")
const area4Text = document.querySelector("#gameContainerDmail2Scene4 .dialogue p")

function startArea4() {
    gameContainerDmail2Scene3.style.display = "none"
    gameContainerDmail2Scene4.style.display = "inherit"
    setupArea("area4DisplayPage")
    area4DisplayPage(currentPage)
}
function area4DisplayPage(index) {
    switch (index) {
        case 0:
            area4CharacterSpriteCenter.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_blb01a.png">`
            writeOn(`J'arrive au labo. Seulement Kurisu est présent en ce moment.`, "area4Text.innerHTML", 20, true, "page")
            break;
        case 1:
            area4CharacterName.innerHTML = `Rintaro`
            writeOn(`« Par hazard, est-ce que t'as déjà visité l'appartement de Moeka? »`, "area4Text.innerHTML", 20, true, "page")
            break;
        case 2:
            area4CharacterSpriteCenter.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_blc06a.png">`
            area4CharacterName.innerHTML = `Kurisu`
            writeOn(`« Non, pourquoi? »`, "area4Text.innerHTML", 20, true, "page")
            break;
        case 3:
            writeOn(`« Laisse faire, c'est rien. »`, "area4Text.innerHTML", 20, true, "page")
            area4CharacterName.innerHTML = `Rintaro`
            break;
        case 4:
            cleanArea()
            startArea5()
            break;

    }
}
const gameContainerDmail2Scene5 = document.getElementById("gameContainerDmail2Scene5")
const area5Text = document.querySelector("#gameContainerDmail2Scene5 .dialogue p")
const area5CharacterName = document.querySelector("#gameContainerDmail2Scene5 .characterName")
const area5CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene5 .characterSpriteCenter")
const area5CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene5 .characterSpriteLeft")
const area5CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene5 .characterSpriteRight")
const ibm5100BoxLocation = document.getElementById("ibm5100BoxLocation")

function startArea5() {
    gameContainerDmail2Scene4.style.display = "none"
    gameContainerDmail2Scene5.style.display = "inherit"
    setupArea("area5DisplayPage")
    area5DisplayPage(currentPage)
}
function area5DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`Je traverse le labo pour directement me rendre dans la salle de développemnt, où réside le Téléph-ondes (Nom à réévaluer), notre machine sacré de voyage dans le temps.`, "area5Text.innerHTML", 20, true, "page")
            break;
        case 1:
            writeOn(`« ...? Où est-ce que j'ai mis le IBM5100? »`, "area5Text.innerHTML", 20, true, "page")
            area5CharacterName.innerHTML = "Rintaro"
            break;
        case 2:
            writeOn(`(Sous-objectif 1: Trouver le IBM5100 dans ce désordre. Continuez et utiliser votre souris pour le retrouver.)`, "area5Text.innerHTML", 20, true, "page")
            ibm5100BoxLocation.style.display = "inherit"
            area5CharacterName.innerHTML = ""
            break;
        case 3:
            area5Text.innerHTML = `(Le jeu se poursuit lorsque vous avez trouvé la boîte avec le IBM5100)`
            break;
        case 4:
            gameContainerDmail2Scene5.style.backgroundImage = "url(../assets/bg/cg/dmail2/IBG075.PNG)"
            writeOn(`Finalement, la bataille ardue se tire vers sa fin. Plus jamais nous allons devoir vivre les évènements de ces jours. (IBM5100 trouvé!) `, "area5Text.innerHTML", 20, true, "page")
            ostChaosMind.pause()
            ostChaosMind.currentTime = 0
            ostGateOfSteiner.play()
            ostGateOfSteiner.volume = volume
            ostGateOfSteiner.loop = true
            ibm5100BoxLocation.style.display = "none"
            break;
        case 5:
            gameContainerDmail2Scene5.style.backgroundImage = "url(../assets/bg/labo/BG03A4.PNG)"
            writeOn(`« Daru!? Où est mon super hacka? Daru? »`, "area5Text.innerHTML", 20, true, "page")
            area5CharacterName.innerHTML = `Rintaro`
            break;
        case 6:
            area5CharacterName.innerHTML = `Kurisu`
            writeOn(`« Uhhh... Il n'est pas là. »`, "area5Text.innerHTML", 20, true, "page")
            ostGateOfSteiner.pause()
            ostGateOfSteiner.currentTime = 0
            break;
        case 7: 
            writeOn(`« Il est allé a Comima, tu te souviens pas? »`, "area5Text.innerHTML", 20, true, "page")
            break;
    }
}