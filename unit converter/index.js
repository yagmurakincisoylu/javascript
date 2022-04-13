const METER_FEET_MULTIPLIER = 3.2808399;
const LITER_GALLON_MULTIPLIER = 3.2808399;
const KILO_POUND_MULTIPLIER = 2.20462262;

const meter = document.getElementById("meter");
const feet = document.getElementById("feet");
const liter = document.getElementById("liter");
const gallon = document.getElementById("gallon");
const kilo = document.getElementById("kilo");
const pound = document.getElementById("pound");
const inputEl = document.getElementById("inputEl");

const printResult = (inValue, inUnit, outValue, outUnit) => {
    return `${inValue} ${inUnit} = ${outValue} ${outUnit}`;
}

inputEl.addEventListener("input", () => {
    const inputElValue = inputEl.value;

    const sumMeter = ((inputElValue) * METER_FEET_MULTIPLIER).toFixed(3);
    meter.textContent = printResult(inputElValue, "meters", sumMeter, "feet");

    const sumFeet = ((inputElValue) / METER_FEET_MULTIPLIER).toFixed(3);
    feet.textContent = printResult(inputElValue, "feet", sumFeet, "meters");

    const sumLiter = ((inputElValue) / LITER_GALLON_MULTIPLIER).toFixed(3);
    liter.textContent = printResult(inputElValue, "liters", sumLiter, "gallons");

    const sumGallon = ((inputElValue) * LITER_GALLON_MULTIPLIER).toFixed(3);
    gallon.textContent = printResult(inputElValue, "gallons", sumGallon, "liter");

    const sumKilo = ((inputElValue) * KILO_POUND_MULTIPLIER).toFixed(3);
    kilo.textContent = printResult(inputElValue, "kilos", sumKilo, "pounds");

    const sumPound = ((inputElValue) / KILO_POUND_MULTIPLIER).toFixed(3);
    pound.textContent = printResult(inputElValue, "pounds", sumPound, "kilos");
})