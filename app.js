const selection = document.querySelector(".selection");
const yourChoice = document.getElementById("your-choice");
const pcChoice = document.getElementById("pc-choice");
const scoreCardSection = document.querySelector(".score-card");
const message = document.querySelector(".message");
const yourScore = document.getElementById("your-score");
const pcScore = document.getElementById("pc-score");
const modalCard = document.querySelector(".modal-card");
const playAgain = document.getElementById("play-again");
const finalMessage = document.getElementById("final-message");
const topSkoreDom=document.getElementById("top-score")

let randomImg;

let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");

selection.addEventListener("click", (e) => {
  
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoice.appendChild(userSelectImg);
    pcCreateSellectImg();
    calculate();
  }
});
pcCreateSellectImg = () => {
  const pcArr = ["rock", "paper", "scissor"];
  randomImg = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${randomImg}.png`;
  pcSelectImg.alt = randomImg;
  pcChoice.appendChild(pcSelectImg);
};

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

calculate = () => {
  if (userSelectImg.alt === randomImg) {
    message.textContent = "DRAW";
    message.style.backgroundColor = YELLOW;
    message.style.fontSize = "2rem";
    scoreCardSection.style.color = YELLOW;
  } else {
    if (userSelectImg.alt === "rock") {
      randomImg === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      randomImg === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      randomImg === "scissor" ? youLost() : youWin();
    }
  }

  if (pcScore.textContent === "10" || yourScore.textContent === "10") {
    modalCard.classList.toggle("show");
    if (pcScore.textContent === "10") {
      finalMessage.textContent = "kaybettiniz";
    } else if (yourScore.textContent === "10") {
      finalMessage.textContent = "KAZANDIN";
      document.querySelector(".modal").style.backgroundColor = GREEN;
    }
  }
};

playAgain.addEventListener("click", () => {
  modalCard.classList.toggle("show");
  window.location.reload()
  // yourScore.textContent="0"
  // pcScore.textContent="0"  

});

const youLost = () => {
  message.textContent = " YOU LOST";
  message.style.backgroundColor = RED;
  message.style.fontSize = "2rem";
  scoreCardSection.style.color = RED;
  playAgain.style.color=RED
  pcScore.textContent++;

};

const youWin = () => {
  message.textContent = "YOU WİN ";
  scoreCardSection.style.color = GREEN;
  message.style.backgroundColor = GREEN;
  message.style.fontSize = "2rem";
  playAgain.style.color=GREEN
  yourScore.textContent++;

  topScreCheck()
};



let topScore;
let storagedScore = localStorage.getItem("highScore")
if(storagedScore){
  topScore=`10 - ${storagedScore}`
}else{
  topScore=`0 - 0`
}
topSkoreDom.innerText=topScore

function topScreCheck(){
  storagedScore || localStorage.setItem("highScore", +pcScore.innerText)

  if (storagedScore >= pcScore.innerText) {
    localStorage.setItem("highScore", +pcScore.innerText);
    
}
}





