import './style.css'
import { findpokemonbyname } from './src/services.js'
import  card  from './src/components/pokemon_card.js'
import searchbar  from './src/components/search_bar.js'

document.querySelector('#app').innerHTML = `
${searchbar()}
<div id="pokemon_container"></div>
`
document.querySelector('#boton_buscar').addEventListener('click', async() => {
  let pokemon_name_input = document.getElementById("buscar_pokemon");
  const pokemon_container = document.getElementById("pokemon_container");

  let  pokemon = await findpokemonbyname(pokemon_name_input.value.toLowerCase().trim());
  pokemon_name_input.value = '';

  pokemon_container.innerHTML = `
    ${card(pokemon)}`;
})

cargar