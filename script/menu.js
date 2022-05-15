const gameContainerPreStart = document.getElementById("gameContainerPreStart")
const gameContainerInitialMenu = document.getElementById("gameContainerInitialMenu")
const gameContainerOpeningVideo = document.getElementById("gameContainerOpeningVideo")
const initialMenuPressEnter = document.querySelector("#initialMenuPressEnter")
const initialMenuPressEnterImg = document.querySelector("#initialMenuPressEnter img")
const initialMenuSelections = document.getElementById("initialMenuSelections")
const openingVideo = document.getElementById("openingVideo")
const gameContainerStartExplaination = document.getElementById("gameContainerStartExplaination")
const startExplainationDialogueParagraph = document.querySelector("#startExplainationDialogue p")


function launchGame() {
    gameContainerPreStart.style.display = "none"
    gameContainerInitialMenu.style.display ="inherit"
    gameContainerOpeningVideo.style.display = "none"
    menuMusic.play()
    menuMusic.volume = 0.75
    menuMusic.loop = true
    document.addEventListener("keyup", function menuEnterKeyPress(event) {
        if (event.key === "Enter") {
            console.log("Enter detected!")
            menuSecondStage()
        }
    }, {once: true})
    if (gameProgress === 0) {
        opPlayTimeout = setTimeout (() => {
            gameContainerInitialMenu.style.display ="none"
            gameContainerOpeningVideo.style.display = "inherit"
            menuMusic.pause()
            menuMusic.currentTime = 0
            openingVideo.play()
            openingVideo.volume = 0.75

            openingVideo.addEventListener('ended', () => {
                launchGame()
                
            }, {once: true})
            document.addEventListener("mousedown", () => {
                    openingVideo.pause()
                    openingVideo.currentTime = 0
                    launchGame()                    
            }, {once: true})
            document.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    openingVideo.pause()
                    openingVideo.currentTime = 0
                    launchGame()
                }
            }, {once: true})
        }, 30000)
    }
    
}

function menuSecondStage() {
    console.log("menuSecondStage")
    
    clearTimeout(opPlayTimeout)
    gameProgress = 1
    initialMenuPressEnterImg.style.animationDuration = "350ms"
    setTimeout (() => {
        initialMenuPressEnter.style.display = "none"
        initialMenuSelections.style.display = "inherit"
    }, 1000)
    
}
// Prologue
function startLevel1 () {
    console.log("This will start level 1 in the future when I get around to it.")
    gameContainerInitialMenu.style.display = "none"
    gameContainerStartExplaination.style.display = "inherit"
    menuMusic.pause()
    menuMusic.currentTime = 0
    // Basic template for how a sequence can work
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
            writeOn(`À la place de s'évader d'un endroit physique, ce jeu à pour but de tester vos habiletés de voyageurs dans le temps. Vous devez réussir à aider le personnage principal, Rintaro Okabe, à retrouver la ligne du temps <i>Steins Gate</i>.`, "startExplainationDialogueParagraph", 10, true, "page")
            break;
    }
}
