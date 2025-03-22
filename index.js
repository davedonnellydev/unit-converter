/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertButton = document.querySelector("#convert-btn");
const numberInput = document.querySelector("#num-input");
const metersFeetPara = document.querySelector("#meters-feet-text");
const litersGallonsPara = document.querySelector("#liters-gallons-text");
const kilosPoundsPara = document.querySelector("#kilos-pounds-text");

const toValues = {
    feet: 0,
    meters: 0,
    liters: 0,
    gallons: 0,
    kilos: 0,
    pounds: 0
}

function convertInput() {
    const fromValue = document.querySelector("#num-input").value ? document.querySelector("#num-input").value : 0

    toValues.feet = Number(fromValue) * 3.28084
    toValues.meters = Number(fromValue) * 0.3048
    toValues.liters = Number(fromValue) * 3.78541
    toValues.gallons = Number(fromValue) * 0.264172
    toValues.kilos = Number(fromValue) * 0.45359237
    toValues.pounds = Number(fromValue) * 2.20462

    render(fromValue)

}

function render(inputNum = 0) {
    const metersFeetText = `${inputNum} meters = ${toValues.feet.toFixed(3)} feet | ${inputNum} feet = ${toValues.meters.toFixed(3)} meters`
    const litersGallonsText = `${inputNum} liters = ${toValues.gallons.toFixed(3)} gallons | ${inputNum} gallons = ${toValues.liters.toFixed(3)} liters`
    const kilosPoundsText = `${inputNum} kilos = ${toValues.pounds.toFixed(3)} pounds | ${inputNum} pounds = ${toValues.kilos.toFixed(3)} kilos`

    metersFeetPara.textContent = metersFeetText
    litersGallonsPara.textContent = litersGallonsText
    kilosPoundsPara.textContent = kilosPoundsText

}

render()

convertButton.addEventListener("click", convertInput);
numberInput.addEventListener("focus", function() {numberInput.value = null})
