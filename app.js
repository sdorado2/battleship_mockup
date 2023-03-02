//Template for battleship
//Construction of battleship
//Attacks Functions
//Status Check for battleship

//Class Constructor for Battleship
class battleship {
  hull = 0;
  firepower = 0;
  accuracy = 0;
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}
//Creates player's ship
const createPlayerShip = () => {
  return new battleship(20, 5, 0.7);
};
//Creates enemy's ship
const createEnemyShip = () => {
  let enemies = [];
  for (let index = 0; index < 6; index++) {
    enemies[index] = new battleship(
      Math.floor(Math.random() * 4 + 3),
      5,
      Math.floor(Math.random() * (3) + 4) / 10,
    );
  }
  return enemies;
};
//Attacking Phase 
const attack = (objAtk, objDef) => {
  if (objAtk.accuracy > 0.5) {
    objDef.hull = objDef.hull - objAtk.firepower;
    console.log(`Opponent has taken : ${objAtk.firepower} dmg`);

    let attackScreen = document.querySelector('.message')
    attackScreen.innerHTML = `Opponent has taken : ${objAtk.firepower} dmg`

    counterAtk(objAtk, objDef);
    return objDef.hull;
  } else {
    counterAtk(objAtk, objDef);
  }
};
//Counter Attack Phase
const counterAtk = (objAtk, objDef) => {
  if (objDef.accuracy > 0.5) {
    objAtk.hull = objAtk.hull - objDef.firepower;
    console.log(`You have received : ${objDef.firepower} dmg.\n`);

    let cattScreen = document.querySelector('.message');
    cattScreen.innerHTML = `You have received : ${objDef.firepower} dmg.\n`

    return objAtk.hull;
  } else if (objDef.accuracy < 0.5) {
    console.log("Counter attack missed!\n");
  }
};
//Checks Player's Health
const checkPlayerHealth = (objPlayer, gameStatus) => {
  if (objPlayer.hull <= 0) {
    //questionDraw(objEnemy);
    console.log("inside player check : ", playerLost(gameStatus));
    return playerLost(gameStatus);
  }
  return (gameStatus = false);
};
//Checks If The Enemy List Empty
const checkEnemiesList = (objEnemyList, gameStatus) => {
  if (objEnemyList.length == 0) {
    console.log("You Have Destroy All Aliens.\nCongrats!");
    // console.log("Boolean Value : ", changeEndGameValue(gameStatus));
    return changeEndGameValue(gameStatus);
  }
  return (gameStatus = false);
};
//Checks If The Current Enemy Was Defeated
const checkEnemyDefeated = (objEnemy, gameStatus) => {
  if (objEnemy[0].hull <= 0) {
    return checkEnemiesList(objEnemy, gameStatus);
  }
  return (gameStatus = false);
};
//Calls The Attack Function And Returns The Current Player And Enemy Status
const enemyAlive = (objPlayer, objEnemy) => {
  if (objEnemy[0].hull >= 1) {
    attack(objPlayer, objEnemy[0]);
    console.log("USS : ", objPlayer, "\nAlien : ", objEnemy[0], "\n")
    return story.innerHTML = `USS : ${objPlayer} \nAlien :  ${objEnemy[0]} \n`;
  }
};
//Removes The Current Enemy When Defeated
const nextEnemy = (objEnemy) => {
  if (objEnemy[0].hull <= 0) {
    let defeated = objEnemy.shift();
    console.log("DEFEATED : ", defeated, "\n");;
    return "DEFEATED : ", defeated, "\n";
  }
};
// Checks If There Is A Draw
const questionDraw = (objEnemy, gameStatus) => {
  if (objEnemy[0].hull <= 0) {
    console.log("Love All!");
    return changeEndGameValue(gameStatus);
  }
};
// Returns A Lose Screen When Player Is Defeated
const playerLost = (gameStatus) => {
  console.log("You lose!");
  console.log("Game Lost function : ", changeEndGameValue(gameStatus));
  return changeEndGameValue(gameStatus);
};
// Changes The EndGame Value To True
const changeEndGameValue = (gameState) => {
  gameState = true;
  return gameState;
};
// Return A Screen When The Player Escapes
const runAway = (obj) => {
  return `You have manage to escape!\nhull : ${obj.hull}\nfirepower: ${obj.firepower}!\nGame Over!`;
};

// HTML DOM
const alienShip = () => {
  let leftDrawn = document.querySelector(".leftBox");

  let alienLeft = document.createElement("div");
  alienLeft.setAttribute("class", "leftDiv");

  let alienImg = document.createElement("img");
  alienImg.setAttribute("src", "./img/red.png");
  alienImg.setAttribute("class", "leftImg");
  alienLeft.append(alienImg);

  leftDrawn.append(alienLeft);

  let alienStatus = document.querySelector(".statusScreen");

  let alienInfo = document.createElement("div");
  alienInfo.setAttribute("class", "enemyInfo");
  alienInfo.innerHTML = `Hull :  ${enemy[0].hull} <hr><br>Firepower : ${enemy[0].firepower}<hr><br>Accuracy : ${enemy[0].accuracy}`;
  alienStatus.append(alienInfo);
};

const playerShip = () => {
  let rightDrawn = document.querySelector(".rightBox");

  let playerRight = document.createElement("div");
  playerRight.setAttribute("class", "rightDiv");

  let playerImg = document.createElement("img");
  playerImg.setAttribute("class", "rightImg");
  playerImg.setAttribute("src", "./img/white.png");
  playerRight.append(playerImg);

  rightDrawn.append(playerRight);

  let playerStatus = document.querySelector(".statusScreen");

  let playerInfo = document.createElement("div");
  playerInfo.setAttribute("class", "playerInfo");
  playerInfo.innerHTML = `Hull :  ${player.hull} <hr><br>Firepower : ${player.firepower}<hr><br>Accuracy : ${player.accuracy}`;
  playerStatus.append(playerInfo);
};

