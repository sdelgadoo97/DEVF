export default function PokemonCard (pokemon) {
    return (

        <div className="card">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.other["official-artwork"].front_default}/><br/>
                <label>Altura:</label>
                <span>{pokemon.height}</span><br/>
                <label>Peso:</label>
                <span>{pokemon.weight}</span><br/>
                <label>Habilidad Principal:</label>
                <span>{pokemon.abilities[0].ability.name}</span>
        </div>

    );
 }