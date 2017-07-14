var canvas = document.getElementById('hangman');
var context = canvas.getContext('2d');
context.fillStyle = 'black';
var turn = 0;
var wordList = [
  "Rails",
  "AngularJS",
  "Bootstrap",
  "Ruby",
  "JavaScript",
  "authentication",
  "function",
  "array",
  "object",
  "sublime",
  "github",
  "agile",
  "route",
  "database",
  "model",
  "view",
  "controller",
  "terminal",
  "array",
  "data",
  "inheritance",
  "Heroku",
  "scope",
  "closure"
];

var randomWord = wordList[Math.random() * wordList.length | 0];
function hang() {
  switch (turn) {
    case 0:
      base();
      turn++;
      break;
    case 1:
      base2();
      turn++;
      break;
    case 2:
      base3();
      turn++;
      break;
    case 3:
      base4();
      turn++;
      break;
    case 4:
      head();
      turn++;
      break;
    case 5:
      body();
      turn++;
      break;
    case 6:
      leftArm();
      turn++;
      break;
    case 7:
      rightArm();
      turn++;
      break;
    case 8:
      leftLeg();
      turn++;
      break;
    case 9:
      rightLeg();
      turn++;
      break;
  }
}

// Base
function base() {
  context.fillRect(50, 450, 300, 20);
}

// Base2
function base2() {
  context.fillRect(75, 0, 20, 450);
}

// Base3
function base3() {
  context.fillRect(75, 0, 130, 20);
}

// Base4
function base4() {
  context.fillRect(190, 0, 20, 50);
}

// Head
function head() {
  context.beginPath();
  context.arc(200, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.lineWidth = 4;
  context.stroke();
}

// Body
function body() {
  context.beginPath();
  context.moveTo(200, 150);
  context.lineTo(200, 301);
  context.stroke();
}

// Left Arm
function leftArm() {
  context.beginPath();
  context.moveTo(200, 170);
  context.lineTo(150, 240);
  context.stroke();
}

// Right Arm
function rightArm() {
  context.beginPath();
  context.moveTo(200, 170);
  context.lineTo(250, 240);
  context.stroke();
}

// Left Leg
function leftLeg() {
  context.beginPath();
  context.moveTo(200, 300);
  context.lineTo(150, 370);
  context.stroke();
}

// Right Leg
function rightLeg() {
  context.beginPath();
  context.moveTo(200, 300);
  context.lineTo(250, 370);
  context.stroke();
}
