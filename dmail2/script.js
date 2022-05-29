const ostChaosMind = new Audio("../assets/sound/standard/20 - Chaos mind.ogg")
const ostGateOfSteiner = new Audio("../assets/sound/standard/2 - Gate of Steiner - Main Theme.ogg")
const ostHack = new Audio("../assets/sound/standard/13 - Hack.ogg")
const ostExplanation = new Audio("../assets/sound/standard/16 - Explanation.ogg")
const ostBelieveMe = new Audio("../assets/sound/standard/8 - Believe Me.ogg")
const sfxTimeLeap = new Audio("../assets/sound/sfx/timeleap.ogg")
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
            writeOn(`(Continuez pour fermer le message...)`, "area2Text.innerHTML", 10, true, "page")
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
            writeOn(`(Continuez pour fermer le message...)`, "area2Text.innerHTML", 10, true, "page")
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
            Je devrais aller m'assurer que le IBN5100 est au labo, le trouver et déjouer SERN une fois pour toute.`, "area2Text.innerHTML", 20, true, "page")
            break;
        case 11:
            writeOn(`(Objectif: Trouver le IBN5100 dans le labo et débuter le hacking.)`, "area2Text.innerHTML", 20, true, "page")
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
            writeOn(`Le tube de 42 pouces est allumé et Mr. Braun -- FB --  regarde la télé paisiblement avec sa fille. Ça va être correct pour le moment.`, "area3Text.innerHTML", 20, true, "page")
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
const IBN5100BoxLocation = document.getElementById("ibn5100BoxLocation")

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
            writeOn(`« ...? Où est-ce que j'ai mis le IBN5100? »`, "area5Text.innerHTML", 20, true, "page")
            area5CharacterName.innerHTML = "Rintaro"
            break;
        case 2:
            writeOn(`(Sous-objectif 1: Trouver le IBN5100 dans ce désordre. Continuez et utiliser votre souris pour le retrouver.)`, "area5Text.innerHTML", 20, true, "page")
            IBN5100BoxLocation.style.display = "inherit"
            area5CharacterName.innerHTML = ""
            break;
        case 3:
            area5Text.innerHTML = `(Le jeu se poursuit lorsque vous avez trouvé la boîte avec le IBN5100)`
            break;
        case 4:
            gameContainerDmail2Scene5.style.backgroundImage = "url(../assets/bg/cg/dmail2/IBG075.PNG)"
            writeOn(`Finalement, la bataille ardue se tire vers sa fin. Plus jamais nous allons devoir vivre les évènements de ces jours. (IBN5100 trouvé!) `, "area5Text.innerHTML", 20, true, "page")
            ostChaosMind.pause()
            ostChaosMind.currentTime = 0
            ostGateOfSteiner.play()
            ostGateOfSteiner.volume = volume
            ostGateOfSteiner.loop = true
            IBN5100BoxLocation.style.display = "none"
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
        case 8:
            writeOn(`Merde, c'est vrai. Et il ne sera pas de retour avant le soir.`, "area5Text.innerHTML", 20, true, "page")
            area5CharacterName.innerHTML = ""
            break;
        case 9:
            writeOn(`Mais je n'ai pas le temps d'attendre. Donc...`, "area5Text.innerHTML", 20, true, "page")
            break;
        case 10:
            writeOn(`Je pris le casque d'écoute sur la table et fis un nouveau saut dans le temps.`, "area5Text.innerHTML", 20, true, "page")
            break;
        case 11:
            sfxTimeLeap.play()
            sfxTimeLeap.volume = volume
            setTimeout(() => {
                gameContainerDmail2Scene5.style.animation = "fadein 3s"
                gameContainerDmail2Scene5.style.backgroundImage = "none"
                gameContainerDmail2Scene5.style.backgroundColor = "black"
            }, 3000)
            setTimeout(() => {
                writeOn(`(Recul de 2 jours dans le temps, 13 aout...)`, "area5Text.innerHTML", 20, true, "page")
            }, 7000)
            break;
        case 12:
            cleanArea()
            startArea6()
            break;
        
        }
}
const gameContainerDmail2Scene6 = document.getElementById("gameContainerDmail2Scene6")
const area6Text = document.querySelector("#gameContainerDmail2Scene6 .dialogue p")
const area6CharacterName = document.querySelector("#gameContainerDmail2Scene6 .characterName")
const area6CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene6 .characterSpriteCenter")
const area6CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene6 .characterSpriteLeft")
const area6CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene6 .characterSpriteRight")

