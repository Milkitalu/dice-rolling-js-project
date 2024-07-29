// DICE ROLLER PROGRAM

function rollDice() {
    const numofDice = document.getElementById("numofDice").value;
    const dicResult =document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src = "dice-pic/${value}.png">`);
    
    }

    dicResult.textContent = `dice:${values.join(',')}`;
    diceImages.innerHTML = images.join(' ');

}