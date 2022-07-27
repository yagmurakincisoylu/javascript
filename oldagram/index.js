import posts from "./data.js"

const postsContainer = document.getElementById("postsContainer");
const heart = "images/icon-heart.png";
const redHeart = "images/icon-heart-red.png"

function renderPosts() {
    for(let i = 0; i < posts.length; i++) {
        postsContainer.innerHTML += `
            <div class="profile-container">
                <div class="profile-details">
                    <img src="${posts[i].avatar}" alt="profile picture" class="profile-img">
                    <div>
                        <p class="profile-name">${posts[i].name}</p>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                
                <div class="post-container">
                    <div class="post-img-container">
                        <img src="${posts[i].post}" class="post-img">
                        <img src="${redHeart}" class="heart-animation">
                    </div>
    
                    <div class="post-details">
                        <div class="icon-container">
                            <img src="${heart}" class="heart">
                            <img src="images/icon-comment.png">
                            <img src="images/icon-dm.png">
                        </div>
    
                        <div class="comment-container">
                            <p class="likes"><span class="likes-count">${posts[i].likes}</span> likes</p>
                            <p>
                                <strong>${posts[i].username}</strong> ${posts[i].comment}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
renderPosts();

let heartBtn = document.querySelectorAll(".heart");
let likeCountHtml = document.querySelectorAll(".likes-count");
let postImg = document.querySelectorAll(".post-img");
let heartAnimationHtml = document.querySelectorAll(".heart-animation");

function likePost(i) {
    if(!posts[i].isLiked) {
        posts[i].likes++;
        likeCountHtml[i].textContent = `${posts[i].likes}`;
        heartBtn[i].src = `${redHeart}`
        posts[i].isLiked = true;
    } else {
        posts[i].likes--;
        likeCountHtml[i].textContent = `${posts[i].likes}`;
        heartBtn[i].src = `${heart}`
        posts[i].isLiked = false;
    }
}

function heartAnimation(i) {
    if(posts[i].isLiked) {
        heartAnimationHtml[i].classList.add("animation");
    } else {
        heartAnimationHtml[i].classList.remove("animation");
    }
}

for(let i = 0; i < heartBtn.length; i++) {
    heartBtn[i].addEventListener("click", () => {
        likePost(i);
    })
}

for(let i = 0; i < postImg.length; i++) {
    postImg[i].addEventListener("dblclick", () => {
        likePost(i);
        heartAnimation(i)
    })
}






