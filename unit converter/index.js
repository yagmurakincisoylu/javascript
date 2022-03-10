let meter = document.getElementById("meter")
let feet = document.getElementById("feet")
let liter = document.getElementById("liter")
let gallon = document.getElementById("gallon")
let kilo = document.getElementById("kilo")
let pound = document.getElementById("pound")


function converter(valNum) {
    let feetValue = (valNum * 3.2808399).toFixed(3);
    meter.textContent = valNum + " " + "meters" + " " + "=" + feetValue + " " + "feet";

    let meterValue = (valNum / 3.2808399).toFixed(3);
    feet.textContent = valNum + " " + "feet" + " " + "=" + meterValue + " " + "meters";

    let gallonValue = (valNum / 3.78541178).toFixed(3);
    liter.textContent = valNum + " " + "liters" + " " + "=" + gallonValue + " " + "gallons";

    let literValue = (valNum * 3.78541178).toFixed(3);
    gallon.textContent = valNum + " " + "gallons" + " " + "=" + literValue + " " + "liters";

    let poundValue = (valNum * 2.20462262).toFixed(3);
    kilo.textContent = valNum + " " + "kilos" + " " + "=" + poundValue + " " + "pounds";

    let kiloValue = (valNum / 2.20462262).toFixed(3);
    pound.textContent = valNum + " " + "pounds" + " " + "=" + kiloValue + " " + "kilos";
}

