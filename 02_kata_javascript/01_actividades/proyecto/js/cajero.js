console.log('Cajero de MexiCol');
console.log('..............................................');

const usuario = JSON.parse(localStorage.getItem('user'));
let cuenta = JSON.parse(localStorage.getItem('cuenta'));

const nombreusuario = document.getElementById('user_name');
nombreusuario.textContent = usuario.nombre;

function depositar(operacion) {

    const form_operacion = document.getElementById('form_operacion');
    const estilo = window.getComputedStyle(form_operacion);
    const resultado_operacion = document.getElementById('resultado_operacion');
    const estilo_2 = window.getComputedStyle(resultado_operacion);



    if (estilo.display === 'none') {
        form_operacion.style.display = 'block';

        if (operacion === 'deposito') {

            const tipo_operacion = document.getElementById('tipo_operacion');
            tipo_operacion.innerHTML = 'Depositar';

            const boton_deposita = document.getElementById('boton-deposita');
            const boton_retira = document.getElementById('boton-retira');

            boton_deposita.style.display = 'block';
            boton_retira.style.display = 'none';

        } else if (operacion === 'retiro') {
        
            const tipo_operacion = document.getElementById('tipo_operacion');
            tipo_operacion.innerHTML = 'Retirar';

            const boton_deposita = document.getElementById('boton-deposita');
            const boton_retira = document.getElementById('boton-retira');

            boton_deposita.style.display = 'none';
            boton_retira.style.display = 'block';
            
        }

    } else {
        form_operacion.style.display = 'none';
    }

    if (estilo_2.display === 'block') {
        resultado_operacion.style.display = 'none';
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

        const deposito = document.getElementById('monto_operacion');
        let depositado = document.getElementById('depositado');
        let saldo_actual = document.getElementById('saldo_actual');
        let msg_resultado = document.getElementById('msg_resultado');
        let campos_resultado = document.getElementById('campos_resultado');

        let val_cuenta = ((Number(cuenta.saldo)) + Number(deposito.value));

        if (val_cuenta < 990) {

            cuenta.saldo = ((Number(cuenta.saldo)) + Number(deposito.value));

            msg_resultado.innerHTML = `<h5>¡Operacion Exitosa!</h5>`;
            msg_resultado.style.color = 'green';

            campos_resultado.style.display = 'block';

            depositado.value = Number(deposito.value);
            saldo_actual.value = Number(cuenta.saldo);

            console.log("Saldo modificado con éxito.");
            console.log('Valor depositado: ' + deposito.value);
            console.log('Saldo final: ' + cuenta.saldo);

            depositado.disabled = true;
            saldo_actual.disabled = true;

            deposito.value = '';

            depositar();
            resuloperacion();
            


        } else {

            msg_resultado.innerHTML = `<h5>¡Operacion Fallida!</h5><p>El monto excede el maximo permitido</p>`;
            msg_resultado.style.color = 'red';

            campos_resultado.style.display = 'none';

            depositar();
            resuloperacion();

            console.log ('¡Operacion Fallida!');

        }


}