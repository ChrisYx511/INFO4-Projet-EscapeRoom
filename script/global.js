const menuMusic = new Audio("assets/sound/menu/bgm.ogg")



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

const writeOnListener = new AbortController()
// writeOn()
/**
 * Writes text in dialogue character by character
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

const nextPageListener = new AbortController()
// setupArea()
/**
 * Sets up an area of the game
 * @param {String} pageDisplayVar Name of the function that contains the page indexes and display instructions
 * @param {Boolean} cleanup Whether this is used to initialize or clean up a segment of the game. - True = cleanup
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

function cleanArea() {
    nextPageListener.abort()
    writeOnListener.abort()
}