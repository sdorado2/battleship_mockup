const alienShip = () => {
  let leftDrawn = document.querySelector(".leftBox");

  let alienLeft = document.createElement("div");
  alienLeft.setAttribute("class", "leftDiv");

  let alienImg = document.createElement("img");
  alienImg.setAttribute("src", "./img/red.png");
  alienImg.setAttribute("class", "leftImg");
  alienLeft.append(alienImg);

  leftDrawn.append(alienLeft);
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
};

let btn = document.querySelector(".attack");

btn.addEventListener("click", (target) => {
  alienShip();
  playerShip();
});

// class battleship {
//   hull = 0;
//   firepower = 0;
//   accuracy = 0;
//   constructor(hull, firepower, accuracy) {
//     this.hull = hull;
//     this.firepower = firepower;
//     this.accuracy = accuracy;
//   }
// }

// const createPlayerShip = () => {
//   return new battleship(20, 5, 0.7);
// };

// const createEnemyShip = () => {
//   let enemies = [];
//   for (let index = 0; index < 6; index++) {
//     enemies[index] = new battleship(
//       Math.floor(Math.random() * 4 + 3),
//       5,
//       Math.random()
//     );
//   }
//   return enemies;
// };

// const attack = (objAtk, objDef) => {
//   if (objAtk.accuracy > 0.5) {
//     objDef.hull = objDef.hull - objAtk.firepower;
//     console.log(`Opponent has taken : ${objAtk.firepower} `);
//     counterAtk(objAtk, objDef);
//     return objDef.hull;
//   } else {
//     counterAtk(objAtk, objDef);
//   }
// };

// const counterAtk = (objAtk, objDef) => {
//   if (objDef.accuracy > 0.5) {
//     objAtk.hull = objAtk.hull - objDef.firepower;
//     console.log(`You have received : ${objDef.firepower}`);
//     return objAtk.hull;
//   } else if (objDef.accuracy < 0.5) {
//     console.log("Counter attack missed!");
//   }
// };

// const nextEnemy = (object) => {
//   let defeated = object.shift();
//   console.log("defeated : ", defeated);
//   // return object.shift();
// };

// const checkEnemiesList = (object, done) => {
//   if (object == null || object == undefined) {
//     console.log("You Have Destroy All Aliens. \nCongrats!");
//     doneGame(done);
//     console.log('func check : ',done);
//   }
// };

// const questionDraw = (object, currentState) => {
//   if (object <= 0) {
//     console.log("Love All!");
//     doneGame(currentState);
//     console.log('func quest : ', done);
//   }
// };

// const exclaimLost = (done) => {
//   console.log("You lose!");
//   doneGame(done);
//   console.log('func lost : ',done);
// };

// const runAway = (obj) => {
//   console.log(
//     `You have manage to escape with hull : ${obj.hull} and firepower: ${obj.firepower}!\nGame Over!`
//   );
// };

// const doneGame =(currentState)=>{
//   return currentState = true;
// }

// let newGame = prompt("New Game :");

// if (newGame == "y") {
//   let endGame = false;
//   let player = createPlayerShip();
//   let enemy = createEnemyShip();
//   let counter = 0;

//   console.log(player);
//   console.log(enemy);

//   while (endGame !== true) {
//     let answer = prompt("Attack? : ");

//     if (answer == "y") {
//       if (player.hull <= 0) {
//         console.log('Call ? : ',questionDraw(enemy[counter], endGame));
//         console.log('Call ! : ',exclaimLost(endGame));
//         console.log('Lost? : ',endGame);
//       }
//       if (enemy[counter].hull <= 0) {
//         console.log('Call check : ',checkEnemiesList(enemy, endGame));
//         console.log('Call next : ',nextEnemy(enemy));
//         console.log('Check? : ',endGame);
//       }
//       //An issue occurs when it reaches the end of the enemy list.
//       if (enemy[counter].hull >= 1) {
//         attack(player, enemy[counter]);
//         console.log("USS : ", player, "\nAlien : ", enemy[counter]);
//       }
//     }
//     if (answer == "n") {
//       runAway(player);
//       endGame = true;
//     }
//   }
// } else if (newGame == "n") {
//   console.log("Thank You For Playing!");
// }
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
