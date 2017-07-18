var canvas = document.getElementById('hangman');
var context = canvas.getContext('2d');
context.fillStyle = 'black';
var turn = 0;
var button;
var programmingList = [
  "rails", "angular", "bootstrap", "ruby", "javaScript",
  "authentication", "function", "array", "object", "sublime",
  "github", "agile", "route", "database", "model", "view",
  "controller", "terminal", "array", "data", "software",
  "inheritance", "heroku", "scope", "closure", "alert",
  "apple", "microsoft", "computer", "boolean", "variable",
  "conditional", "string", "number", "python", "swift",
  "java", "developer", "django", "framework", "loop",
  "binary", "method", "class", "module","operator",
  "program", "pseudocode", "public", "domain", "overload"
];

var foodList = [
  "burger", "hotdog", "pizza", "tacos", "bacon",
  "brownie", "burrito", "cheese", "cake", "apple",
  "lemon", "chocolate", "chicken", "pasta", "bread",
  "honey", "mustard", "ketchup", "jellybeans", "macaroni",
  "pickles", "sandwich", "pancake", "eggs", "grapes"
];

var alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var displayWord = [];
var wordList = programmingList.concat(foodList);
var randomWord = wordList[Math.random() * wordList.length | 0];
console.log(randomWord);

function getCategory() {
  resetButtons();
  context.clearRect(0, 0, canvas.width, canvas.height);
  turn = 0;
  displayWord = [];
  var dropdown = document.getElementById("category");
  var category = dropdown.options[dropdown.selectedIndex].value;
  getWord(category);
  console.log(category);
}

function resetButtons() {
  document.getElementById('a').disabled = false;
  document.getElementById('b').disabled = false;
  document.getElementById('c').disabled = false;
  document.getElementById('d').disabled = false;
  document.getElementById('e').disabled = false;
  document.getElementById('f').disabled = false;
  document.getElementById('g').disabled = false;
  document.getElementById('h').disabled = false;
  document.getElementById('i').disabled = false;
  document.getElementById('j').disabled = false;
  document.getElementById('k').disabled = false;
  document.getElementById('l').disabled = false;
  document.getElementById('m').disabled = false;
  document.getElementById('n').disabled = false;
  document.getElementById('o').disabled = false;
  document.getElementById('p').disabled = false;
  document.getElementById('q').disabled = false;
  document.getElementById('r').disabled = false;
  document.getElementById('s').disabled = false;
  document.getElementById('t').disabled = false;
  document.getElementById('u').disabled = false;
  document.getElementById('v').disabled = false;
  document.getElementById('w').disabled = false;
  document.getElementById('x').disabled = false;
  document.getElementById('y').disabled = false;
  document.getElementById('z').disabled = false;
}


function getWord(category) {
  if (category == "all") {
    wordList = programmingList.concat(foodList);
    randomWord = wordList[Math.random() * wordList.length | 0];
    randomWord = randomWord.split("");
    randomWord.forEach(function(letter) {
      displayWord.push("_");
    });
    displayWord = displayWord.join(" ");

    var div = document.createElement("div");
    div.innerHTML = displayWord;
    div.setAttribute("id", "word");
    document.getElementById("word").appendChild(div);
    console.log(randomWord);
  }

  if (category == "food") {
    randomWord = foodList[Math.random() * foodList.length | 0];
    randomWord = randomWord.split("");
    randomWord.forEach(function(letter) {
      displayWord.push("_");
    });
    displayWord = displayWord.join(" ");

    var div = document.createElement("div");
    div.innerHTML = displayWord;
    div.setAttribute("id", "word");
    document.getElementById("word").appendChild(div);
    console.log(randomWord);
  }

  if (category == "programming") {
    randomWord = programmingList[Math.random() * programmingList.length | 0];
    randomWord = randomWord.split("");
    randomWord.forEach(function(letter) {
      displayWord.push("_");
    });
    displayWord = displayWord.join(" ");

    var div = document.createElement("div");
    div.innerHTML = displayWord;
    div.setAttribute("id", "word");
    document.getElementById("word").appendChild(div);
    console.log(randomWord);
  }
  updateWord()
}


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
        alert("You lose! The word was " + randomWord.join("") + ".");
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
  console.log(randomWord);
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
    button.setAttribute("class", "letter");
    button.addEventListener("click", function() {
      guess(e);
    });
  });
}


setupButtons();
setupWord();
