import SearchBar from '../SearchBar/SearchBar.jsx';
import PokemonCard from '../Card/PokemonCard.jsx';
import { useState } from 'react';

function Pokedex() {

    const [SearchResult,setSearchResult] = useState([]);

    return (
        <>
            <h1>Pokedex (React)</h1>
            <section>
                <SearchBar action={setSearchResult} />
                <PokemonCard pokemon = {SearchResult} />
            </section>
        </>
    )
}

export default Pokedex