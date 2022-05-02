const passOne = document.getElementById("passOne")
const passTwo = document.getElementById("passTwo")
const passThree = document.getElementById("passThree")
const passFour = document.getElementById("passFour")
const genBtn = document.getElementById("genBtn");
const passLength = document.getElementById("passLength")
const output = document.getElementById("output")
const tooltipText = document.querySelectorAll(".tooltip-text");

passLength.addEventListener("input", () => {
    output.textContent = passLength.value;
});

console.log(typeof passLength.value)

const generatePassword = (password) => {
    const length = Number(passLength.value),
        startPoint = 33,
        endPoint = 127;
    let retVal = "";
    for(let i = 0; i < length; i++){
        retVal += String.fromCharCode((Math.floor(Math.random() * (endPoint - startPoint)) + startPoint));
    }
    password.value = retVal;

    for (let i = 0; i < tooltipText.length; i++) {
        tooltipText[i].textContent = `Copy`;
    }
};

genBtn.addEventListener("click", () => {
    generatePassword(passOne);
    generatePassword(passTwo);
    generatePassword(passThree);
    generatePassword(passFour);
});

const copyPass = (passID, i) => {
    passID.select();
    passID.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passID.value);
};

const resetCopiedText = (n) => {
    for (let i = 0; i < tooltipText.length; i++) {
        tooltipText[i].textContent = `Copy`;
    }
    
    tooltipText[n].textContent = `Copied`;
}

passOne.addEventListener("click", () => {
    const copyText = document.getElementById("passOne");
    const indexNumber = 0;
    copyPass(copyText, indexNumber);
    resetCopiedText(indexNumber);
});

passTwo.addEventListener("click", () => {
    const copyText = document.getElementById("passTwo");
    const indexNumber = 1;
    copyPass(copyText, indexNumber);
    resetCopiedText(indexNumber);
});

passThree.addEventListener("click", () => {
    const copyText = document.getElementById("passThree");
    const indexNumber = 2;
    copyPass(copyText, indexNumber);
    resetCopiedText(indexNumber);
});

passFour.addEventListener("click", () => {
    const copyText = document.getElementById("passFour");
    const indexNumber = 3;
    copyPass(copyText, indexNumber);
    resetCopiedText(indexNumber);
});




