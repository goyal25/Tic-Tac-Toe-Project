const gameInfo =document.querySelector(".game_info");
const boxes =document.querySelectorAll(".box");
const winBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid=["","","","","","","","",];
let winning =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];





function initGame(){

     currentPlayer = "X";
     gameGrid =["","","","","","","","",""];

     boxes.forEach((box,index)=> {
        box.innerText ="";
        boxes[index].style.pointerEvents="all";
        // box.classList =`box boxes ${index+1}`;
        box.classList = `box boxes${index+1}`;

     });

     winBtn.classList.remove("active");
    gameInfo.innerText=`current Player - ${currentPlayer}`;
    
}
initGame();

function swapTurn(){
    if(currentPlayer ==="X"){
        currentPlayer ="0"
    }
    else
    {
        currentPlayer ="X"
    }
    gameInfo.innerText =`current Player - ${currentPlayer}`
}

function checkGameOver(){
    let answer ="";
    winning.forEach((position) =>{
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
        && (gameGrid[position[0]] ===gameGrid[position[1]]) && (gameGrid[position[1] ]=== gameGrid[position[2]] )){
                

            if(gameGrid[position[0]] ==="X"){
                answer ="X"}
                else{
                  answer ="0"
                }
                boxes.forEach((box)=>{
                box.style.pointerEvents ="none"})
        
        
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
                }


    });

if (answer !== ""){
    gameInfo.innerText =`Winner Player - ${answer}`
    winBtn.classList.add("active");
    return;
}
 let fillCount =0;
 gameGrid.forEach((box) =>{
    if(box !== ""){
        fillCount++;
    }
 });
  if(fillCount === 9){
    gameInfo.innerText =`Game Tied!`
    winBtn.classList.add("active")
  }

}






 function handleClick(index) {
    if(gameGrid[index] === "") {
  boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents ="none";
    swapTurn();
    checkGameOver();
}
 }


 

boxes.forEach((box,index) =>{
    box.addEventListener("click",() => {
        handleClick(index);
    })
});

winBtn.addEventListener("click",initGame);