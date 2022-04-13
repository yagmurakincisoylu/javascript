const services = [];

const washCarBtn = document.getElementById("washCarBtn");
const mowLawnBtn = document.getElementById("mowLawnBtn");
const pullWeedsBtn = document.getElementById("pullWeedsBtn");

const serviceOne = document.getElementById("serviceOne");
const serviceTwo = document.getElementById("serviceTwo");
const serviceThree = document.getElementById("serviceThree");

const removeBtnOne = document.getElementById("removeBtnOne");
const removeBtnTwo = document.getElementById("removeBtnTwo");
const removeBtnThree = document.getElementById("removeBtnThree");

const sendBtn = document.getElementById("sendBtn");


const totalAmount = document.getElementById("totalAmount");
totalAmount.textContent = `$0`;

// washCarBtn.disabled = false;
// mowLawnBtn.disabled = false;
// pullWeedsBtn.disabled = false;

const calTotal = (priceOne, priceTwo, priceThree) => {
    return  totalAmount.textContent = priceOne + priceTwo + priceThree;
}

washCarBtn.addEventListener("click", () => {
    washCarBtn.disabled = true;
    services.push("Wash Car");
    console.log(services);
    serviceOne.style.visibility = "visible";
    calTotal(10, 0, 0)
})

mowLawnBtn.addEventListener("click", () => {
    mowLawnBtn.disabled = true;
    services.push("Mow Lawn");
    console.log(services);
    serviceTwo.style.visibility = "visible";
    calTotal(0, 20, 0)
})

pullWeedsBtn.addEventListener("click", () => {
    pullWeedsBtn.disabled = true;
    services.push("Pull Weeds");
    console.log(services);
    serviceThree.style.visibility = "visible";
    calTotal(0, 0, 30)
})

// remove buttons

removeBtnOne.addEventListener("click", () => {
    serviceOne.style.visibility = "hidden";
    washCarBtn.disabled = false;
})

removeBtnTwo.addEventListener("click", () => {
    serviceTwo.style.visibility = "hidden";
    mowLawnBtn.disabled = false;
})

removeBtnThree.addEventListener("click", () => {
    serviceThree.style.visibility = "hidden";
    pullWeedsBtn.disabled = false;
})

// send button

sendBtn.addEventListener("click", () => {
    serviceOne.style.visibility = "hidden";
    washCarBtn.disabled = false;
    serviceTwo.style.visibility = "hidden";
    mowLawnBtn.disabled = false;
    serviceThree.style.visibility = "hidden";
    pullWeedsBtn.disabled = false;
    totalAmount.textContent = `$0`;
})


