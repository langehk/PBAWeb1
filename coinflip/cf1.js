
let flip;
let tailsOrHeads =  ["tails", "heads"];


function flipCoinTenTimes() {
    
    let flip = prompt("Enter how many flips");
    
    let totalFlips = 0;

    for(let i =0; i<flip; i++)
    {
        var randomFlip = Math.floor(Math.random()*tailsOrHeads.length);
        var randomElement = tailsOrHeads[randomFlip];
        console.log("Coinflip nr:" + i + " : " + randomElement);
        document.write("Coinflip nr:" + i + " : " + randomElement + "<br>");
        totalFlips++;

    }
    console.log("TOTAL NUMBER OF FLIPS: " + totalFlips);
    document.write("TOTAL NUMBER OF FLIPS: " + totalFlips);
}

flipCoinTenTimes();