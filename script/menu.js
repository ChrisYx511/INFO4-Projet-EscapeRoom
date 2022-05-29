const gameContainerPreStart = document.getElementById("gameContainerPreStart")
const gameContainerInitialMenu = document.getElementById("gameContainerInitialMenu")
const gameContainerOpeningVideo = document.getElementById("gameContainerOpeningVideo")
const gameContainerStartExplaination = document.getElementById("gameContainerStartExplaination")
const gameContainerVideoPrologue = document.getElementById("gameContainerVideoPrologue")

const initialMenuPressEnter = document.querySelector("#initialMenuPressEnter")
const initialMenuPressEnterImg = document.querySelector("#initialMenuPressEnter img")
const initialMenuSelections = document.getElementById("initialMenuSelections")
const openingVideo = document.getElementById("openingVideo")
const startExplainationDialogueParagraph = document.querySelector("#startExplainationDialogue p")
const prologueVideo = document.getElementById("prologueVideo")

const menuListeners = new AbortController()
// Lorsque le jeu est laissé sur le menu pour 30sec, intro joue
function launchGame() {
    gameContainerPreStart.style.display = "none"
    gameContainerInitialMenu.style.display ="inherit"
    gameContainerOpeningVideo.style.display = "none"
    menuMusic.play()
    menuMusic.volume = volume
    menuMusic.loop = true
    document.addEventListener("keyup", function menuEnterKeyPress(event) {
        if (event.key === "Enter") {
            console.log("Enter detected!")
            menuSecondStage()
        }
    }, {once: true, signal: menuListeners.signal})
    if (gameProgress === 0) {
        opPlayTimeout = setTimeout (() => {
            if (gameProgress === 0) {
            gameContainerInitialMenu.style.display ="none"
            gameContainerOpeningVideo.style.display = "inherit"
            menuMusic.pause()
            menuMusic.currentTime = 0
            openingVideo.play()
            openingVideo.volume = volume

            openingVideo.addEventListener('ended', () => {
                launchGame()
                
            }, {once: true, signal: menuListeners.signal})
            document.addEventListener("mousedown", () => {
                    openingVideo.pause()
                    openingVideo.currentTime = 0
                    launchGame()                    
            }, {once: true, signal: menuListeners.signal})
            document.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    openingVideo.pause()
                    openingVideo.currentTime = 0
                    launchGame()
                }
            }, {once: true, signal: menuListeners.signal})
        }
        }, 30000)
    }
    
}

function menuSecondStage() {
    console.log("menuSecondStage")
    menuListeners.abort()
    clearTimeout(opPlayTimeout)
    gameProgress = 1
    initialMenuPressEnterImg.style.animationDuration = "350ms"
    setTimeout (() => {
        initialMenuPressEnter.style.display = "none"
        initialMenuSelections.style.display = "inherit"
    }, 1000)
    
}
// Prologue
function startPrologue () {
    console.log("This will start level 1 in the future when I get around to it.")
    gameContainerInitialMenu.style.display = "none"
    gameContainerStartExplaination.style.display = "inherit"
    menuMusic.pause()
    menuMusic.currentTime = 0
    // Basic template for how a sequence can work
    gameProgress++
    setupArea("prologue1DisplayPage")
    prologue1DisplayPage(currentPage)

}
function prologue1DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`Notes d'experimentation sur FG133 Édition révisée version 3.33: Ceci est une tentative de recréer le jeu «Steins;Gate» en intégrant des éléments «escape room» à celui-ci.`, "startExplainationDialogueParagraph.innerHTML", 20, true, "page")
            break;
        case 1: 
            writeOn(`Ce jeu sera situé au milieu de l'histoire, donc c'est normal que certains indices contextuelles ne vous seront pas compréhensibles. Plusieurs éléments ont été modifiés pour les adapter à la situation.`, "startExplainationDialogueParagraph.innerHTML", 10, true, "page")
            break;
        case 2:
            writeOn(`À la place de s'évader d'un endroit physique, ce jeu à pour but de tester vos habiletés de voyageurs dans le temps. Vous devez réussir à aider le personnage principal, Rintaro Okabe, à retrouver la ligne du temps «Steins Gate», ayant une valeur de divergence relative à alpha de 1.048596.`, "startExplainationDialogueParagraph.innerHTML", 10, true, "page")
            break;
        case 3:
            writeOn(`Le premier niveau consistera à trouver une combinaison spécifique à envoyer par courriel dans le passer (ce qu'on appelle un dmail, abréviation de DeLorean Mail) pendant que le deuxième consistera à retrouver un IBM5100 et l'utiliser pour finalement s'échaper de la ligne du temps alpha.`, "startExplainationDialogueParagraph.innerHTML", 10, true, "page")
            break;
        case 4:
            writeOn(`L'histoire jusqu'à date: Okabe a réussi à défaire tous les messages envoyé dans le passé par ses amis à date pour déjouer SERN (Société Européenne de Recherche Nucléaire) et ses agents, les Rounders. Ce n'était pas sans sacrifices, mais malgré tout, il a réussi. Maintenant, les deux derniers posent une plus grande difficulté: Le contenu du premier et les détails pour renverser le deuxième sont inconnus.`, "startExplainationDialogueParagraph.innerHTML", 10, true, "page")
            break;
        case 5:
            writeOn(`Des informations plus amples sont disponibles dans la section «Help» du menu principal. Bonne chance! El psy kongroo.`, "startExplainationDialogueParagraph.innerHTML", 10, true, "page")
            break;
        case 6:
            //Séquence terminée
            cleanArea()
            playPrologueVideo()
            console.log("Sequence successful")
            break;
    }
}

function playPrologueVideo() {
    gameContainerStartExplaination.style.display = "none"
    gameContainerVideoPrologue.style.display = "inherit"
    gameProgress++
    prologueVideo.play()
    prologueVideo.volume = volume
    prologueVideo.addEventListener("ended", () => {
        document.removeEventListener("keyup", skipIntro, {once: true})
        document.removeEventListener("mousedown", skipIntro, {once: true})
        startLevel1()

    }, {once: true})
    document.addEventListener("keyup", skipIntro, {once: true})
    document.addEventListener("mousedown", skipIntro, {once: true})
    function skipIntro(e) {
        if (e.button === 0 || e.key === "Enter") {
            startLevel1()
        }
    }
}

function startLevel1() {
    gameProgress++
    window.location.replace("./dmail1/index.html") 
}