console.log("____Opgave Js30____");

let calc1 = 8 / 2 * (2+2); // 16
let calc2 = 8 / 2 * 2 + 2; // 10

function checkResult()
{

for(let i = 0; i<calc1 + calc2; i++)
{
    
    if(i == calc2)
    {

        console.log(i + " er resultatet af 8 / 2 * 2 + 2");
    }
    else if(i == calc1)
    {
        console.log(i + " er resultatet af  8 / 2 * (2+2) ");
    }

    
}
}

checkResult();