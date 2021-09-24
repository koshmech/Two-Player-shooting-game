p1Score = 0;
p2Score = 0;
round = 0;
let hero=new Object();
hero.element="hero";
hero.x=600;
hero.y=600;
function setPosition(sprite){
  let e=document.getElementById(sprite.element);
  e.style.left=sprite.x+"px";
  e.style.top=sprite.y+"px";
}
setPosition(hero);
const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", main);
function main() {
  addNew();
  disable();
}
function shoot() {
  return Math.floor(Math.random() * 5);
}
function fight() {
  let p1 = 100;
  let p2 = 100;
  let gameRunning = true;
  let counter = 0;
  while (gameRunning) {
    if (counter % 2 === 0) {
      let p1Shoot = shoot();
      p2 = p2 - p1Shoot;
      // p1 will shoot here
    } else {
      let p2Shoot = shoot();
      p1 = p1 - p2Shoot;
      // p2 will shoot here
    }
    // condition to exit game
    if (p1 < 1 || p2 < 1) {
      if (p1 > 0) {
        p1Score++;
      } else {
        p2Score++;
      }
      gameRunning = false;
    }
    counter++;
  }
  console.log("Game ", round, ": ", p1Score, p2Score);
  round++;
}
function addNew() {
  if (round >= 5 || p1Score > 2 || p2Score > 2) {
    p1Score = 0;
    p2Score = 0;
    return;
  }
  fight();
  const newDiv = document.createElement("div");
  newDiv.classList.add("div-shadow");
  document.body.appendChild(newDiv);
  let el_span = document.createElement("span");
  let el_spanClass = el_span.setAttribute("class", "game");
  let gameNumber = document.createTextNode("Game : " + round + " ");
  el_span.appendChild(gameNumber);
  newDiv.appendChild(el_span);
  const start = document.createElement("BUTTON");
  let textButton = document.createTextNode("Next Round");
  start.appendChild(textButton);
  start.classList.add("startgame");
  newDiv.appendChild(start);
  start.addEventListener("click", addNew);
  let el_span1 = document.createElement("span");
  let el_spanClass1 = el_span1.setAttribute("class", "p1");
  let player1Stats = document.createTextNode("Player1-Won:" + p1Score + "  ");
  el_span1.appendChild(player1Stats);
  let el_span2 = document.createElement("span");
  let el_spanClass2 = el_span2.setAttribute("class", "p2");
  let player2Stats = document.createTextNode("Player2- Won:" + p2Score + "   ");
  el_span2.appendChild(player2Stats);
  newDiv.appendChild(el_span1);
  newDiv.appendChild(el_span2);
  if (p1Score > 2 || p2Score > 2) {
    if (p1Score > p2Score) {
      let el_span3 = document.createElement("span");
      let el_spanClass3 = el_span3.setAttribute("class", "result1");
      p1Won = document.createTextNode("Player 1 Won the match!");
      el_span3.appendChild(p1Won);
      newDiv.appendChild(el_span3);
    } else {
      let el_span4 = document.createElement("span");
      let el_spanClass4 = el_span4.setAttribute("class", "result2");
      p2Won = document.createTextNode("Player2 won the match!");
      el_span4.appendChild(p2Won);
      newDiv.appendChild(el_span4);
    }
  }
}
function disable(id) {
  document.getElementById("btnid").disabled = true;
  setTimeout(function () {
    document.getElementById("btnid").disabled = false;
  }, 50000);
  console.log("yahoo");
}
