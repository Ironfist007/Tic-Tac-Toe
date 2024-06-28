// SubTask1

const board = document.getElementById("board");
const cells = Array.from (document.getElementsByClassName("cell"));
let msg = document.getElementById("msg");
const restartbtn = document.getElementById('restartButton');
const players = ["X", "O"];
let current = players[0];
let spaces= Array(9).fill(null);
let count=0;
// // add event listeners to each cell
const start =() =>{
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
}

function handleCellClick(event) {
  // Handle Cell Clicking Functionality
   const id =event.target.id
   
   if(!spaces[id] && count<9){
       spaces[id]=current;
       event.target.innerText =current;

       if(checkWin()!==false){
           msg.innerHTML= `${current} has won !`;
          count=10;
       }

        if(current==players[0]){
          current=players[1];
        }
        else{current=players[0];}
        count++;
        if(count==9){
          msg.innerHTML='Draw';
        }
   }
}

// SubTask2
const wincombination = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


function checkWin() {
  // // Check Winning conditions
   for(const combo of wincombination){
    let [a,b,c] = combo;
    if(spaces[a]&&(spaces[a]==spaces[b]&&spaces[a]==spaces[c])){
      return [a,b,c];
    }
   }
   return false;
}

function checkTie() {
  // // Check Tie conditions
}

// SubTask3
restartbtn.addEventListener('click',restart);
function restart() {
  // // Restart Game Functionality
  count=0;
  spaces.fill(null);
  cells.forEach(cell=>{
    cell.innerText= '';
   
  })
  msg.innerHTML="X's turn!";
  current = players[0];
}
start();