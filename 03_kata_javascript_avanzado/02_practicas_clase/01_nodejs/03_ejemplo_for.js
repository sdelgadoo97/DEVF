
console.log("Primer Ejercicio");

const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

const filtrarNumeros = (arr) => {
    return arr.filter(elemento => typeof elemento === 'number');
};

console.log("Elementos que son números:");
filtrarNumeros(arreglo).forEach(numero => console.log(numero));


console.log("Segundo Ejercicio");

console.log("Numeros impares del 0 al 50");

for (let i = 0; i < 51; i++) {
    if(i % 2 !== 0) {
        console.log(i + " impar residuo:" + i % 2);
    }
    else {
        console.log(i+ " par residuo:" + i % 2);
    }
}