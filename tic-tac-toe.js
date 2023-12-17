let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;

// winning conditions
const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function  to reset game
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// function to give turns to each player
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "x";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "o";
      box.style.color = "green";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

// after game is complete it disables all the boxes
const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true; // to disable
  }
};

// after clicking reset or new game buttons wil be enabled again
const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false; // to enable boxes
    box.innerText = ""; // to make boxes empty
  }
};

const showWinner = (winner) => {
  msg.innerText = `winner is ${winner}`; // text we get after winning
  // msg.innerText = `fuck you 🖕`; // NO OFFENSE!!! just for fun

  msgContainer.classList.remove("hide"); // hide class was created to hide winner message which is removed here
  disableBoxes();
};

// function to give winning conditions
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
