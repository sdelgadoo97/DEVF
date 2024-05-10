import {useState} from 'react';
import {FindPokemonByName} from '../../services/PokedexServices.js';

export default function SearchBar({ActualizarSearchResult}) {

    const [PokemonSearch, setPokemonSearch] = useState('');

    async function handleSearch(eventsearch) {
        //let pokemon_name_input = document.getElementById("pokemon_name_input");
        //console.log(pokemon_name_input.value);
        console.log('Buscando Pokemon...');
        console.log(PokemonSearch);

        const searchresult = await FindPokemonByName(PokemonSearch);

        console.log(searchresult);

        setPokemonSearch ('');

        ActualizarSearchResult(searchresult);

    }

    function handleInputChange(eventinput) {
        console.log(eventinput.target.value);
        setPokemonSearch(eventinput.target.value);
    }

    return (
    <header>
        <label htmlFor="pokemon_name_input">Buscar Pokemon</label>
        <input type="text" id="pokemon_name_input" onChange={handleInputChange} placeholder='Ingresa el Pokemon' value = {PokemonSearch}/>
        <button id ="boton_buscar" onClick={handleSearch}>Buscar</button>
    </header>
    )
}

