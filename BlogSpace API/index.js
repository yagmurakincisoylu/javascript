const newPostForm = document.getElementById("newPostForm");
const postTitle = document.getElementById("postTitle");
const postBody = document.getElementById("postBody");
const postBtn = document.getElementById("postBtn");
const blogContainer = document.getElementById("blogContainer");

let postsArray = []

const renderPosts = () => {
  let postsHtml = "";

  postsArray.map(post => {
    const {title, body} = post;

    postsHtml += `
    <hr />
    <div class="blog-post">
      <h3>${title}</h3>
      <p>${body.slice(0, 1).toUpperCase()}${body.slice(1)}.</p>
    </div>
    `;

    blogContainer.innerHTML = postsHtml;
  })
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(res => res.json())
  .then(data => getPlaceholderPosts(data))
  .catch(err => console.error(err))

const getPlaceholderPosts = data => {
  postsArray = data.slice(0, 5);
  renderPosts();
}

newPostForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newPostTitle = postTitle.value;
  const newPostBody = postBody.value;

  const newPostObj = {
    title: newPostTitle,
    body: newPostBody
  }
  
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(newPostObj),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      postsArray.unshift(data);
      renderPosts();
      newPostForm.reset();
    })
    .catch(err => console.error(err));
});

