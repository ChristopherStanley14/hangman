var canvas = document.getElementById('hangman');
var context = canvas.getContext('2d');
context.fillStyle = 'black';
var turn = 0;
var button;
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

var alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var randomWord = wordList[Math.random() * wordList.length | 0];
console.log(randomWord);

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
  // console.log(e);
  document.getElementById(e).disabled = true;
  var word = randomWord.split("");
  var guess = word.filter(function(letter) {
    return letter == e;
  });
  if (guess.length > 0) {
    // console.log(guess);
    setupWord(e, true);
  } else {
    console.log("wrong");
    hang();
  }
}

function setupWord(letter, correct) {
  var myNode = document.getElementById("word");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  if (correct) {
    for (var i = 0; i < randomWord.length; i++) {
      var div = document.createElement("div");
      div.style.width = "25px";
      div.style.height = "50px";
      div.style.float = "left";
      if (randomWord[i].toLowerCase() == letter) {
        div.innerHTML = randomWord[i];
      } else {
        div.innerHTML = "_";
      }
      document.getElementById("word").appendChild(div);
      div.setAttribute("class", randomWord[i]);
    }
  }
  else {
    for (var i = 0; i < randomWord.length; i++) {
      var div = document.createElement("div");
      div.style.width = "25px";
      div.style.height = "50px";
      div.style.float = "left";
      div.innerHTML = "_";
      document.getElementById("word").appendChild(div);
      div.setAttribute("class", randomWord[i]);
    }
  }
}

function setupButtons() {
  alphabet.forEach(function(e) {
    button = document.createElement("button");
    button.innerHTML = e;
    button.style.width = "30px";
    button.style.margin = "5px";
    document.getElementById("letters").appendChild(button);
    button.setAttribute("id", e);
    button.addEventListener("click", function() {
      guess(e);
    });
  });
}

setupButtons();
setupWord(null, false);
