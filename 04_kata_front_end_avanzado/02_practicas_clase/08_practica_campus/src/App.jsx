import MiPerfil from './components/MiPerfil'
import Frutas from './components/Frutas'
import './App.css'

function App() {

  const frutas = [
    { nombre: 'Piña', color: 'amarillo' },
    { nombre: 'Manzana', color: 'rojo' }, 
    { nombre: 'Uva', color: 'verde' },
    { nombre: 'Sandia', color: 'naranja' }
  ];

  return (
    <>
      <header>
      <h1>Ejercicios de las lecturas del campus</h1>
      </header>

      <MiPerfil />

      <Frutas frutas={frutas} />

    </>
  )
}

export default App
