function actividad_1() {
    let respuesta = prompt('¿Eres bellisimo/a?')

    if (respuesta.toLowerCase() == 'si') {
        alert('Ciertamente');
        return console.log('Ciertamente');
    } else {
        alert('No Te Creo');
        return console.log('No Te Creo');
    }
}

function actividad_2() {
    let respuesta = prompt('Por favor digite un numero');
    let num

    if ( typeof Number(respuesta) == 'number' && isNaN(respuesta) == false) {
        num = Number(respuesta);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }  

    if (Number(num) % 2 == 0) {
        alert(`${num} núm es divisible entre 2`);  
        return console.log(`${num} núm es divisible entre 2`);    
    } else {    
        alert(`${num} núm no es divisible entre 2`);
        return console.log(`${num} núm no es divisible entre 2`);
    }
}

function actividad_3() {
    let respuesta = prompt('Por favor digite un numero');
    let num

    if ( typeof Number(respuesta) == 'number' && isNaN(respuesta) == false) {
        num = Number(respuesta);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }  

    if (Number(num) % 2 == 0) {
        alert(`${num} es par`);  
        return console.log(`${num} es par`);    
    } else {    
        alert(`${num} es impar`);
        return console.log(`${num} es impar`);
    }
}

function actividad_4() {
    let NumeroCliente = prompt('Por favor digite el numero de cliente');
    let num

    if ( typeof Number(NumeroCliente) == 'number' && isNaN(NumeroCliente) == false) {
        num = Number(NumeroCliente);
    } else {
        alert('Por favor digite un numero de cliente válido'); 
        return console.log('Por favor digite un numero de cliente válido');
    }  

    if (num == 1000) {
        alert('Ganaste un premio');
        return console.log('Ganaste un premio.');
    } else {
        return alert('Lo sentimos, sigue participando.')
    }
}

