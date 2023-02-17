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
  return new battleship(Math.floor(Math.random() * 4 + 3), 5, Math.random());
};

const attack = (objAtk, objDef) => {
  if (objAtk.accuracy > 0.5) {
    objDef.hull = objDef.hull - objAtk.firepower;
    console.log(`${objAtk.firepower} was taken by opponent`);
    counterAtk(objAtk, objDef);
    return objDef.hull;
  } else {
    counterAtk(objAtk, objDef);
  }
};

const counterAtk = (objAtk, objDef) => {
  if (objDef.accuracy > 0.5) {
    objAtk.hull = objAtk.hull - objDef.firepower;
    console.log(`You received ${objDef.firepower}`);
    return objAtk.hull;
  } else if (objDef.accuracy < 0.5) {
    console.log("Counter attack was missed!");
  }
};

const runAway = (obj) => {
  console.log(
    `You have manage to escape with hull :${obj.hull} and firepower: ${obj.firepower}!\nGame Over!`
  );
};

let newGame = prompt("New Game :");

if (newGame == "y") {
  let endGame = false;
  let player = createPlayerShip();
  let enemy = [];
  let counter = 0;

  for (let index = 0; index < 6; index++) {
    enemy[index] = createEnemyShip();
  }

  console.log(player);
  console.log(enemy);

  while (endGame !== true) {
    let ans = prompt("Attack? : ");

    if (ans == "y") {
      if (player.hull >= 0 && enemy[counter].hull >= 0) {
        attack(player, enemy[counter]);
        console.log(player, enemy[counter]);
        if (enemy[counter].hull <= 0 && enemy != null) {
          enemy.shift();
        }else{
            console.log('Mission Complete!')
        }


      } else if (player.hull >= 0 && enemy[counter].hull <= 0) {
        console.log("Enemy was defeated!");
        endGame = true;
      } else if (player.hull <= 0 && enemy[counter].hull >= 0) {
        console.log("You Lose!");
        endGame = true;
      } else if (player.hull <= 0 && enemy[counter].hull <= 0) {
        console.log("Love All!");
        endGame = true;
      }
    } else if (ans == "n") {
      runAway(player);
      endGame = true;
    }
  }
} else if (newGame == "n") {
  console.log("Thank You For Playing!");
}

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
// console.log(red, blue);y
