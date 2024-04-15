//const repl = require ('repl');

async function UsuarioExiste (nombre_usuario, callback) {
    setTimeout(() => {
        if (usuarios.find(usuario => usuario.name === nombre_usuario)) {
            callback(true);
        } else {
            callback(false);
        }
    }, 3000);
}

async function CuentaActiva (nombre_usuario, callback) {
    setTimeout(() => {
        if (usuarios.find(usuario => usuario.name === nombre_usuario && usuario.activo === true)) {
            callback(true);
        } else {
            callback(false);
        }
    }, 3000)
}

async function VerificarPermisos (nombre_usuario, nombre_recurso, callback) {
    setTimeout(() => {
        const UsuarioEncontrado = usuarios.find(usuario => usuario.name === nombre_usuario);
        if (recursos.find(recurso => recurso.nombre === nombre_recurso && recurso.acceso.some(permiso => UsuarioEncontrado.permisos.includes(permiso)))) {
            callback(true);
        } else {
            callback(false);
        }
    }, 3000)
}

// const usuarios = [
usuarios = [
    {
        name: 'sadelgado',
        activo: true,
        permisos: ['admin', 'user']
    },
    {
        name: 'heladio',
        activo: true,
        permisos: ['user']
    },
    {
        name: 'slopez',
        activo: true,
        permisos: ['admin']
    },
    {
        name: 'pedro',
        activo: false,
        permisos: ['user']
    }
]

// const recursos = [
recursos = [
    {
        nombre: 'reportes.pdf',
        acceso: ['admin', 'user']

    },
    {
        nombre: 'confidencial.txt',
        acceso: ['admin']
    }
]


// Proceso
// 1. Verificar si el usuario existe
async function ProcesoVerificacion (usuario_func, recurso_func, callback) {

console.log('--------------------------------------------------------');
console.log('Iniciando verificación para el usuario: '+ usuario_func);
console.log('--');

    UsuarioExiste(usuario_func, (existe) => {
        if (existe == true) {
            console.log('Usuario verificado exitosamente.');
            console.log('--');

            CuentaActiva (usuario_func, (activo) => {
                if (activo == true) {
                    console.log('La cuenta del usuario está activa.');
                    console.log('------');
                    console.log('Iniciando verificación para el recurso: '+ recurso_func);
                    console.log('--');

                    VerificarPermisos (usuario_func, recurso_func, (permiso) => {
                        if (permiso == true){
                            console.log('El usuario tiene acceso al recurso.');
                            callback(true);
                        } else {
                            callback(true);
                            return console.log('El usuario no tiene acceso al recurso.');
                        }
                    })

                } else {
                    callback(true);
                    return console.log('La cuenta del usuario no está activa.');
                }
            })
        } else {
            callback(true);
            return console.log('El usuario no existe.');
        }
    })

}

/*
 ProcesoVerificacion('sadelgado', 'reportes.pdf', (respuesta) => {
    ProcesoVerificacion('heladio', 'confidencial.txt', (respuesta) => {
        ProcesoVerificacion('slopez', 'reportes.pdf', (respuesta) => {
            ProcesoVerificacion('pedro', 'reportes.pdf', (respuesta) => {
                ProcesoVerificacion('sadelgado', 'confidencial.txt', (respuesta) => {
                })
            })
        })
        
    })
 });*/

 async function ejecutarProcesos() {
    await new Promise((resolve) => {
        ProcesoVerificacion('sadelgado', 'reportes.pdf', resolve);
    });
    
    await new Promise((resolve) => {
        ProcesoVerificacion('heladio', 'confidencial.txt', resolve);
    });
    
    await new Promise((resolve) => {
        ProcesoVerificacion('slopez', 'reportes.pdf', resolve);
    });
    
    await new Promise((resolve) => {
        ProcesoVerificacion('pedro', 'reportes.pdf', resolve);
    });
    
    await new Promise((resolve) => {
        ProcesoVerificacion('sadelgado', 'confidencial.txt', resolve);
    });
}

ejecutarProcesos();
/*
repl.start ({
    prompt: '(ejercicio)>'
})*/
