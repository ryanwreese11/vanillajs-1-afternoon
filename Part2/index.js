console.log('hello world')

let id = document.getElementById('cardInput')
let color = document.getElementById('cardColor')


function createCard() {
    let card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value;
}