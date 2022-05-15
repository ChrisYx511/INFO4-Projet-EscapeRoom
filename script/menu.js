const gameContainerPreStart = document.getElementById("gameContainerPreStart")
const gameContainerInitialMenu = document.getElementById("gameContainerInitialMenu")
const gameContainerOpeningVideo = document.getElementById("gameContainerOpeningVideo")
const initialMenuPressEnter = document.querySelector("#initialMenuPressEnter")
const initialMenuSelections = document.getElementById("initialMenuSelections")
const openingVideo = document.getElementById("openingVideo")

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
    }, false)
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
                
            }, false)
            document.addEventListener("mousedown", () => {
                    openingVideo.pause()
                    openingVideo.currentTime = 0
                    launchGame()                    
            })
            document.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    openingVideo.pause()
                    openingVideo.currentTime = 0
                    launchGame()
                }
            })
        }, 30000)
    }
    
}

function menuSecondStage() {
    console.log("menuSecondStage")
    
    clearTimeout(opPlayTimeout)
    gameProgress = 1
    //Doesn't Work :(
    //document.removeEventListener("keyup", menuEnterKeyPress, false)
    setTimeout (() => {
        initialMenuPressEnter.style.display = "none"
        initialMenuSelections.style.display = "inherit"
    }, 1000)
    
}

function startLevel1 () {
    console.log("This will start level 1 in the future when I get around to it.")
}