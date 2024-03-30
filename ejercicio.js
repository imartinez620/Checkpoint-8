let miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

//-Cree un bucle for en JS que imprima cada nombre en esta lista.
for (var i = 0; i < miLista.length; i++){
    console.log(miLista[i]);
}

//-Cree un bucle while que recorra la misma lista y también imprima los nombres.
let contador = 0;
while(contador < miLista.length){
    console.log(miLista[contador]);
    contador++;
}

//-Cree una función de flecha que devuelva "Hola mundo".
const holaMundo = () => "Hola mundo";
//Testeo del valor devuelto.
console.log(holaMundo());