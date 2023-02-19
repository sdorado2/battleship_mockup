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
    console.log(`Opponent has taken : ${objAtk.firepower} `);
    counterAtk(objAtk, objDef);
    return objDef.hull;
  } else {
    counterAtk(objAtk, objDef);
  }
};

const counterAtk = (objAtk, objDef) => {
  if (objDef.accuracy > 0.5) {
    objAtk.hull = objAtk.hull - objDef.firepower;
    console.log(`You have received : ${objDef.firepower}`);
    return objAtk.hull;
  } else if (objDef.accuracy < 0.5) {
    console.log("Counter attack was missed!");
  }
};

const nextEnemy = (object) => {
  let defeated = object.shift();
  console.log("defeated : ", defeated);
  // return object.shift();
};

const checkEnemiesList = (object) => {
  if (object == null || object == undefined) {
    console.log("You Have Destroy All Aliens. \nCongrats!");
    return;
  }
};

const runAway = (obj) => {
  console.log(
    `You have manage to escape with hull : ${obj.hull} and firepower: ${obj.firepower}!\nGame Over!`
  );
};

let newGame = prompt("New Game :");

if (newGame == "y") {
  let endGame = false;
  let player = createPlayerShip();
  let enemy = createEnemyShip();
  let counter = 0;

  console.log(player);
  console.log(enemy);

  while (endGame !== true) {
    let ans = prompt("Attack? : ");

    if (ans == "y") {
      if (player.hull <= 0) {
        console.log("You lose!");
        endGame = true;
      }
      if (enemy[counter].hull <= 0) {
        nextEnemy(enemy);
      }
      if (enemy[counter].hull >= 1) {
        attack(player, enemy[counter]);
        console.log("USS : ", player, "\nAlien : ", enemy[counter]);
      }
    }
    if (ans == "n") {
      runAway(player);
      endGame = true;
    }
  }
} else if (newGame == "n") {
  console.log("Thank You For Playing!");
}
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
