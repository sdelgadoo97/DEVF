class Animal {
    constructor(tipo, reino, estaExtinto, alimento){
        this.tipo = tipo;
        this.reino = reino;
        this.estaExtinto = estaExtinto;
        this.alimento = alimento;
    }

    // Metodos
    comer()  {
        console.log()
    }

}

const ballenas = new Animal('Acuatico', 'Mamiferos', false); 
const serpientes = new Animal('Terrestre','Reptiles', false)

ballenas.alimento = 'algas';
serpientes.alimento = 'roedores';

ballenas.comer();
serpientes.commer();