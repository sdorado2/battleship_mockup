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

const createPlayerShip = () => {
  return new battleship(20, 5, 0.7);
};
const createEnemyShip = () => {
  let enemies = [];
  for (let index = 0; index < 6; index++) {
    enemies[index] = new battleship(
      Math.floor(Math.random() * 4 + 3),
      5,
      Math.random()
    );
  }
  return enemies;
};

const attack = (objAtk, objDef) => {
  if (objAtk.accuracy > 0.5) {
    objDef.hull = objDef.hull - objAtk.firepower;
    console.log(`Opponent has taken : ${objAtk.firepower} dmg`);
    counterAtk(objAtk, objDef);
    return objDef.hull;
  } else {
    counterAtk(objAtk, objDef);
  }
};

const counterAtk = (objAtk, objDef) => {
  if (objDef.accuracy > 0.5) {
    objAtk.hull = objAtk.hull - objDef.firepower;
    console.log(`You have received : ${objDef.firepower} dmg.\n`);
    return objAtk.hull;
  } else if (objDef.accuracy < 0.5) {
    console.log("Counter attack missed!\n");
  }
};

const checkPlayerHealth = (objPlayer, gameStatus) => {
  if (objPlayer.hull <= 0) {
    //questionDraw(objEnemy);
    console.log("inside player check : ", playerLost(gameStatus));
    return playerLost(gameStatus);
  }
  return (gameStatus = false);
};

const checkEnemiesList = (objEnemyList, gameStatus) => {
  console.log("Check EnemyList BEFORE function : ", gameStatus, ".\n");

  if (objEnemyList.length == 0) {
    console.log("You Have Destroy All Aliens.\nCongrats!");
    console.log("Boolean Value : ", changeEndGameValue(gameStatus));
    return changeEndGameValue(gameStatus);
  }
  return (gameStatus = false);
};

const checkEnemyDefeated = (objEnemy, gameStatus) => {
  if (objEnemy[0].hull <= 0) {
    return checkEnemiesList(objEnemy, gameStatus);
  }
  return (gameStatus = false);
};

const enemyAlive = (objPlayer, objEnemy) => {
  if (objEnemy[0].hull >= 1) {
    attack(objPlayer, objEnemy[0]);
    console.log("USS : ", objPlayer, "\nAlien : ", objEnemy[0], "\n");
  }
};

const nextEnemy = (objEnemy) => {
  if (objEnemy[0].hull <= 0) {
    let defeated = objEnemy.shift();
    console.log("DEFEATED : ", defeated, "\n");
  }
};

const questionDraw = (objEnemy, gameStatus) => {
  if (objEnemy[0].hull <= 0) {
    console.log("Love All!");
    return changeEndGameValue(gameStatus);
  }
};

const playerLost = (gameStatus) => {
  console.log("You lose!");
  console.log("Game Lost function : ", changeEndGameValue(gameStatus));
  return changeEndGameValue(gameStatus);
};

const changeEndGameValue = (gameState) => {
  gameState = true;
  return gameState;
};

const runAway = (obj) =>
  console.log(
    `You have manage to escape!\nhull : ${obj.hull}\nfirepower: ${obj.firepower}!\nGame Over!`
  );
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
  // alienInfo.innerHTML = enemy[current]; *Tobe added later.
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
  // playerInfo.innerHTML = player; *Tobe added later.
  playerStatus.append(playerInfo);
};

let btn = document.querySelector(".startGame");

btn.addEventListener("click", (target) => {
  alienShip();
  playerShip();

  let newGame = prompt("New Game :");
  let endGame;
  let player;
  let enemy;

  if (newGame == "y") {
    endGame = false;
    player = createPlayerShip();
    enemy = createEnemyShip();

    console.table(player);
    console.table(enemy);
    console.log("BEFORE while loop : ", endGame);
  }
  if (newGame == "n") {
    console.log("Thank You For Playing!");
    return;
  }
  do {
    console.log("AFTER endGame while loop : ", endGame);
    console.log("AFTER enemy while loop : ", enemy.length);
    let answer = prompt("\nAttack? : ");

    if (answer == "y") {
      firstCheck = checkEnemiesList(enemy, endGame);
      if (endGame != firstCheck) break;

      enemyAlive(player, enemy);

      secondCheck = checkPlayerHealth(player, endGame);
      if (endGame != secondCheck) break;

      thirdCheck = checkEnemyDefeated(enemy, endGame);
      if (endGame != thirdCheck) break;

      nextEnemy(enemy);
    }
    if (answer == "n") {
      runAway(player);
      endGame = true;
    }
  } while (endGame !== true);
});

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
