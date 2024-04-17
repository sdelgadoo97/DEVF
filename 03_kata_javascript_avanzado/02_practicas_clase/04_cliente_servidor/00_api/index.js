console.log('Consumir API: https://jsonplaceholder.typicode.com/')

const API_URL = 'https://jsonplaceholder.typicode.com/';
let recurso = 'posts';

// Get para consumir y recuperar un recurso de API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    /*.then (function(response) {
        console.log('responde', response);
        return response.json();
    })*/
    .then(response => response.json()) // cuando responda el API
    .then(json => {
        const { id, title } = json;
        console.log(`El post #${id} con el título: "${title}".`);
        console.log(json)
    })

