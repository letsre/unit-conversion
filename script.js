const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("input-number");

convertBtn.addEventListener("click", function () {
  getMetricConversion(inputNumber.value);
});

function getMetricConversion(value) {
  //length
  getLength(value);

  //volume
  getVolume(value);

  //mass
  getMass(value);
}

function getLength(num) {
  let meters = num / 3.281; // feet to meters
  let feet = num * 3.281; //meters to feet

  length.innerHTML = `${num} meters = ${feet.toFixed(
    3
  )} feet | ${num} feet = ${meters.toFixed(3)} feet`;
}

function getVolume(num) {
  let liters = num / 0.264; //gallon to liters
  let gallon = num * 0.264; // liters to gallon

  volume.innerHTML = `${num} liters = ${gallon.toFixed(
    3
  )} gallons | ${num} gallons = ${liters.toFixed(3)} liters`;
}

function getMass(num) {
  let kilograms = num / 2.204; // pounds to kilograms
  let pounds = num * 2.204; // kilograms to pounds

  mass.innerHTML = `${num} kilos = ${pounds.toFixed(
    3
  )} pounds | ${num} pounds = ${kilograms.toFixed(3)} kilos`;
}
