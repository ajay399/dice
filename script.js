

  var playgame=()=>
 {
var p1_no =Math.floor(Math.random() * 6)+1;
var p2_no =Math.floor(Math.random() * 6)+1;

console.log(p1_no + " " + p2_no)

if(p1_no>p2_no)
{
console.log("p1")

document.querySelector("h1").innerHTML = "Player 1 Won The Game!"; 
}
else if(p2_no>p1_no)
{
  console.log("p2")
document.querySelector("h1").innerHTML = "Player 2 Won The Game!"; 
}
else
{
  console.log("dr")
document.querySelector("h1").innerHTML = "Draw!"; 
}

document.getElementById("dice1").src = `dice${p1_no}.png`; 
document.getElementById("dice2").src = `dice${p2_no}.png`; 
}
