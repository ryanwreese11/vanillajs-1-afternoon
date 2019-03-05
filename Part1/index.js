console.log("hello")
let playField = [];
let tracker = [];


function play(value){
    const player = document.getElementById('player');
    const element = document.getElementById(value);
    if(!tracker.includes(document.getElementById(value))) {
        tracker.push(document.getElementById(value))
    } else return
    document.getElementById('player');
    if(player.innerText === 'X'){
        player.innerText = 'O'
        element.innerText = 'X'
        playField[value] = 'X'
    } else { player.innerText === 'O'
        player.innerText = 'X'
        element.innerText = 'O'
        playField[value] = 'O'
    }
    
    let sq1 = playField[0];
    let sq2 = playField[1];
    let sq3 = playField[2];
    let sq4 = playField[3];
    let sq5 = playField[4];
    let sq6 = playField[5];
    let sq7 = playField[6];
    let sq8 = playField[7];
    let sq9 = playField[8];
    
    if(sq1 !== undefined && sq1 === sq2 && sq1 === sq3 ){
        window.confirm(`${sq1} is the winner`);
        return
    } else if(sq4 !== undefined && sq4 === sq5 && sq4 === sq6){
        alert(`${sq4} is the winner`);
        return
    } else if(sq7 !== undefined && sq7 === sq8 && sq7 === sq9){
        alert(`${sq7} is the winner`);
        return
    } else if(sq1 !== undefined && sq1 === sq5 && sq1 === sq9){
        alert(`${sq1} is the winner`);
        return
    } else if(sq3 !== undefined && sq3 === sq5 && sq3 === sq7){
        alert(`${sq3} is the winner`);
        return
    } else if(sq1 !== undefined && sq1 === sq4 && sq1 === sq7){
        alert(`${sq1} is the winner`);
        return
    } else if(sq2 !== undefined && sq2 === sq5 && sq2 === sq8){
        alert(`${sq2} is the winner`);
        return
    } else if(sq3 !== undefined && sq3 === sq6 && sq3 === sq9){
        alert(`${sq3} is the winner`);
        return
    }
    let catsDogs = true
for(let i = 0; i <= 8; i++){
    if(playField[i] === undefined){
        catsDogs = false
    }
}if(catsDogs === true){
    window.alert('no winner haha you losers')
}
}


    

