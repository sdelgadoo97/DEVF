console.log('Cajero de MexiCol')

/**
 * BD de usuarios
 */
const usuarios = [
    {id: 1, nombre: 'Mali', user:'mali', password:'1234'}
    ,{id: 2, nombre: 'Gera', user:'gera', password:'1234'}
    ,{id: 3, nombre: 'Maui', user:'maui', password:'1234'}
]
/**
 * BD de cuentas
 */
const cuentas = [
    {userid: 1, saldo:200}
    ,{userid: 2, saldo:290}
    ,{userid: 3, saldo:67}
]

document.addEventListener('DOMContentLoaded', (event) => {
    //console.log(event)   
    const login_form = document.getElementById('login_form');
    login_form.addEventListener('submit', (event) => {
        event.preventDefault(); //Previene el envio del formulario
        console.log('Intento de inicio de sesión...')

        // Capturamos usuario
        const username = document.getElementById('username').value;
        let resultado_container = document.getElementById('resultado_container');

        // Validacion de usuario
        if (usuarios.find(usuario => usuario.user === username.toLowerCase().trim())) {

            // Capturamos password
            const passwordinput = document.getElementById('password').value;
            const reguser = usuarios.find(usuario => usuario.user === username.toLowerCase().trim());

            if (usuarios.find(usuario => usuario.user === username && usuario.password === passwordinput.trim())) {

                console.log('Inicio de sesión exitoso\nBienvenido ' + reguser.nombre);

                resultado_container.innerHTML = `
                <p>Bienvenido ${reguser.nombre}</p>`

            } else {

                console.log('Contraseña incorrecta');

                resultado_container.innerHTML = `
                <p>Contraseña incorrecta</p>`
            }
        } else {
            console.log('Usuario no encontrado');

            resultado_container.innerHTML = `
            <p>Usuario no encontrado</p>`

        }




    })
})