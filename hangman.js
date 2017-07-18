var canvas = document.getElementById('hangman');
var context = canvas.getContext('2d');
context.fillStyle = 'black';
var turn = 0;
var button;
var wordList = [
  "rails",
  "angular",
  "bootstrap",
  "ruby",
  "javaScript",
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
  "heroku",
  "scope",
  "closure"
];

var alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var randomWord = wordList[Math.random() * wordList.length | 0];
console.log(randomWord);
var displayWord = [];

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
      setTimeout(function() {
        alert("You Lose!");
      }, 200);
      myLetters = document.getElementById("letters");
      while (myLetters.firstChild) {
        myLetters.removeChild(myLetters.firstChild);
      }

      break;
  }
}

function draw(pathFromx, pathFromy, pathTox, pathToy) {
  context.beginPath();
  context.moveTo(pathFromx, pathFromy);
  context.lineTo(pathTox, pathToy);
  context.stroke();
}

function base() {
  context.fillRect(50, 450, 300, 20);
}

function base2() {
  context.fillRect(75, 0, 20, 450);
}

function base3() {
  context.fillRect(75, 0, 130, 20);
}

function base4() {
  context.fillRect(190, 0, 20, 50);
}

function head() {
  context.beginPath();
  context.arc(200, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.lineWidth = 4;
  context.stroke();
}

function body() {
  draw(200, 150, 200, 301);
}

function leftArm() {
  draw(200, 170, 150, 240);
}

function rightArm() {
  draw(200, 170, 250, 240);
}

function leftLeg() {
  draw(200, 300, 150, 370);
}

function rightLeg() {
  draw(200, 300, 250, 370);
}

function guess(e) {
  displayWord = displayWord.split(" ");
  var guess = false;
  document.getElementById(e).disabled = true;

  for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] == e) {
      displayWord[i] = e;
      guess = true;
    }
  }

  if (guess) {
    displayWord = displayWord.join(" ");
    updateWord();
  } else {
    displayWord = displayWord.join(" ");
    hang();
  }

  console.log(displayWord)
}

function updateWord() {
  var myNode = document.getElementById("word");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  var div = document.createElement("div");
  div.innerHTML = displayWord;
  document.getElementById("word").appendChild(div);
  checkWin();
}

function checkWin() {
  console.log(displayWord);
  var win = false;
  if (displayWord.indexOf('_') > -1) {
    win = false;
  } else {
    win = true;
  }

  if (win) {
    setTimeout(function() {
      alert("You Win!");
    }, 200);
  }
}

function setupWord() {
  randomWord = randomWord.split("");
  randomWord.forEach(function(letter) {
    displayWord.push("_");
  });
  displayWord = displayWord.join(" ");

  var div = document.createElement("div");
  div.innerHTML = displayWord;
  div.setAttribute("id", "word");
  document.getElementById("word").appendChild(div);
}

function setupButtons() {
  alphabet.forEach(function(e) {
    button = document.createElement("button");
    button.innerHTML = e;
    document.getElementById("letters").appendChild(button);
    button.setAttribute("id", e);
    button.addEventListener("click", function() {
      guess(e);
    });
  });
}

setupButtons();
setupWord(false);
