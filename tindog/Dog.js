
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setIsLiked(bool) {
    this.hasBeenSwiped = true;

    if(this.hasBeenLiked = bool) {
      return `
        <img src="./images/badge-like.png">
      `
    } else {
      return `
        <img src="./images/badge-nope.png">
      `
    }
  }

  getProfileHtml() {
    const {name, avatar, age, bio} = this;
    return `
      <div class="badge"></div>
      <img src="${avatar}" class="profile-img">
      <div class="profile-details">
          <p class="profile-name">${name}, ${age}</p>
          <p class="profile-comment">${bio}</p>
      </div>
    `
  }

}

export default Dog;