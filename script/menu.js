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
    //typeOn(startExplainationDialogueParagraph, `Notes d'experimentation sur FG133 Édition révisée version 3.33: Ceci est une tentative de recréer le jeu «Steins;Gate» en intégrant des éléments «escape room» à celui-ci.`, 100)
}

