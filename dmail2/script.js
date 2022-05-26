const gameContainerDmail2Scene1 = document.getElementById("gameContainerDmail2Scene1")
const area1Text = document.querySelector("#gameContainerDmail2Scene1 .dialogue p")
const area1ChacterName = document.querySelector("#gameContainerDmail2Scene1 .characterName")
const area1CharacterSpriteCenter = document.querySelector("#gameContainerDmail2Scene1 .characterSpriteCenter")

function startArea1() {
    setupArea("area1DisplayPage")
    area1DisplayPage(currentPage)
}
function area1DisplayPage(index) {
    switch (index) {
        case 0:
            writeOn(`.... Est-ce que ça a marché??`, )
    }
}