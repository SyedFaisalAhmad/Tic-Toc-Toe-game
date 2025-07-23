let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#New-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const Winpattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
let turnO = true;
enableabledbtn();
msgcontainer.classList.add("hide")

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.innerText = "abc"
      if (turnO) {
        box.innerText = "O";
        turnO = false;
      } else {
        box.innerText = "X";
        turnO = true; 
      }
      box.disabled = true;
      checkWinner()
    });
});
const enableabledbtn = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const disabledbtn = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}


const  showwinner = (Winner) => {
  msg.innerText = `Congragulation,Winner is ${Winner}`;
  msgcontainer.classList.remove("hide")
  disabledbtn()
}
const checkWinner = () => {
        for(let Pattren of Winpattren) {
          let pos1val = boxes[Pattren[0]].innerText;
          let pos2val = boxes[Pattren[1]].innerText;
          let pos3val = boxes[Pattren[2]].innerText;
          if ( pos1val != "" && pos2val != "" && pos3val !="" ) {
            if (pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val)
            }
            }
  }
}


newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
