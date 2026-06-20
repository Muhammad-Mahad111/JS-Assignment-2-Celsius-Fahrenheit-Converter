temp = prompt("Lets perform Temprature Conversion.\nPlease enter a temprature: ");
temp = parseFloat(temp);

let Celsius = ((temp - 32) * 5 / 9);
Celsius = parseFloat(Celsius);
Celsius = Math.round(Celsius);

let Fehrenheit = (temp * (9/5) + 32);
Fehrenheit = parseFloat(Fehrenheit);
Fehrenheit = Math.round(Fehrenheit)

alert("Temprature: " + temp + " °F is: " + Celsius + " °C.\n"+ "Temprature: " + temp + " °C is: " + Fehrenheit + " °F.");
// console.log(typeof temp)
// console.log(typeof Celsius)