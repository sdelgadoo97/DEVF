console.log('Cajero de MexiCol');
console.log('..............................................');

const usuario = JSON.parse(localStorage.getItem('user'));
let cuenta = JSON.parse(localStorage.getItem('cuenta'));

const nombreusuario = document.getElementById('user_name');
nombreusuario.textContent = usuario.nombre;

function depositar() {
    const seccion_desposito = document.getElementById('seccion_desposito');
    const estilo = window.getComputedStyle(seccion_desposito);

    if (estilo.display === 'none') {
        seccion_desposito.style.display = 'block';
    } else {
        seccion_desposito.style.display = 'none';
    }
}

function resuloperacion() {
    const resultado_operacion = document.getElementById('resultado_operacion');
    const estilo = window.getComputedStyle(resultado_operacion);

    if (estilo.display === 'none') {
        resultado_operacion.style.display = 'block';
    } else {
        resultado_operacion.style.display = 'none';
    }
}

function realizadeposito() {

        const deposito = document.getElementById('deposito').value;
        let depositado = document.getElementById('depositado');
        let saldo_actual = document.getElementById('saldo_actual');

        cuenta.saldo = ((Number(cuenta.saldo)) + Number(deposito));

        depositar();

        resuloperacion();

        depositado.value = Number(deposito);
        saldo_actual.value = Number(cuenta.saldo);

        console.log("Saldo modificado con éxito.");
        console.log('Valor depositado: ' + deposito);
        console.log('Saldo final: ' + cuenta.saldo);

}