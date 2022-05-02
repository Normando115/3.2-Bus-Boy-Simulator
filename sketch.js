let img;
var heads;
let gameState = "title";
let canvas;
let fr = 60;
function preload() {

  heads = loadAnimation(
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head02.jpg",
    "assets/head02.jpg",
    "assets/head02.jpg",
    "assets/head03.jpg",
    "assets/head03.jpg",
    "assets/head04.jpg",
    "assets/head04.jpg",
    "assets/head05.jpg",
    "assets/head05.jpg",
    "assets/head06.jpg",
    "assets/head06.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    //    "assets/screen8.jpg",
    //    "assets/screen9.jpg",
    //    "assets/screen10.jpg",
    //    "assets/screen11.jpg",
    //    "assets/screen12.jpg"
  );

  img = loadImage('assets/screen1.jpg');
  img1 = loadImage('assets/screen2.jpg');
  img2 = loadImage('assets/screen3.jpg');
  img3 = loadImage('assets/scenario1.jpg');
  img4 = loadImage('assets/scenario2.jpg');
  img5 = loadImage('assets/scenario3.jpg');
  img6 = loadImage('assets/scenario4.jpg');
  img7 = loadImage('assets/scenario5.jpg');
  img8 = loadImage('assets/scenario6.jpg');
  img9 = loadImage('assets/scenario7.jpg');
}

function setup() {
  createCanvas(1280, 1024);
  frameRate(fr);
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
      case "bossScreen":
        bossScreen();
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
    case "lvl5":
      stage5();
      break;
    case "lvl6":
      stage6();
      break;
    case "lvl7":
      stage7();
      break;
    case "gameOver":
      gameOver();
      break;
      case "winGame":
        winGame();
        break;
        case "artistStatement":
          artistStatement();
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
  //Boss head explosion
  // A or B to continue
  else if (gameState === "bossScreen") {
    if (key === "a" || key === "A") {
      gameState = "gameOver";
    } else if (key === "b" || key === "B") {
      gameState = "gameOver";
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
      gameState = 'bossScreen';
    } else if (key === 'b' || key === 'B') {
      gameState = 'lvl2';
    }
  }
  // Select A or B to continue to stage 3
  //stage 2
  else if (gameState === "lvl2") {
    if (key === 'a' || key === 'A') {
      gameState = 'lvl3';
    } else if (key === 'b' || key === 'B') {
      gameState = 'bossScreen';
    }
  }

  // Select A or B to continue to stage 4
  //stage3
  else if (gameState === "lvl3") {
    if (key === "a" || key === "A") {
      gameState = "bossScreen";
    } else if (key === "b" || key === "B") {
      gameState = "lvl4";
    }
    // Select A or B to continue to stage 5
    //stage4
  } else if (gameState === "lvl4") {
    if (key === "a" || key === "A") {
      gameState = "lvl5";
    } else if (key === "b" || key === "B") {
      gameState = "bossScreen";
    }
    // Select A or B to continue to stage 6
    //stage5
  } else if (gameState === "lvl5") {
    if (key === "a" || key === "A") {
      gameState = "lvl6";
    } else if (key === "b" || key === "B") {
      gameState = "bossScreen";
    }
    // Select A or B to continue to stage 7
    //stage6
  } else if (gameState === "lvl6") {
    if (key === "a" || key === "A") {
      gameState = "bossScreen";
    } else if (key === "b" || key === "B") {
      gameState = "lvl7";
    }
  }

  // Select A or B to continue to game over
  //stage4
  else if (gameState === "lvl7") {
    if (key === "a" || key === "A") {
      gameState = "winGame";
    } else if (key === "b" || key === "B") {
      gameState = "gameOver";
    }
  }
  // Game Over Screen
  // Press r to restart and 1 to go to title screen
  else if (gameState === "gameOver") {
    if (key === 'r' || key === 'R') {
      gameState = 'lvl1';
    } else if (key === '1') {
      gameState = 'title';
    }
  }


  else if (gameState === "winGame") {
    if (key === 'a' || key === 'A') {
      gameState = 'artistStatement';
    } else if (key === '1') {
      gameState = 'title';
    }
  }
  else if (gameState === "artistStatement") {
    if (key === 'a' || key === 'A') {
      gameState = 'title';
    } else if (key === '1') {
      gameState = 'title';
    }
  }
}

