import Person from "./Person.js";

const persona1 = new Person("Pepito", "Perez", '1990-05-23T02:31:10.878Z',34, 12345678);
console.log(`----------- Inicia Ejecución ${persona1.name} -----------`);
persona1.legalAge();
persona1.birth();

const persona2 = new Person("Fulano", "Hernandez", '2012-05-10T02:31:10.878Z',13, 27473017);
console.log(`----------- Inicia Ejecución ${persona2.name} -----------`);
persona2.legalAge();
persona2.birth();