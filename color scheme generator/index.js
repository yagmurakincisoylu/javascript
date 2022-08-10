const color = document.getElementById("color");
const mode = document.getElementById("mode");
const getSchemeBtn = document.getElementById("getSchemeBtn");
const colorsContainer = document.getElementById("colorsContainer");
const tooltip = document.getElementById("tooltip");

getSchemeBtn.addEventListener("click", async (event) => {
  event.preventDefault()

  const colorValue = (color.value).slice(1);
  const modeValue = mode.value;

  const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}&count=5`);
  const data = await response.json()

  for(let i = 0; i < colorsContainer.children.length; i++) {
    colorsContainer.children[i].innerHTML = `
      <div class="color" style="background-color: ${data.colors[i].hex.value}"></div>
      <p id="colorText${i}">${data.colors[i].hex.value}</p>
    `;
  }

})

function copyColorValue(element) {
  let value = element.children[1].textContent;
  navigator.clipboard.writeText(value);
  console.log(value);

  tooltip.style.display = "block";

  setTimeout(() => {
    tooltip.style.display = "none";
  },300)
}