function titleScreen() {
  image(img, 0, 0);
  stroke(255);
  fill(255, 128, 128);
  textSize(75);
  textAlign(CENTER);
  text("Bus Boy Simulator", width * 0.5, height * 0.1);
  textSize(35);
  text('Press A To Start Game', width * 0.5, height * 0.95);
}
function bossScreen() {
  background(50,40,60);
  animation(heads, 640, 512);
    textSize(50);
      fill(24, 217, 50);
    text("You have failed the boss' expectations ", width * 0.15, height * 0.1);
    textSize(25);
  text("continue", 180, 990);
  text("continue ", 880, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);

}



function instructionScreen() {
  background(49, 29, 224);
  noStroke();
  fill(255, 128, 128);
  textSize(30);
  textAlign(CENTER);
  text("Instructions", width * 0.5, height * 0.1);

  text("You are a bus boy at *Insert your favorite Restaurant* and the boss has a big temper.", width * 0.5, height * 0.3);
  text("You are given two choices and you must choose the one ", width * 0.5, height * 0.35)
  text("that you think will not make your boss angry to keep your job.", width * 0.5, height * 0.4)
  text("If you make him angry, his head will explode and you will lose your job", width * 0.5, height * 0.45)
  text("Press A to go to work", width * 0.5, height * 0.8)

}

function stage1() {
  background(232, 19, 211);
  image(img3, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("You have just started your shift", width * 0.6, height * 0.1);
  text("What do you do", width * 0.6, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("play on your phone", 220, 990);
  text("start working", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);

}

function stage2() {
  background(255, 247, 189);
  image(img4, 0, 0);
fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("You drop and break a wine glass", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Clean it up", 220, 990);
  text("Ignore it ", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);
}

function stage3() {
  background(232, 19, 211);
  image(img5, 0, 0);
fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("A customer drops their wallet", width * 0.4, height * 0.1);
  text("What do you do", width * 0.4, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Pocket it ez money", 220, 990);
  text("Return it", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);
}

function stage4() {
  background(255, 247, 189);
    image(img6, 0, 0);
fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Its breaktime", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Eat ", 220, 990);
  text("Keep working", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);
}

function stage5() {
  background(255, 247, 189);
    image(img7, 0, 0);
fill(0);
  textSize(50);
  textAlign(CENTER);
  text("The manager wants you", width * 0.4, height * 0.2);
    text(" to restock stuff", width * 0.4, height * 0.3);
  text("What do you do", width * 0.4, height * 0.4);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  fill(112, 17, 153);
  text("Restock normally", 220, 990);
  text("Relax in restock room then restock normally", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);
}

function stage6() {
  background(255, 247, 189);
    image(img8, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Boss leaves you in charge temporarily", width * 0.5, height * 0.2);
  text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Sleep in manager's office", 220, 990);
  text("Work normally", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);
}

function stage7() {
  background(255, 247, 189);
    image(img9, 0, 0);
fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Customer complains about bad food ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Tell manager", 220, 990);
  text("Tell them to deal with it", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
text("A ", 235, 895);
text("B ", 935, 895);
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
function winGame() {
  background(232, 19, 211);
  image(img2, 0, 0);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("Just another successful day at work ", width * 0.5, height * 0.1);
    text("Good Work", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);

  noStroke();
  //  text("Go home crying", 220, 890);
  //  text("Cry at work", 920, 890);
  //  rect(200, 750, 70, 70);
  //  rect(900, 750, 70, 70);
  text("Press A to go to Artist Statement", width * 0.5, height * 0.9);
  text("Press 1 to go to title page", width * 0.5, height * 0.95);
}
function artistStatement() {
  background(255, 247, 189);
  fill(0);
  textSize(25);
  textAlign(CENTER);
textStyle(BOLD);
  text("Artist Statement ", width * 0.5, height * 0.1);
textStyle(NORMAL);
  text("This project is based on my experience working at a restaurant as a busser.  ", width * 0.5, height * 0.2);
  text("It was made to emulate an buser at a restaurant and what you should and should not do.", width * 0.5, height * 0.3);
  text("The goal of the game is to make sure you are making the right choices and not get fired.", width * 0.5, height * 0.4);
  text("The reason I chose to make a game about my experience at a restaurant is because it was ", width * 0.5, height * 0.5);
  text("where this or that happens so I thought that I should make a game of that reality instead of actually ", width * 0.5, height * 0.6);
  text("something I genuinely enjoyed and sometimes when I worked there, I would imagine these scenarios ", width * 0.5, height * 0.7);
  text("doing some of these things that could get my boss angry.", width * 0.5, height * 0.8);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Press A or 1 to play again", 220, 990);
  text("WootWoot", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
}
