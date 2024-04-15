function despues () {
    console.log ("pasarons 5 segundos");
}

console.log("antes del timeout");
setTimeout(despues, 5000);
console.log("despues del timeout");