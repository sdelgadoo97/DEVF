 export default function card (pokemon) {
    return `

<div class="card">
    <p>
        <h1>${pokemon.name}</h1>
        <img src='${pokemon.sprites.other["official-artwork"].front_default}'/><br>
        <label>Altura:</label>
        <span>${pokemon.height}</span><br>
        <label>Peso:</label>
    </p>
</div>
`
 }