const replaceButton = () => {
  let removeBtn = document.querySelector(".startGame");
  removeBtn.remove();
};

const updateBtn = () => {
  let attackButtonShow = document.querySelector(".attackBtnHdn");
  attackButtonShow.classList.toggle("attackBtnShw");

  let retreatButtonShow = document.querySelector(".retreatBtnHdn");
  retreatButtonShow.classList.toggle("retreatBtnShw");
};

let startButton = document.querySelector(".startGame");

let endGame = false;
let player = createPlayerShip();
let enemy = createEnemyShip();
let answer;
console.table(player);
console.table(enemy);

startButton.addEventListener(
  "click",
  (initGame) => {
    alienShip();
    playerShip();
    replaceButton();
    updateBtn();
  },
  { once: true }
);

let battleButton = document.querySelector(".attackBtnHdn");
let retreatButton = document.querySelector(".retreatBtnHdn");
let story = document.querySelector(".message");

battleButton.addEventListener("click", (battlePhase) => {
  checkEnemiesList(enemy, endGame);

  enemyAlive(player, enemy);

  checkPlayerHealth(player, endGame);
  checkEnemyDefeated(enemy, endGame);

  story.innerHTML = nextEnemy(enemy);
});

retreatButton.addEventListener("click", (retreatOption) => {
  let newDiv = document.querySelector(".message");
  newDiv.innerHTML = runAway(player);
});

// function responseYes() {
//   return answer = 'y';
// }

// Game Run

// let newGame = prompt("New Game :");

// if (newGame == "y") {
//   endGame;
// player = createPlayerShip();
// enemy = createEnemyShip();

// console.table(player);
// console.table(enemy);
// console.log("BEFORE while loop : ", endGame);
// }
// if (newGame == "n") {
//   console.log("Thank You For Playing!");
// }
// do {
//   console.log("AFTER endGame while loop : ", endGame);
//   console.log("AFTER enemy while loop : ", enemy.length);
//   // let answer = prompt("\nAttack? : ");

//   if (answer === "y") {
//     console.log ('It when inside the if statement.')
//     firstCheck = checkEnemiesList(enemy, endGame);
//     if (endGame != firstCheck) break;

//     enemyAlive(player, enemy);

//     secondCheck = checkPlayerHealth(player, endGame);
//     if (endGame != secondCheck) break;

//     thirdCheck = checkEnemyDefeated(enemy, endGame);
//     if (endGame != thirdCheck) break;

//     nextEnemy(enemy);
//   }

//   if (answer === "n") {
//     runAway(player);
//     endGame = true;
//   }
// } while (endGame !== true);
//=========================================================================
//     while (endGame !== true) {
//       let answer = prompt("Attack? : ");

//       if (answer == "y") {
//         if (player.hull <= 0) {
//           console.log("Call ? : ", questionDraw(enemy[counter], endGame));
//           console.log("Call ! : ", exclaimLost(endGame));
//           console.log("Lost? : ", endGame);
//         }
//         if (enemy[counter].hull <= 0) {
//           console.log("Call check : ", checkEnemiesList(enemy, endGame));
//           console.log("Call next : ", nextEnemy(enemy));
//           console.log("Check? : ", endGame);
//         }
//         //An issue occurs when it reaches the end of the enemy list.
//         if (enemy[counter].hull >= 1) {
//           attack(player, enemy[counter]);
//           console.log("USS : ", player, "\nAlien : ", enemy[counter]);
//         }
//       }
//       if (answer == "n") {
//         runAway(player);
//         endGame = true;
//       }
//     }
//   } else if (newGame == "n") {
//     console.log("Thank You For Playing!");
//   }
// });
//=======================================================================
// if (ans == "y") {
//   if (player.hull >= 1 && enemy[counter].hull >= 1) {
//     attack(player, enemy[counter]);
//     console.log('USS : ', player, 'Alien : ', enemy[counter]);

//     if (enemy[counter].hull <= 0 && enemy != null) {
//       nextEnemy(enemy);
//     } else {
//       console.log("Mission Complete!");
//     }
//   }
//   else if (player.hull >= 1 && enemy[counter].hull <= 0) {
//     console.log("Enemy was defeated!");
//     endGame = true;
//   }
//   else if (player.hull <= 0 && enemy[counter].hull >= 1) {
//     console.log("You Lose!");
//     endGame = true;
//   }
//   else if (player.hull <= 0 && enemy[counter].hull <= 0) {
//     console.log("Love All!");
//     endGame = true;
//   }
// }
// else if (ans == "n") {
//   runAway(player);
//   endGame = true;
// }}
//========================================================================
//   while (player.hull !== 0 && endGame !== true) {
//     let ans = prompt("attack?");

//     if (ans == "y" && enemy.hull >= 0) {
//       console.log(attack(player, enemy));
//       console.log(player, enemy);
//     } else if (ans == "y" && enemy.hull <= 0) {
//       console.log(`You defeated the enemy. ${enemy.hull}`);
//       endGame = true;
//     } else if ((ans = "n")) {
//       runAway(player);
//       endGame = true;
//     }
//   }

// attack(red, blue);
// runAway(red);
// console.log(red, blue);
