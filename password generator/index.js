const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
const passThree = document.getElementById("pass-three")
const passFour = document.getElementById("pass-four")
const genBtn = document.getElementById("generate-btn");
const passLength = document.getElementById("pass-length")
const output = document.getElementById("output")

passLength.oninput = function() {
    output.textContent = this.value;
}

genBtn.addEventListener("click", () => {
    let length = passLength.value,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?_>£#$½{[]}";
        
    {
        retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        passOne.value = retVal;

        const tooltip = document.getElementById("tooltip-one");
        tooltip.textContent = `Copy`;
    }

    {
        retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        passTwo.value = retVal;

        const tooltip = document.getElementById("tooltip-two");
        tooltip.textContent = `Copy`;
    }

    {
        retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        passThree.value = retVal;

        const tooltip = document.getElementById("tooltip-three");
        tooltip.textContent = `Copy`;
    }

    {
        retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        passFour.value = retVal;

        const tooltip = document.getElementById("tooltip-four");
        tooltip.textContent = `Copy`;
    }

})


passOne.addEventListener("click", () => {
    const copyText = document.getElementById("pass-one");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    const tooltip = document.getElementById("tooltip-one");
    tooltip.textContent = `Copied!`;
})

passTwo.addEventListener("click", () => {
    const copyText = document.getElementById("pass-two");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    const tooltip = document.getElementById("tooltip-two");
    tooltip.textContent = `Copied!`;
})

passThree.addEventListener("click", () => {
    const copyText = document.getElementById("pass-three");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    const tooltip = document.getElementById("tooltip-three");
    tooltip.textContent = `Copied!`;
})

passFour.addEventListener("click", () => {
    const copyText = document.getElementById("pass-four");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    const tooltip = document.getElementById("tooltip-four");
    tooltip.textContent = `Copied!`;
})


