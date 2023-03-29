import characterData from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "duck", "elephant"];
let isWaiting = false;

const getNewMonster = () => {
  const nextMonsterData = characterData[monstersArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

const render = () => {
  document.getElementById("wizard").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
};

const attack = () => {
  if(!isWaiting) {
    wizard.setDiceHtml();
    monster.setDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();

    if(wizard.isDead) {
        endGame();
    } else if (monster.isDead) {
      isWaiting = true;
      if (monstersArray.length > 0) {
        setTimeout(()=> {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1500);
      } else {
          endGame();
      } 
    }
  }
  
}

const endGame = () => {
  isWaiting = true
  const endMessage = wizard.health === 0 && monster.health === 0 ? "All creatures are dead" : 
                    wizard.health > 0 ? `The ${wizard.roleName} Wins` : `The ${monster.roleName} is Victorious`;

  const endEmoji = wizard.health === 0 && monster.health === 0 ? "☠️" : 
  wizard.health > 0 ? `${wizard.emoji}` : `${monster.emoji}`;

  setTimeout(()=> {
    document.body.innerHTML = `
    <div class="end-game">
          <h2>Game Over</h2>
          <h3>${endMessage}</h3>
          <p class="end-emoji">${endEmoji}</p>
      </div>
      `;
  },1500);

}

const attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener("click", attack);

const wizard = new Character(characterData.wizard);
let monster = getNewMonster();

render();

