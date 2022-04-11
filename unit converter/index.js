const meter = document.getElementById("meter");
const feet = document.getElementById("feet");
const liter = document.getElementById("liter");
const gallon = document.getElementById("gallon");
const kilo = document.getElementById("kilo");
const pound = document.getElementById("pound");
const inputEl = document.getElementById("input-el");

// function converter(valNum) {
//     let feetValue = (valNum * 3.2808399).toFixed(3);
//     meter.textContent = `${valNum} meters = ${feetValue} feet`;

//     let meterValue = (valNum / 3.2808399).toFixed(3);
//     feet.textContent = `${valNum} feet = ${meterValue} meters`;

//     let gallonValue = (valNum / 3.78541178).toFixed(3);
//     liter.textContent = `${valNum} liters = ${gallonValue} gallons`;

//     let literValue = (valNum * 3.78541178).toFixed(3);
//     gallon.textContent = `${valNum} gallons = ${literValue} liters`;

//     let poundValue = (valNum * 2.20462262).toFixed(3);
//     kilo.textContent = `${valNum} kilos = ${poundValue} pounds`;

//     let kiloValue = (valNum / 2.20462262).toFixed(3);
//     pound.textContent = `${valNum} pounds = ${kiloValue} kilos`;
// }

inputEl.addEventListener("input", () => {
    const inputElValue = inputEl.value;

    { // meters - feet
        { //meters to feet
            let sum = ((inputElValue) * 3.2808399).toFixed(3);
            let text = `${inputElValue} meters = ${sum} feet`;
            meter.textContent = text;
        }

        { // feet to meters
            let sum = ((inputElValue) / 3.2808399).toFixed(3);
            let text = `${inputElValue} feet = ${sum} meters`;
            feet.textContent = text;
        }
    }

    { // liters - galons
        { // liters to gallons
            let sum = ((inputElValue) / 3.78541178).toFixed(3);
            let text = `${inputElValue} liters = ${sum} gallons`;
            liter.textContent = text;
        }

        { // gallons to liters
            let sum = ((inputElValue) * 3.78541178).toFixed(3);
            let text = `${inputElValue} gallons = ${sum} liters`;
            gallon.textContent = text;
        }
    }

    { // kilos - pounds
        { // kilos to pounds
            let sum = ((inputElValue) * 2.20462262).toFixed(3);
            let text = `${inputElValue} kilos = ${sum} pounds`;
            kilo.textContent = text;
        }

        { // pounds to kilos
            let sum = ((inputElValue) / 2.20462262).toFixed(3);
            let text = `${inputElValue} pounds = ${sum} kilos`;
            pound.textContent = text;
        }
    }
})

