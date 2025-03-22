/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertButton = document.querySelector("#convert-btn");
const metersFeetPara = document.querySelector("#meters-feet-text");
const litersGallonsPara = document.querySelector("#liters-gallons-text");
const kilosPoundsPara = document.querySelector("#kilos-pounds-text");

function convertInput() {
    const inputValue = document.querySelector("#num-input")

    console.log(metersFeetPara)
    console.log(litersGallonsPara)
    console.log(kilosPoundsPara)

    console.log(inputValue.value)

    let metersFeetText = `${inputValue.value} meters = 65.616 feet | ${inputValue.value} feet = 6.096 meters`
    let litersGallonsText = `${inputValue.value} liters = 5.284 gallons | ${inputValue.value} gallons = 75.708 liters`
    let kilosPoundsText = `${inputValue.value} kilos = 44.092 pounds | ${inputValue.value} pounds = 9.072 kilos`

    console.log(metersFeetText)
    console.log(litersGallonsText)
    console.log(kilosPoundsText)


}

convertButton.addEventListener("click", convertInput);