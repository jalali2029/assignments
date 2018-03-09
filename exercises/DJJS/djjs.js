var rectangle = document.getElementById('rectangle')
rectangle.addEventListener('mouseover', changecolor)

function changecolor() {
    rectangle.style.backgroundColor = "blue"

}

rectangle.addEventListener('click', changecoloragain)

function changecoloragain() {
    rectangle.style.backgroundColor = "red"
}

rectangle.addEventListener('mouseout', yellowcolor)

function yellowcolor() {
    rectangle.style.backgroundColor = "yellow"
}
rectangle.addEventListener('dblclick', greencolor)

function greencolor() {
    rectangle.style.backgroundColor = "green"
}
window.addEventListener('mousewheel', orange)

function orange() {
    rectangle.style.backgroundColor = "orange"
}
window.addEventListener('keypress', pressB)

function pressB(event) {
    if (event.which === 98) {
        rectangle.style.backgroundColor = "Blue"
    }
}
window.addEventListener('keypress', pressG)

function pressG(event) {
    if (event.which === 103) {
        rectangle.style.backgroundColor = "Green"
    }
}
window.addEventListener('keypress', pressY)

function pressY(event) {
    if (event.which === 121) {
        rectangle.style.backgroundColor = "Yellow"
    }
}
window.addEventListener('keypress', pressR)

function pressR(event) {
    if (event.which === 114) {
        rectangle.style.backgroundColor = "Red"
    }
}
window.addEventListener('keypress', presso)

function presso(event) {
    if (event.which === 111) {
        rectangle.style.backgroundColor = "Orange"
    }
}