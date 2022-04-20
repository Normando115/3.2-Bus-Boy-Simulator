let img;
var screens;
let gameState = "title";
let canvas;

function preload() {

  screens = loadAnimation(
    "assets/screen1.jpg",
    "assets/screen2.jpg",
    "assets/screen3.jpg",
    "assets/screen4.jpg",
    "assets/screen5.jpg",
    "assets/screen6.jpg",
//    "assets/screen7.jpg",
//    "assets/screen8.jpg",
//    "assets/screen9.jpg",
//    "assets/screen10.jpg",
//    "assets/screen11.jpg",
//    "assets/screen12.jpg"
     );

 img = loadImage('assets/screen1.jpg');
  img1 = loadImage('assets/screen7.jpg');
}

function setup() {
  createCanvas(1280, 1024);
}

function draw() {

  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "instructions":
      instructionScreen();
      break;
    case "lvl1":
      stage1();
      break;
    case "lvl2":
      stage2();
      break;
      case "lvl3":
      stage3();
      break;
    case "lvl4":
      stage4();
      break;
    case "gameOver":
      gameOver();
      break;
  }
}

function keyReleased() {

// Click A to start game
//title
  if (gameState === "title") {
    if (key === "a" || key === "A") {
      gameState = "instructions";
    }
}
    // Click A to finish Instructions
    //instructions
else if (gameState === "instructions") {
    if (key === "a" || key === "A") {
      gameState = "lvl1";
    }
  }
  // Select A or B to continue to stage 2
//stage 1
  else if (gameState === "lvl1") {
    if (key === 'a' || key === 'A') {
      gameState = 'lvl2';
    }
  else if (key === 'b' || key === 'B') {
    gameState = 'lvl2';
  }
  }
   // Select A or B to continue to stage 3
   //stage 2
 else if (gameState === "lvl2") {
    if (key === 'a' || key === 'A') {
      gameState = 'lvl3';
    }
else  if (key === 'b' || key === 'B') {
     gameState = 'lvl3';
   }
 }

  // Select A or B to continue to stage 4
  //stage3
 else if (gameState === "lvl3") {
    if (key === "a" || key === "A") {
      gameState = "lvl4";
    }
  else if (key === "b" || key === "B") {
      gameState = "lvl4";
    }
}
  // Select A or B to continue to game over
  //stage4
 else if (gameState === "lvl4") {
    if (key === "a" || key === "A") {
      gameState = "gameOver";
    }
    else if (key === "b" || key === "B") {
      gameState = "gameOver";
    }
  }
  // Game Over Screen
  // Press r to restart and 1 to go to title screen
  else if (gameState === "gameOver" ) {
     if (key === 'r' || key === 'R') {
       gameState = 'lvl1';
     }
    else if (key === '1') {
       gameState = 'title';
     }
   }
}

function titleScreen() {
 animation(screens, 640, 512);
  stroke(255);
  fill(255, 128, 128);
  textSize(75);
  textAlign(CENTER);
  text("Bus Boy Simulator", width * 0.5, height * 0.1);
  textSize(35);
  text('Press A To Start Game', width * 0.5, height * 0.95);
}

function instructionScreen() {
  background(49, 29, 224);
  noStroke();
  fill(255, 128, 128);
  textSize(30);
  textAlign(CENTER);
  text("This is the instructions",width * 0.5, height * 0.1);

    text("You are a bus boy at *Insert your favorite Restaurant* and the boss has a big temper.",width * 0.5, height * 0.3);
text("You are given two choices and you must choose the one ",width * 0.5, height * 0.35)
text("that you think will not make your boss angry to keep your job.",width * 0.5, height * 0.4)
text("If you make him angry, you lose a heart. Lose 3 hearts and you are fired" ,width * 0.5, height * 0.45)
text("Press A to go to work" ,width * 0.5, height * 0.8)

}

function stage1() {
  background(232, 19, 211);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("You have just started your shift", width * 0.5, height * 0.1);
  text("This is stage 1", width * 0.5, height * 0.2);
text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("A play on your phone", 220, 890);
  text("B start working", 920, 890);
  rect(200, 750, 70, 70);
  rect(900, 750, 70, 70);

}

function stage2() {
  background(255, 247, 189);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("The boss walks in", width * 0.5, height * 0.1);
  text("This is stage 2", width * 0.5, height * 0.2);
text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("A keep playing on your phone", 220, 890);
  text("B Look busy ", 920, 890);
  rect(200, 750, 70, 70);
  rect(900, 750, 70, 70);
}

function stage3 () {
  background(232, 19, 211);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("Its lunchtime", width * 0.5, height * 0.1);
  text("This is stage 3", width * 0.5, height * 0.2);
text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("A play on your phone", 220, 890);
  text("B eat lunch", 920, 890);
  rect(200, 750, 70, 70);
  rect(900, 750, 70, 70);
}

function stage4 () {
  background(255, 247, 189);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("Customer gets angry at you", width * 0.5, height * 0.1);
  text("This is stage 4", width * 0.5, height * 0.2);
text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("A get angry back", 220, 890);
  text("B calm them down", 920, 890);
  rect(200, 750, 70, 70);
  rect(900, 750, 70, 70);
}
function gameOver() {
  background(232, 19, 211);
  image(img1, 0, 0);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
//  text("The boss fires you for making him very angry", width * 0.5, height * 0.1);
//  text("This is GameOver", width * 0.5, height * 0.2);
// text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
//  text("Go home crying", 220, 890);
//  text("Cry at work", 920, 890);
//  rect(200, 750, 70, 70);
//  rect(900, 750, 70, 70);
  text("Press R to restart", width * 0.5, height * 0.9);
  text("Press 1 to go to title page", width * 0.5, height * 0.95);
}
