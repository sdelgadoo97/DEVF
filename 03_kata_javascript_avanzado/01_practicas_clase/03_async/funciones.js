function saludar () {
    console.log ("Hola Mundo");
}

let saludar2 = function() {
    console.log ("Hola Mundo 2");
}

saludar2 = function(){
    console.log ("Hola Mundo con modificaciones posteriores")
}

let sumar = function (a,b){
    return a + b
}

saludar();

saludar2();

let num1 = 5;
let num2 = 10;

console.log(sumar(num1,num2));

function saludarfunction (funct, nombre){
    funct(nombre);
}

function saludoamigable(nombre){
    console.log("Hola " + nombre);
}

function saludoformal(nombre){
    console.log("Doctor/a " + nombre + ", Buen día.");
}

function saludocercano(nombre){
    console.log("Hello Bro " + nombre);
}

function supersaludo (nombre){
    saludoamigable (nombre);
    saludoformal (nombre);
    saludocercano (nombre);
}

console.log ("-------------------------------------------------");

saludarfunction (saludoamigable, "jose antonio");

console.log ("-------------------------------------------------");

saludarfunction(supersaludo, 'Sergio Delgado');

