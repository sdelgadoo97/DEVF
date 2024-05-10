import './MiPerfil.css'
import InfoPersona from './InfoPersona'

function MiPerfil () {
    const hobbies = 'Dormir, Ver Series, Estudiar Programación'

    return (
        <div>

            <section>
                <h2>Lectura Componentes</h2>
                <div className='data_container'>
                    <div className = 'info_container'>
                        <strong>Nombre: </strong><span>Sergio Andres Delgado</span>
                    </div>
                    <div className = 'info_container'>
                        <strong>Ocupación: </strong><span>Desarrollador Base de Datos Senior</span>
                    </div>
                    <InfoPersona campo="Hobbies" info={hobbies}/>
                </div>
            </section>

        </div>
    )
}

export default MiPerfil