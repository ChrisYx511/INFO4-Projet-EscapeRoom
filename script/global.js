// Not implemented
//let selectedRingtone = 2
let selectedTextTone
let volume
let cookieSelectedTextTone
let cookieVolume

cookieSelectedTextTone = getCookie("textTone")
cookieVolume = getCookie("volume")

if (cookieSelectedTextTone !== null) {
    selectedTextTone = Number(cookieSelectedTextTone)
} else {
    selectedTextTone = 3
}
if (cookieVolume !== null) {
    volume = Number(cookieVolume)
} else {
    volume = 0.75
}

let opPlayTimeout

// Utility Variables, can be changed at every stage and should be reset after each stage as needed
/**
 * Overall game progress
 */
let gameProgress = 0
/**
 * The page number in the current area, reset to 0 once complete - Defines wanted page
 */
let page = 0
/**
 * The page number in the current area, reset to 0 once complete - Defines currently visible page
 */
let currentPage = 0

let writeOnListener = new AbortController()
// writeOn()
/**
 * Writes text in dialogue gradually, letter per letter
 * @param {String} string String to write character per character
 * @param {String} outputVariableName Name of the object to write the string to, in String format
 * @param {Number} speed Delay between characters in ms
 * @param {Boolean} replaceOutput Whether the function should replace the output or append
 * @param {String} pageVar Name of the variable in which page numbers are stored
 */
function writeOn(string, outputVariableName, speed, replaceOutput, pageVar) {
    let position = 0
    let lineEnded = false
    if (replaceOutput === true) {
       eval(`${outputVariableName} = string[position]`)
    }
    const typingInterval = setInterval(() => {
        if (position + 1 != string.length) {
            //console.log(string[position])
            position++
            eval(`${outputVariableName} = ${outputVariableName} + string[position]`)
        } else if(position +1 === string.length) {
            clearInterval(typingInterval)
            eval(`${pageVar}++`)
            lineEnded = true
        }
    }, speed)
    document.addEventListener("mousedown", endLine, {once: true, signal: writeOnListener.signal})
    document.addEventListener("keyup", endLine, {once: true, signal: writeOnListener.signal})
    function endLine(e){
        if (lineEnded === false) {
            if (e.button === 0 || e.key === "Enter") {
                clearInterval(typingInterval)
                eval(`${outputVariableName} = string`)
                setTimeout(() => {
                    eval(`${pageVar}++`)
                }, 5)
                console.log(outputVariableName)
                console.log("EventListener endLine still active")
            }
        }
        lineEnded = true
    }
}

let nextPageListener = new AbortController()
// setupArea()
/**
 * Sets up an area of the game, each area being 1 gameContainer/scene and has pages that follow eachother
 * @param {String} pageDisplayVar Name of the function that contains the page indexes and display instructions
 */
function setupArea(pageDisplayVar) {
    page = 0
    currentPage = 0
    
    document.addEventListener ("keyup", nextPage, { signal: nextPageListener.signal })
    document.addEventListener ("mousedown", nextPage, { signal: nextPageListener.signal })
    function nextPage(e) {
        if (page != currentPage) {
            if (e.button === 0 || e.key === "Enter") {
                currentPage = page
                eval(pageDisplayVar + "(currentPage)")
            }
        }
    }
    console.log(pageDisplayVar)

}

/**Cleans up an area created by setupArea() */
function cleanArea() {
    page = 0
    currentPage = 0
    nextPageListener.abort()
    writeOnListener.abort()
    nextPageListener = undefined
    writeOnListener = undefined
    writeOnListener = new AbortController()
    nextPageListener = new AbortController()
}
/** Returns the relative path of ringtone files */
function returnRingtone(index) {
    switch (index) {
        case 0:
            return "assets/sound/ringtones/Beginning of Light.ogg";
        case 1:
            return "assets/sound/ringtones/Easygoingness.ogg";
        case 2:
            return "assets/sound/ringtones/GATE OF STEINER.ogg";
        case 3:
            return "assets/sound/ringtones/Over the sky.ogg"
        case 4:
            return "assets/sound/ringtones/Precaution.ogg"
        case 5:
            return "assets/sound/ringtones/Reunion.ogg"
        case 6:
            return "assets/sound/ringtones/Village.ogg"
    }
}
/**
 * Get cookie value
 * @param {String} cookieName 
 * @returns Value of the cookie or null if it doesn't exist
 */
function getCookie(cookieName) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(cookieName === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

