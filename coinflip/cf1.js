
let flip;
let tailsOrHeads =  ["tails", "heads"];


function flipCoinTenTimes() {
    
    let flip = prompt("Enter how many flips");
    
    let heads;
    let tails;
    
    let totalFlips = 0;

    for(let i =0; i<flip; i++)
    {
        var randomFlip = Math.floor(Math.random()*tailsOrHeads.length);
        var randomElement = tailsOrHeads[randomFlip];
        console.log("Coinflip nr:" + i + " : " + randomElement);
        
        totalFlips++;


    }
    console.log("TOTAL NUMBER OF FLIPS: " + totalFlips);
}

flipCoinTenTimes();