function startArea6() {
    gameContainerDmail2Scene5.style.display = "none"
    gameContainerDmail2Scene6.style.display = "inherit"
    setupArea("area6DisplayPage")
    area6DisplayPage(currentPage)
}
function area6DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`Le monde reprend ses couleurs lentement autour de moi. Je vois Daru sur son ordi, lisant un autre visual novel. Kurisu dormait sur le sofa, probablement épuisé par son travail sur le Téléph-ondes amélioré toute la nuit, nous donnant le Timeleap machine que j'ai employé tant de fois déjà.`, "area6Text.innerHTML", 20, true, "page")
            ostHack.play()
            ostHack.volume = volume
            ostHack.loop = true
            break;
        case 1:
            writeOn(`Tous les membres du labo sont présents, sauf Mayuri. C'est probablement mieux comme ça.`, "area6Text.innerHTML", 20, true, "page")
            break;
        case 2:
            writeOn(`« Daru! Christina! C'est le temps de passer à la dernière phase de l'opération Verthandi! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = `Rintaro`
            break;
        case 3:
            writeOn(`Kurisu se lève d'un bond, surprise par ma déclaration.`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = ``
            area6CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_bma05a.png">`
            gameContainerDmail2Scene6.style.animation = "shake 500ms"
            break;
        case 4:
            writeOn(`« Le IBN5100, il est finalement là! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = `Rintaro`
            break;
        case 5:
            writeOn(`« Oui, et? Ça fait des semaines que ça traîne dans la salle de développement. C'est toi qui l'a trouvé en plus. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = `Itaru`
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ama03a.png">`
            break;
        case 6: 
            writeOn(`« Exactement, c'est MOI qui l'a trouvé. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = `Rintaro`
            break;
        case 7:
            writeOn(`« Est-ce que je peux dormir en paix?? J'ai travaillé pour une nuit au complet. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Kurisu'
            break;
        case 8:
            writeOn(`« Daru, est-ce que t'a commencé à travailer la fonctionalité du IBN? »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 9:
            writeOn(`« Ben, oui en effet. J'ai réussi à faire ça pendant que je me prépare pour Comima, honnêtement je pense que je suis un génie parfois »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ama01a.png">`
            area6CharacterName.innerHTML = 'Itaru'
            break;
        case 10:
            writeOn(`« Ça c'est mon Super Hacka! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 11:
            writeOn(`« HackER, pas hackA! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Itaru'
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ama03a.png">`
            break;
        case 12:
            writeOn(`« Mais sérieusement pouvez-vous vous la fermer? J'ai mal à la tête... »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Kurisu'
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ama01a.png">`
            break;
        case 13:
            writeOn(`« Écoutez-moi, illustres membres du Laboratoire des Gadgets Futurs. Le combat que nous avons mené depuis des mois s'achèvera finalement. Nous allons avoir réussi à déjouer les emprises de l'organisation qui travaille dans les ténèbres pour tenter de saboter notre ferveur scientifique, SERN. La dystopie qu'ils tentent de créer à l'aide de la technolgie de voyage dans le temps du Téléph-ondes ne se réalisera plus jamais. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 14:
            writeOn(`« À l'aide du IBN5100 et de son code particulier, nous allons pouvoir découvrir les secrets les plus importants de SERN et détruire l'organisation de l'intérieur. À l'aide de ces données, l'ennemi a pu retracer nos activités et nous causer du tort. L'espoir de l'humanité en entier repose sur nous! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 15:
            writeOn(`« Derrière sa façade d'institut de recherche, celui-ci est un villain redoutable, qui sacrifierais des vies innocents sans hésitation pour arriver à leur fins mégalomanes. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 16:
            writeOn(`« Et lorsque on les écrasera, le monde va savoir finalement à qui le destin appartient véritablement! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 17:
            writeOn(`« Aghhh... J'en ai mare de tes délusions. Sérieusement. Tu parles de quoi?? »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Kurisu'
            area6CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_bmb03a.png">`
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ama01a.png">`
            break;
        case 18:
            writeOn(`« Personne ne peut connaître l'abysse des pensées d'Okarin. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Itaru'
            break;
        case 19:
            writeOn(`« Préparez-vous, nous devons commencer. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 20:
            writeOn(`« Commencer QUOI? »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Kurisu'
            break;
        case 21:
            writeOn(`« Mais vous ne m'écoutez pas?? Hacker SERN, bien sûr! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 22:
            writeOn(`« Uhh... non, merci? J'ai pas besoin de me faire arrêter par la police. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_bmb06a.png">`
            area6CharacterName.innerHTML = 'Kurisu'
            break;
        case 23:
            writeOn(`« Mais, vous.... »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 24:
            writeOn(`« Ça fait des jours, des mois, une éternité que j'essaie d'atteindre ce moment. C'est ma chance de finalement m'échaper des lignes de temps alpha, de sauver Mayuri une fois pour toute. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 25:
            writeOn(`« Et, je ne laisserai personne, PERSONNE, pas vous, pas SERN, m'arrêter! »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 26:
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ama03a.png">`
            area6CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_bmc04a.png">`
            writeOn(`« Okabe... »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Kurisu'
            break;
        case 27:
            writeOn(`« Man...qu'est-ce qui t'est arrivé? »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Itaru'
            break;
        case 28:
            writeOn(`« Je vous en supplie...s'il vous plait. »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Rintaro'
            break;
        case 29:
            area6CharacterSpriteRight.innerHTML = `<img src="../assets/char/DARU/std/dar_ala02a.png">"`
            area6CharacterSpriteRight.style.transform = "translateX(148px)"
            writeOn(`« C'est... c'est pas comme si je fais ça pour toi ok? »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Itaru'
            break;
        case 30:
            area6CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_bmb06a.png">`
            writeOn(`« Oh god.... »`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = 'Kurisu'
            break;
        case 31:
            writeOn(`Notre Super Hacka (Éditon Tsundere) est finalement prêt à passer à l'action.`, "area6Text.innerHTML", 20, true, "page")
            area6CharacterName.innerHTML = ''
            break;
        case 32:
            cleanArea()
            startArea7()
            break;
    }
}

const gameContainerDmail2Scene7 = document.getElementById("gameContainerDmail2Scene7")
const area7Text = document.querySelector("#gameContainerDmail2Scene7 .dialogue p")
const area7CharacterName = document.querySelector("#gameContainerDmail2Scene7 .characterName")
const area7CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene7 .characterSpriteCenter")
const area7CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene7 .characterSpriteLeft")
const area7CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene7 .characterSpriteRight")
const area7Quiz1 = document.getElementById("quiz1")
const area7Quiz1Answers = document.getElementById("quiz1Answers")
const area7Quiz2 = document.getElementById("quiz2")
const area7Quiz2Answers = document.getElementById("quiz2Answers")
const area7CellPhone = document.querySelector("#gameContainerDmail2Scene7 .cellPhone")

function startArea7() {
    gameContainerDmail2Scene6.style.display = "none"
    gameContainerDmail2Scene7.style.display = "inherit"
    setupArea("area7DisplayPage")
    area7DisplayPage(currentPage)
}
function area7DisplayPage(index) {
    switch (index) {
        case 0:
            ostHack.pause()
            ostHack.currentTime = 0
            ostExplanation.play()
            ostExplanation.volume = volume
            ostExplanation.loop = true
            writeOn("Pendant que Daru branche l'IBN5100 à son ordi, j'entreprend l'explication que j'ai déjà fait plusieurs fois pour ce que j'espère sera la dernière fois. Comment SERN nous cours après à cause du premier dmail qu'on a envoyé, comment ils vont tuer Mayuri, comment la seule façon de la sauver c'est de s'échaper des lignes du temps alpha parce que ceux-ci l'ont déjà considéré morte.", "area7Text.innerHTML", 20, true, "page")
            break;
        case 1:
            area7CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_blb01a.png">`
            writeOn("« Fascinant. Tout ça est un peu difficile à croire, à vrai dire. »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = "Kurisu"
            break;
        case 2:
            writeOn("« En fait, ton Télph-ondes amélioré fonctionne à merveille. »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = "Rintaro"
            break;
        case 3:
            writeOn("« Vraim- Bien sûr que ça marche parfaitement. »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = "Kurisu"
            area7CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_bla09a.png">`
            break;
        case 4:
            writeOn("« En tout cas, c'est pour ça qu'on doit détruire les données de SERN qui continnent le contenu du premier dmail, pour qu'ils ne se rendent pas compte du Téléph-ondes. »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = "Rintaro"
            break;
        case 5:
            writeOn("« Effacer ces données nous retournera sur les lignes de temps beta, qui devrait règler nos problèmes. »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = "Rintaro"
            break;
        case 6:
            writeOn("« Donc le dmail qui a tout commencé, c'est quoi son contenu exactement? »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = "Kurisu"
            area7CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_blb01a.png">`
            break;
        case 7 :
            writeOn("C'était une excellente question, à laquelle je n'avais pas vraiment pensé. Je me souviens l'AVOIR ENVOYÉ autour de la fin du MOIS PRÉCÉDENT et c'était quelque chose À PROPOS de mon ASSISTANTE ici. Je ressens soudainement une inquiétude.", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = ""
            break;
        case 8:
            writeOn("(Sous-objectif #2 et 3: Déterminer le premier dmail et ses effets. Cliquez sur le téléphone en haut à gauche pour lire les messages.)", "area7Text.innerHTML", 20, true, "page")
            break;
        case 9:
            area7Text.innerHTML = "Quel message décrit le contenu du premier dmail? (Le jeu se poursuit lorsqu'une réponse est donnée.)"
            area7Quiz1.style.display = "inherit"
            break;
        case 10:
            writeOn("« Ben, c'était quand je t'ai trouvé morte à Radi-Kan il y a genre 2 semaines, au conf...ér... ...! »", "area7Text.innerHTML", 20, true, "page")
            area7CellPhone.style.display = "none"
            phoneOpen = false
            area7Quiz1.style.display = "none"
            break;
        case 11:
            writeOn("Je sens que je viens de réaliser quelque chose... Si le premier dmail envoyé était à propos de la mort de...", "area7Text.innerHTML", 20, true, "page")
            break;
        case 12:
            area7Text.innerHTML = "Quel est la conséquence si je supprimais les effets de ce premier dmail, selon les lois de la causalité? (Le jeu se poursuit lorsqu'une réponse est donnée.)"
            area7Quiz2.style.display = "inherit"
            break;
        case 13:
            area7Text.innerHTML = ''
            area7Quiz2.style.display = "none"
            ostExplanation.pause()
            ostExplanation.currentTime = 0
            gameContainerDmail2Scene7.style.backgroundImage = 'url(../assets/bg/cg/general/EV_C02A.PNG)'
            area7CharacterSpriteLeft.innerHTML = ""
            setTimeout(() => {
                gameContainerDmail2Scene7.style.backgroundImage = "url(../assets/bg/labo/BG02A1.PNG)"
                writeOn("....!", "area7Text.innerHTML", 20, true, "page")
                area7CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_blb01a.png">`
            },1000)
            break;
        case 14:
            writeOn("Je me souviens. J'avais oublié. J'aurais réussi.", "area7Text.innerHTML", 20, true, "page")
            break;
        case 15:
            writeOn("Je regardai Kurisu.", "area7Text.innerHTML", 20, true, "page")
            break;
        case 16:
            writeOn("« Quoi? »", "area7Text.innerHTML", 20, true, "page")
            area7CharacterSpriteLeft.innerHTML = `<img src="../assets/char/CRS/labcoat/crs_blc05a.png">`
            area7CharacterName.innerHTML = 'Kurisu'
            break;
        case 17:
            writeOn("Je n'avais pas réalisé. Pas réalisé. Oublié. Oublié. Celui qui m'a aidé tout le long dans cette longue mission. J'ai...", "area7Text.innerHTML", 20, true, "page")
            area7CharacterName.innerHTML = ''
            break;
        case 18:
            gameContainerDmail2Scene7.style.backgroundImage = "none"
            setTimeout(() => {
                writeOn("Est-ce que j'ai vraiment le droit?", "area7Text.innerHTML", 40, true, "page")
            }, 1500)
            break;
        case 19:
            cleanArea()
            startArea8()
            break;

        
    }
}
let phoneOpen = false
function area7TogglePhone() {
    if (phoneOpen === false) {
        area7CellPhone.style.display = "inherit"
        phoneOpen = true
    } else if (phoneOpen === true) {
        area7CellPhone.style.display = "none"
        phoneOpen = false
    }
}

function area7ValidateAnswers1() {
    if (area7Quiz1Answers.value === "5") {
        page++
        currentPage++
        area7DisplayPage(10)
    } else {
        area7Quiz1.style.display = "none"
        area7Text.innerHTML = "Mauvaise réponse, ressayez dans 3 secondes!"
        setTimeout(() => {
            area7DisplayPage(9)
        }, 3000)
    }
}

function area7ValidateAnswers2() {
    if (area7Quiz2Answers.value === "2") {
        page++
        currentPage++
        area7DisplayPage(13)
    } else {
        area7Quiz2.style.display = "none"
        area7Text.innerHTML = "Mauvaise réponse, ressayez dans 3 secondes!"
        setTimeout(() => {
            area7DisplayPage(12)
        }, 3000)
    }
}

const gameContainerDmail2Scene8 = document.getElementById("gameContainerDmail2Scene8")
const area8Text = document.querySelector("#gameContainerDmail2Scene8 .dialogue p")
const area8CharacterName = document.querySelector("#gameContainerDmail2Scene8 .characterName")
const area8CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene8 .characterSpriteCenter")
const area8CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene8 .characterSpriteLeft")
const area8CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene8 .characterSpriteRight")

function startArea8() {
    gameContainerDmail2Scene7.style.display = "none"
    gameContainerDmail2Scene8.style.display = "inherit"
    setupArea("area8DisplayPage")
    area8DisplayPage(currentPage)
}
function area8DisplayPage(index) {
    switch (index) {
        case 0:
            ostBelieveMe.play()
            ostBelieveMe.loop = true
            ostBelieveMe.volume = volume
            writeOn(`Deux jours se sont écoulés après la réalisation. J'ai mis l'opération sur pause. Je ne sait plus quoi faire. Je suis si près du but, et si loin en même temps.`, "area8Text.innerHTML", 20, true, "page")
            break;
        case 1:
            gameContainerDmail2Scene8.style.backgroundImage = "url(../assets/bg/cg/general/EV_M05A.PNG)"
            writeOn(`D'un bord...`, "area8Text.innerHTML", 50, true, "page")
            break;
        case 2:
            gameContainerDmail2Scene8.style.backgroundImage = "url(../assets/bg/cg/general/EV_C02A.PNG)"
            writeOn(`Et de l'autre...`, "area8Text.innerHTML", 50, true, "page")
            break;
        case 3:
            gameContainerDmail2Scene8.style.backgroundImage = "url(../assets/bg/radikan/BG11A3.PNG)"
            writeOn(`Il n'y avais pas d'issue, pas de sortie, pas de solution.`, "area8Text.innerHTML", 50, true, "page")
            break;    
        case 4:
            gameContainerDmail2Scene8.style.backgroundImage = "url(../assets/bg/cg/dmail2/EV_C08A.PNG)"
            writeOn(`J'avais expliqué ça à Kurisu et elle m'a dit de faire ce que j'ai à faire, ce que je sais qui est la meilleure décision pour ce monde. Mais, je savais que c'était seulement sa raison qui parlait, non sa personne.`, "area8Text.innerHTML", 50, true, "page")
            break;    
        case 5:
            gameContainerDmail2Scene8.style.backgroundImage = "url(../assets/bg/cg/dmail2/EV_M02A.PNG)"
            writeOn(`Tout ce que je voulais, c'est... c'est... c'était des amis. Et maintenant...`, "area8Text.innerHTML", 50, true, "page")
            break;
        case 6:
            gameContainerDmail2Scene8.style.backgroundImage = "url(../assets/bg/radikan/BG11A3.PNG)"
            writeOn(`Si je change le monde, Kurisu meurt. Si j'essaie de la sauver, ça ne fonctionnera pas. Si je laisse le monde tel quel, Mayuri meurt et dans 15 ans, le monde sera une dystopie gérée par SERN. Tous les sacrifices qui ont été faits jusqu'à date, avant et maintenant, seront pour rien. Mais, je ne peux pas... je ne veux pas prendre cette décision.`, "area8Text.innerHTML", 50, true, "page")
            break;
        case 7:
            writeOn(`Je ne suis pas dieu. Je ne peux pas. Mais, apparement, je dois faire ce que je dois faire...`, "area8Text.innerHTML", 50, true, "page")
            break;
        case 8:
            gameContainerDmail2Scene8.style.backgroundImage = "none"
            writeOn(`À suivre...`, "area8Text.innerHTML", 150, true, "page")
            break;
        case 9:
            ostBelieveMe.pause()
            ostBelieveMe.currentTime = 0
            cleanArea()
            startCreditsVideo()
            break;
    }       
}
const gameContainerEndingVideo = document.getElementById("gameContainerEndingVideo")
const endingVideo = document.getElementById("endingVideo")
function startCreditsVideo() {
    gameContainerDmail2Scene8.style.display = "none"
    gameContainerEndingVideo.style.display = "inherit"
    endingVideo.play()
    endingVideo.volume = volume
    endingVideo.addEventListener("ended", () => {
        setTimeout(() => {
            window.location.replace("../index.html")
        }, 2000)
    }, { once: true }) 
}