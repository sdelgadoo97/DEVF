console.log('Listo');

let pokemon_name_input = document.getElementById("buscar_pokemon");
let pokemon_container = document.getElementById("pokemon_container");

async function findpokemon() {
    console.log('Buscando Pokemon...');
    console.log(pokemon_name_input.value);

    let pokemon = await findpokemonbyname(pokemon_name_input.value.toLowerCase());

    pokemon_container.innerHTML = `
        <h1>${pokemon.name}</h1>
        <p>
            <img src='${pokemon.sprites.other["official-artwork"].front_default}'/><br>
            <label>Altura:</label>
            <span>${pokemon.height}</span><br>
            <label>Peso:</label>
        </p>
    `;



}

const requestoptions = {
    method: 'GET',
    redirect: 'follow'
  };

  async function findpokemonbyname(pokemon_name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`, requestoptions);
    let pokemon = await response.json();
    return pokemon;
  }