function actividad_5() {
    let respuesta1 = prompt('Por favor digite el primer numero');
    let num1

    if ( typeof Number(respuesta1) == 'number' && isNaN(respuesta1) == false) {
        num1 = Number(respuesta1);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }

    let respuesta2 = prompt ('Por favor digite el segundo numero');
    let num2

    if ( typeof Number(respuesta2) == 'number' && isNaN(respuesta2) == false) {
        num2 = Number(respuesta2);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }

    if (num1 > num2) {
        alert(`${num1} es mayor que ${num2}`);
        return console.log(`${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        alert(`${num2} es mayor que ${num1}`);
        return console.log(`${num2} es mayor que ${num1}`);
    }
}

function actividad_6() {
    let respuesta1 = prompt('Por favor digite el primer numero');
    let num1

    if ( typeof Number(respuesta1) == 'number' && isNaN(respuesta1) == false) {
        num1 = Number(respuesta1);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }

    let respuesta2 = prompt ('Por favor digite el segundo numero');
    let num2

    if ( typeof Number(respuesta2) == 'number' && isNaN(respuesta2) == false) {
        num2 = Number(respuesta2);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }

    let respuesta3 = prompt ('Por favor digite el tercer numero');
    let num3

    if ( typeof Number(respuesta3) == 'number' && isNaN(respuesta3) == false) {
        num3 = Number(respuesta3);
    } else {
        alert('Por favor digite un numero'); 
        return console.log('Por favor digite un numero');
    }

    if (num1 > num2 && num1 > num3) {
        alert(`${num1} es mayor que ${num2} y ${num3}`);
        return console.log(`${num1} es mayor que ${num2} y ${num3}`);
    } else if (num2 > num1 && num2 > num3) {
        alert(`${num2} es mayor que ${num1} y ${num3}`);
        return console.log(`${num2} es mayor que ${num1} y ${num3}`);
    } else if (num3 > num1 && num3 > num2) {
        alert(`${num3} es mayor que ${num1} y ${num2}`);
        return console.log(`${num3} es mayor que ${num1} y ${num2}`);
    } else if (num1==num2 && num1>num3) {
        alert(`${num1} igual a ${num2} y mayor que ${num3}`);
        return console.log(`${num1} igual a ${num2} y mayor que ${num3}`);
    } else if (num1==num3 && num1>num2) {
        alert(`${num1} igual a ${num3} y mayor que ${num2}`);
        return console.log(`${num1} igual a ${num3} y mayor que ${num2}`);
    } else if (num2==num3 && num2>num1) {
        alert(`${num2} igual a ${num3} y mayor que ${num1}`);
        return console.log(`${num2} igual a ${num3} y mayor que ${num1}`);
    } else if (num1==num2 && num1==num3) {
        alert(`${num1} igual a ${num2} y igual a ${num3}`);
        return console.log(`${num1} igual a ${num2} y igual a ${num3}`);
    }
}


function actividad_7() {
    let respuesta = prompt('Por favor digite el dia de la semana');
    let diasemana = respuesta.toLowerCase().trim();

    console.log (diasemana.toLowerCase());

    if (diasemana != 'lunes' && diasemana != 'viernes' && diasemana != 'sabado' && diasemana != 'domingo' && diasemana != 'martes' && diasemana != 'miercoles' && diasemana != 'jueves') {
        alert('Por favor digite un dia de la semana válido');
        return console.log('Por favor digite un dia de la semana válido');
    }

    if (diasemana == 'lunes') {
        alert('Hoy es lunes, con toda la energia!');
        return console.log('Hoy es lunes, con toda la energia!');
    } else if (diasemana == 'viernes') {
        alert('Hoy es viernes, a cerrar con broche de oro!');
        console.log('Hoy es viernes, a cerrar con broche de oro!');
    } else if (diasemana== 'sabado' || diasemana == 'domingo') {
        alert('Hoy es fin de semana, a descansar!');
        console.log('Hoy es fin de semana, a descansar!');
    } else {
        alert('Estamos en medio de la semana, a trabajar duro por nuestras metas!');
        console.log('Estamos en medio de la semana, a trabajar darto por nuestras metas!');
    }

}

function actividad_8() {
    let respuesta = prompt('Por favor digite la calificación');
    let num

    if ( typeof Number(respuesta) == 'number' && isNaN(respuesta) == false) {
        num = Number(respuesta);
    } else {
        alert('Por favor digite una calificación válida'); 
        return console.log('Por favor digite una calificación válida');
    }

    if (num <1 || num > 10) {
        alert('Por favor digite una calificación entre 1 y 10');
        return console.log('Por favor digite una calificación entre 1 y 10');
    }

    if (num < 6) {
        alert ('Reprobado');
        return console.log ('Reprobado');

    } else if (num >= 6 && num <= 8) {
        alert ('Regular');
        return console.log ('Regular');

    }  else if (num == 9){
        alert ('Bueno');
        return console.log('Bueno');

    } else {
        alert ('Excelente');
        return console.log ('Excelente');
    }

}

function actividad_9() {   
    const MenuHeladeria = [
        {
            id:1,
            opcion: 'Sin topping',
            precio: 50

        }
        ,{
            id:2,
            opcion:'Topping de Oreo',
            precio: 10
        }
        ,{
            id:3,
            opcion:'Topping de KitKat',
            precio: 15
        }
        ,{
            id:4,
            opcion:'Topping de Brownie',
            precio: 20
        }
    ]

    let respuesta = prompt(`Por favor digite el topping deseado:\n${MenuHeladeria.map((item, index) => `${index+1}. ${item.opcion}`).join('\n')}`);
    let opcion

    if ( typeof Number(respuesta) == 'number' && isNaN(respuesta) == false) {
        opcion = Number(respuesta) ;

        let item = MenuHeladeria.find(item => item.id == opcion);

        if (opcion == 1) {
            alert(`El topping escodido es: ${item.opcion} \nEl total a pagar es de $${item.precio} MXN`);
            return console.log(`El topping escodido es: ${item.opcion} \nEl total a pagar es de $${item.precio} MXN`);
        } else {
            let valortotal = Number(item.precio) + Number(MenuHeladeria.find(item => item.id == 1).precio);
            alert(`El topping escodido es: ${item.opcion} \nEl total a pagar es de $${valortotal} MXN`);
            return console.log(`El topping escodido es: ${item.opcion} \nEl total a pagar es de $${valortotal} MXN`);
        }

    } else {
        alert('Por favor digite una opcion valida'); 
        return console.log('Por favor digite una opcion valida');
    }
}

function actividad_10() {
    const programaseducativos = [
        {
            id:1,
            programa: 'Course',
            precio: 4999,
            duracion: 2
        },
        {
            id:2,
            programa: 'Carrera',
            precio: 3999,
            duracion: 6
        },
        {
            id:3,
            programa: 'Master',
            precio: 2999,
            duracion: 12
        }
    ]
    const becas = [
        {
            id:1,
            nombre: 'Beca Facebook',
            descuento: 0.2
        },
        {
            id:2,
            nombre: 'Beca Google',
            descuento: 0.15
        },
        {
            id:3,
            nombre: 'Beca Jesua',
            descuento: 0.5
        },
        {
            id:4,
            nombre: 'Sin Beca',
            descuento: 0
        }
    ]

    alert('Bienvenido al programa educativo de CoderHouse.');
    console.log('Bienvenido al programa educativo de CoderHouse.');
    
    let respuesta1 = prompt(`Por favor digite el programa educativo deseado:\n${programaseducativos.map((item, index) => `${index+1}. ${item.programa}`).join('\n')}`);
    let opcionprograma

    if ( typeof Number(respuesta1) == 'number' && isNaN(respuesta1) == false) {
        opcionprograma = Number(respuesta1) ;
    } else {
        alert('Por favor digite una opcion valida');
        return console.log('Por favor digite una opcion valida');
    }

    let respuesta2 = prompt(`Por favor digite la beca obtenida:\n${becas.map((item, index) => `${index+1}. ${item.nombre}`).join('\n')}`);
    let opcionbeca

    if ( typeof Number(respuesta2) == 'number' && isNaN(respuesta2) == false) {
        opcionbeca = Number(respuesta2) ;
    } else {
        alert('Por favor digite una opcion valida');
       return console.log('Por favor digite una opcion valida');
    }

    let programaeducativo = programaseducativos.find(item => item.id == opcionprograma);
    let beca = becas.find(item => item.id == opcionbeca);

    if (beca.nombre=='Sin Beca') {
        alert(`El programa educativo elegido es: ${programaeducativo.programa}\nEl total a pagar mensual es de $${programaeducativo.precio} MXN\nLa duración del programa educativo es de ${programaeducativo.duracion} meses\nLa beca elegida es: ${beca.nombre} con un descuento de ${beca.descuento*100}%\nEl total a pagar es de $${programaeducativo.precio*programaeducativo.duracion} MXN`);

        return console.log(`El programa educativo elegido es: ${programaeducativo.programa}\nEl total a pagar mensual es de $${programaeducativo.precio} MXN\nLa duración del programa educativo es de ${programaeducativo.duracion} meses\nLa beca elegida es: ${beca.nombre} con un descuento de ${beca.descuento*100}%\nEl total a pagar es de $${programaeducativo.precio*programaeducativo.duracion} MXN`);
    } else if (beca.nombre == 'Beca Jesua' || beca.nombre == 'Beca Facebook' || beca.nombre == 'Beca Google') {
        
        let valortotal = (Number(programaeducativo.precio) - (Number(programaeducativo.precio)*Number(beca.descuento))).toFixed(2);

        alert(`El programa educativo elegido es: ${programaeducativo.programa}\nEl total a pagar mensual es de $${valortotal} MXN\nLa duración del programa educativo es de ${programaeducativo.duracion} meses\nLa beca elegida es: ${beca.nombre} con un descuento de ${beca.descuento*100}%\nEl total a pagar es de $${(valortotal*programaeducativo.duracion).toFixed(2)} MXN`)

        return console.log(`El programa educativo elegido es: ${programaeducativo.programa}\nEl total a pagar mensual es de $${valortotal} MXN\nLa duración del programa educativo es de ${programaeducativo.duracion} meses\nLa beca elegida es: ${beca.nombre} con un descuento de ${beca.descuento*100}%\nEl total a pagar es de $${(valortotal*programaeducativo.duracion).toFixed(2)} MXN`)
    }

}

function actividad_11() {
    
    alert('Bienvenido a viajes DevF');
    console.log('Bienvenido a viajes DevF');

    let respuesta1 = prompt('Por favor digite el tipo de vehiculo:\n1. Coche\n2. Moto\n3. Autobús');
    let tipovehiculo;

    if ( typeof Number(respuesta1) == 'number' && isNaN(respuesta1) == false) {
        tipovehiculo = Number(respuesta1) ;
    } else {
        alert('Por favor digite una opcion valida');
        return console.log('Por favor digite una opcion valida');
    }

    let respuesta2 = prompt('Por favor digite la cantidad de kilometros recorridos:');
    let kilometros;

    if ( typeof Number(respuesta2) == 'number' && isNaN(respuesta2) == false) {
        kilometros = Number(respuesta2) ;
    } else {
        alert('Por favor digite una opcion valida');
        return console.log('Por favor digite una opcion valida');
    }

    let extralitros;
    if (kilometros<100){
        extralitros = 5;
    } else {
        extralitros = 10;
    }

    if (tipovehiculo == 1) {

        let valorcoche = (kilometros*0.20).toFixed(2);
        let valortotal = Number(valorcoche) + Number(extralitros);

        alert (`El vehiculo elegido es: Coche \nEl valor por kilometro es de: $0.20 MXN \nEl valor de los extras por litro es de $${extralitros} MXN por los ${kilometros} kilometros recorridos \nEl valor total a pagar es de: $ ${valortotal} MXN`);
        
        return console.log(`El vehiculo elegido es: Coche \nEl valor por kilometro es de: $0.20 MXN \nEl valor de los extras por litro es de $${extralitros} MXN por los ${kilometros} kilometros recorridos \nEl valor total a pagar es de: $ ${valortotal} MXN`);

    } else if (tipovehiculo == 2) {

        let valormoto = (kilometros*0.10).toFixed(2);
        let valortotal = Number(valormoto) + Number(extralitros);

        alert(`El vehiculo elegido es: Moto \nEl valor por kilometro es de: $0.10 MXN \nEl valor de los extras por litro es de $${extralitros} MXN por los ${kilometros} kilometros recorridos \nEl valor total a pagar es de: $ ${valortotal} MXN`);
        
        return console.log(`El vehiculo elegido es: Moto \nEl valor por kilometro es de: $0.10 MXN \nEl valor de los extras por litro es de $${extralitros} MXN por los ${kilometros} kilometros recorridos \nEl valor total a pagar es de: $ ${valortotal} MXN`);

    } else if (tipovehiculo == 3) {

        let valorautobus = (kilometros*0.50).toFixed(2);
        let valortotal = Number(valorautobus) + Number(extralitros);

        alert(`El vehiculo elegido es: AutoBus \nEl valor por kilometro es de: $0.50 MXN \nEl valor de los extras por litro es de $${extralitros} MXN por los ${kilometros} kilometros recorridos \nEl valor total a pagar es de: $ ${valortotal} MXN`);

        return console.log(`El vehiculo elegido es: AutoBus \nEl valor por kilometro es de: $0.50 MXN \nEl valor de los extras por litro es de $${extralitros} MXN por los ${kilometros} kilometros recorridos \nEl valor total a pagar es de: $ ${valortotal} MXN`);

    }

}