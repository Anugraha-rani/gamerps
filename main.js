let container=document.querySelector('.bg')
let weaponbox=document.querySelector('.weapon-box')
let playerchoice=document.querySelector('.player')
let weapons=weaponbox.querySelectorAll('.weapons div')
let players=playerchoice.querySelector('.player-choice img')
let computers=playerchoice.querySelector('.computer-choice img')
let resultBox=container.querySelector('.result-container')
let text=resultBox.querySelector('h3')
let button=resultBox.querySelector('button')
let wonValue=document.querySelector('.score .won h3 span')
let lostValue=document.querySelector('.score .lost h3 span')
let drawValue=document.querySelector('.score .draw h3 span')

let won=0
let lost=0
let draw=0

let computerChoice=["Rock","Paper","Scissor"]
let result={
    RockRock:"Draw",
    RockPaper:"Computer",RockScissor:"You",
    PaperPaper:"Draw",
    PaperRock:"You",
    PaperScissor:"Computer",
    ScissorScissor:"Draw",
    ScissorRock:"Computer",
    ScissorPaper:"You"

}

for(let i=0;i<weapons.length;i++){
    weapons[i].addEventListener("click",(e)=>{
        // console.log(e);
        // console.log(e.target);

        players.src="images/Rock.png"
        computers.src="images/Rock.png"

        weaponbox.style.display="none"
        playerchoice.style.display="block"

        setTimeout(() => {
           playerchoice.classList.add("active"); 
        }, 1000);
        setTimeout(() => {
        let playerChoices=playerchoice.querySelectorAll("div");
        for(let i=0;i<playerChoices.length;i++){
            playerChoices[i].style.animationPlayState="paused";
        }
        players.src=e.target.src
       let randomItem=computerChoice[Math.floor(Math.random()*computerChoice.length)];
       console.log(randomItem);
    computers.src=`images/${randomItem}.png`

    let userChoices=e.target.parentElement.className
    // console.log(userChoices);
    let resultValue=result[userChoices+randomItem]
    console.log(resultValue);

   showResult(resultValue);
    }, 3000);
    })


    
}

function showResult(r){
//  console.log(r)
resultBox.style.display='block'
if(r==="You"){
text.innerHTML=`
   <h3>Congrats, You Won!</h3>`

   won++
   
   sessionStorage.setItem("won",won)
   wonValue.innerHTML=won
   
}else if(r==="Computer"){
    text.innerHTML=`
    <h3>You lost !!!</h3>
    `
    lost++
    lostValue.innerHTML=lost
    sessionStorage.setItem("lost",lost)
   
}else{
    text.innerHTML=`Match Draw !!!`
    draw++
    drawValue.innerHTML=draw
}

}

button.addEventListener("click",(e)=>{
   playerchoice.classList.remove("active");  
   resultBox.style.display='none'
    weaponbox.style.display="block"
        playerchoice.style.display="none"
    let playerChoices=playerchoice.querySelectorAll("div");
        for(let i=0;i<playerChoices.length;i++){
            playerChoices[i].style.animationPlayState="running";
        }
})