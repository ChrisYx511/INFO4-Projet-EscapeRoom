const gameContainerDmail2Scene1 = document.getElementById("gameContainerDmail2Scene1")
const area1Text = document.querySelector("#gameContainerDmail2Scene1 .dialogue p")
const area1ChacterName = document.querySelector("#gameContainerDmail2Scene1 .characterName")
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
            writeOn(`« Okarin!!! »`, "area1Text.innerHTML", 10, true, "page") 
            area1ChacterName.innerHTML = "Mayuri"
            break;
        case 2:
            writeOn(`« Quoi maintenant...? »`, "area1Text.innerHTML", 10, true, "page")
            area1ChacterName.innerHTML = "Kurisu"
            break;
        case 3:
            cleanArea()
            startArea2()
        }

}
const gameContainerDmail2Scene2 = document.getElementById("gameContainerDmail2Scene2")
const area2Text = document.querySelector("#gameContainerDmail2Scene2 .dialogue p")
const area2ChacterName = document.querySelector("#gameContainerDmail2Scene2 .characterName")
const area2CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene2 .characterSpriteCenter")
const area2CharacterSpriteLeft = document.querySelector("#gameContainerDmail2Scene2 .characterSpriteLeft")
const area2CharacterSpriteRight = document.querySelector("#gameContainerDmail2Scene2 .characterSpriteRight")
function startArea2() {
    gameContainerDmail2Scene1.style.display = "none"
    gameContainerDmail2Scene2.style.display = "inherit"
    setupArea("area2DisplayPage")
    area2DisplayPage(currentPage)
}
function area2DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`Le monde autour de moi cessa lentement de tourner. J'arrivais à comprendre ce que les autre labmem me disaient.`, "area2Text.innerHTML", 10, true, "page")
            break;
        }
}