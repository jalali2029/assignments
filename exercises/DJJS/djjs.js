var rectangle = document.getElementById('rectangle')
rectangle.addEventListener('mouseover', changecolor)

function changecolor (){
    rectangle.style.backgroundColor="blue"

}

rectangle.addEventListener('click', changecoloragain)

function changecoloragain(){
    rectangle.style.backgroundColor="red"
}

rectangle.addEventListener('mouseout', yellowcolor)
function yellowcolor(){
    rectangle.style.backgroundColor="yellow"
}
rectangle.addEventListener('dblclick', greencolor)
function greencolor(){
    rectangle.style.backgroundColor="green"
}
rectangle.addEventListener('mousewheel', orange)
function orange(){
    rectangle.style.backgroundColor="orange"
}
rectangle.addEventListener('keypress', pressB)
function pressB(event){
    if (event.which == 66 || event.keyCode == 66){
        rectangle.style.backgroundColor="Blue"
    }
}