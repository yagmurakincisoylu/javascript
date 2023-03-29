import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.diceHtml = getDicePlaceholderHtml(this.diceCount);
    this.maxHealth = this.health;
  }

  setDiceHtml() {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceHtml = this.currentDiceScore.map(num => 
      `<div class="dice">${num}</div>`).join("")};

  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, num) => total + num);
    this.isDead = false;
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.isDead = true;
    };
  };

  getHealthBarHtml() {
    const percent = getPercentage(this.health, this.maxHealth);
    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? "danger" : "" }" style="width: ${percent}%;"></div>
      </div>
    `;
  };

  getCharacterHtml() {
    const {roleName, imgSrc, health, diceHtml} = this;

    const healthBar = this.getHealthBarHtml();
    
    return `
      <div class="character-card">
        <h4 class="name">${roleName}</h4>
        <img class="avatar" src="${imgSrc}"/>
        <p class="health">Health: <b>${health}</b></p>
        ${healthBar}
        <div class="dice-container">
          ${diceHtml}
        </div>
      </div>
    `;
  };
};

export default Character;