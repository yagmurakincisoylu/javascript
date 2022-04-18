const passOne = document.getElementById("passOne")
const passTwo = document.getElementById("passTwo")
const passThree = document.getElementById("passThree")
const passFour = document.getElementById("passFour")
const genBtn = document.getElementById("genBtn");
const passLength = document.getElementById("passLength")
const output = document.getElementById("output")
const tooltipText = document.querySelectorAll(".tooltip-text");

passLength.oninput = function() {
    output.textContent = this.value;
}

const generatePassword = (password) => {
    let length = Number(passLength.value),
        retVal = "",
        startPoint = 33,
        endPoint = 127;
    for(let i = 0; i < length; i++){
        retVal += String.fromCharCode((Math.floor(Math.random() * (endPoint - startPoint)) + startPoint));
    }
    password.value = retVal;

    for (let i = 0; i < tooltipText.length; i++) {
        tooltipText[i].textContent = `Copy`;
    }
}

genBtn.addEventListener("click", () => {
    generatePassword(passOne);
    generatePassword(passTwo);
    generatePassword(passThree);
    generatePassword(passFour);
})

const copyPass = (passID, i) => {
    passID.select();
    passID.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passID.value);

    tooltipText[i].textContent = `Copied`;
}

passOne.addEventListener("click", () => {
    const copyText = document.getElementById("passOne");
    copyPass(copyText, 0);

    tooltipText[1].textContent = `Copy`;
    tooltipText[2].textContent = `Copy`;
    tooltipText[3].textContent = `Copy`;
})

passTwo.addEventListener("click", () => {
    const copyText = document.getElementById("passTwo");
    copyPass(copyText, 1);

    tooltipText[0].textContent = `Copy`;
    tooltipText[2].textContent = `Copy`;
    tooltipText[3].textContent = `Copy`;
})

passThree.addEventListener("click", () => {
    const copyText = document.getElementById("passThree");
    copyPass(copyText, 2);

    tooltipText[0].textContent = `Copy`;
    tooltipText[1].textContent = `Copy`;
    tooltipText[3].textContent = `Copy`;
})

passFour.addEventListener("click", () => {
    const copyText = document.getElementById("passFour");
    copyPass(copyText, 3);

    tooltipText[0].textContent = `Copy`;
    tooltipText[1].textContent = `Copy`;
    tooltipText[2].textContent = `Copy`;
})