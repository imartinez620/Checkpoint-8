Buenas tardes Iñaki, felicidades por haber llegado al CheckPoint 8, te comento lo que vas a realizar... Este checkpoint sera el ultimo donde pediremos que creen una documentación sobre lo conceptos que te proporcionare, recuerda debes ser lo más claro y comprensible posible, estas creando un material que lo visualizarán personas que recién inician en el mundo del desarrollo por lo tanto debes también sustentarlo con ejemplos, porque se utiliza, para que se utiliza, sintaxis, etc… Necesito que esta documentación sea la más completa que has creado, utilizando un buen formato, con imágenes, buenos ejemplos, y muy importante que tenga mucha información, necesito que sea lo más completa posible!! Y ademas que no sea creada en PDF o Word, necesito exploren otras alternativas como crear documentacion en un archivo con lenguaje MarkDown, utilizar Wiki de Git-Hub, Git Books, una pagina HTML, etc… ya les he dado muchas pistas!! Quiero algo diferente!

Los conceptos son los siguientes:
ejemplos, porque se utiliza, para que se utiliza, sintaxis, etc

## ¿Qué tipo de bucles hay en JS?

Los bucles son una de las estructuras más utilizadas en programación. Su uso es útil para la repetición de un bloque código siempre que cumplan una condición o que se indique una determinada cantidad de iteraciones (repeticiones), otro uso es utilizarlos para recorrer arrays.

Las diferrentes opciones que disponemos son los bucles *FOR*, *WHILE* y *DO-WHILE*.

#### El bucle *FOR*:  
Es el más presente en la mayoría de lenguajes. En JavaScript nos encontramos con 3 variantes.  
* La versión clásica utiliza:  
 * Una declaración de variable entera. Típicamente la letra *_i_*: (_var i = 0_).
 * Una condición que define el número de iteraciones. Se utiliza una comparación de la variable *_i_* con un número límite a alcanzar: (_i < 10_).
 * Un aumento del valor de la variable: (_i++_).  
Así, la forma de invocar el bucle *for* quedaría de la siguiente manera:  
```
for (var i = 0; i < 10; i++){       //Se puede realizar en sentido inverso, fijando un tope, condicionando con el 0 y reduciendo el valor de _i_:(_var i = 10; i > 0; i--_)
    //Código que se ejecuta 10 veces.
    //Se para cuando _i_ alcanza el valor de 10.
}

```

Para el caso derecorrer un _array_, sólo tendremos que poner en la condición el número de elementos del _array_. Veamos un ejemplo que completaremos con las variantes del bucle *FOR* pensadas para este caso.  
Supongamos que tenemos un _array_ con los días de la semana. 
``` 
var week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
```
Si queremos recorre el _array_, podemos usar en la condición el tamaño del _array_ y luego usar la variable _i_ para llamar a cada elemento. Apuntar que si la variable empieza en la posición 0, la última vez que se ejecutará será en la última posición del _array_ ya que el comparador ejecutará el bucle siempre que el número sea inferior al tamaño, así que en nuestro caso para 7 elementos, cuando i=7, se saldría del bucle (recordemos que la primera posición de un _array_ comienza en en el 0, week[0] y la última week[6]):
```
for (var i = 0; i < week.length; i++) {   //Sale del bucle cuando i=7 (tamaño del _array_), lo que evita pedir un índice del array superior a los disponibles.
  console.log(week[i]); 
}
```
Las opciones actualizadas de este bucle delegan este control de elementos a un sistema más automático. No tenemos que estar pendiente del comparador que nos pueda causar problemas de indexar fuera del _array_. 

```
for (dia in week) {
  console.log(week[dia]);  //dia actua como un índice de nuestro _array_.
}
```

```
week.forEach(function(element) {
  console.log(element);   //La función anónima se utiliza par imprimir cada elemento en este caso.
});
```

#### El bucle *WHILE*:  
El bucle *while* nos introduce en otra forma de iterar elementos mediante una condición, pero que resulta útil cuando no siempre tenemos un control previo de cuándo va a dejar de cumplirse.  
* Se compone de:  
 * Una condición que puede ser aritmética o lógica. Típicamente puede ser:
  * Una variable entera que iremos aumentando o reduciendo su valor en el bucle y que se comparar en la condición con un valor límite.
  * Una variable que resulte _true_ hasta que su valor cambie a _false_.  
Así, la forma de invocar el bucle *while* quedaría de la siguiente manera:  
```
while (condición) {
  //Código que se ejecuta las veces que se cumpla la condición.
}

```

En este punto, recordemos que cuando definimos un bucle *for*, sabemos que hay un número de elementos concreto y ése será el número de iteraciones. Cuando usamos un bucle *while* también podemos indicar que el bucle sea de un número determinado mediante una condición aritmética controlada. Si decimos que el bucle *while* se ejecute desde _i = 0_ hasta _i < 7_, tendremos también un control. ¿Pero qué ocurre si tenemos que ejecutar un bucle hasta una señal concreta y no el array completo? En este caso no sabemos cuándo parará, pero si podemos conseguir que lo haga.   

```
var diaFestivoEncontrado = false;   //Definimos la variable del bucle. Iniciada en _false_ pero usada con el transformador *not* en la condición para que resulte _true_.
var i = 0;                          //Creamos otra variable indice para recorrer el _array_. 

while (!diaFestivoEncontrado) {     //Entramos en el bucle hasta que sea festivo, en nuestro caso, 'Sunday'.
  if(week[i] === "Sunday"){         //Si lo es, no lo imprimimos y cambiamos la variable a true para salir del bucle en la siguiente iteración.
    diaFestivoEncontrado = true;
  }else{          
    console.log(week[i]);           //Imprime días de la semana laborales.
    i++;
  }
}
```

#### El bucle *DO-WHILE*:  
El bucle *do-while* es similar al bucle *while*, pero añade la ejecución de al menos una vez y realiza la condición al final. Resulta muy útil cuando queremos realizar *una* petición al menos, como por ejemplo, confirmar la contraseña de un usuario. Se ejecuta la solicitud una vez, si es la clave correcta, sale del bucle; si no lo es, la vuelve a pedir.   
* Se compone de:  
 * El código a ejecutar después de la plabra reservada _do_.
 * Una condición que puede ser aritmética o lógica. Típicamente puede ser:
  * Una variable entera que iremos aumentando o reduciendo su valor en el bucle y que se comparará en la condición con un valor límite.
  * Una variable que resulte _true_ hasta que su valor cambie a _false_.  
Se representaría de la siguiente forma.  
```
do {
  //Código que se ejecuta las veces que se cumpla la condición, pero al menos una vez.
} while (condición)

```

Veamos un ejemplo que imprime números del 0 al 9.
```
var contador = 0;               //Iniciamos la variable contadora.
do {                            //Entra al bucle.
  console.log(contador);  
  contador++;
} while (contador < 10)         //Analiza si fdebe ejecutarse más veces.
```
Si  en este caso hubiésemos iniciado la variable en un número mayor igual a 10, tendríamos la certeza de que al menos se ejecuta una vez la impresión en consola, porque la confirmación sería después.


## ¿Cuáles son las diferencias entre const, let y var?

Se trata de palabras reservadas que se utilizan para definir una variable, y una variable es un 'contenedor' al que podemos asignarle un valor. De la forma que crear una variable es tan sencillo como los siguientes ejemplos.
```
var miNombre = 'Peter';
let miEdad = 18;
const miHeroe = 'Spider-man';
```

La principal diferencia entre estas opciones hace referencia al ámbito y a la capacidad que tendrá la variable de ser reasignada. Esto quiere decir, en qué partes del código serán accesibles tanto para leer su valor como para cambiarlo. Así pues, haremos dos grandes distinciones, ámbito global y local. Si hablamos de un ámbito global, la variable será accesible desde todo el código de la clase, mientras que si usamos un ámbito local, sólo será accesible en el bloque de código donde está declarada.  

Teniendo claro estos conceptos, vamos a ver cada caso:
* *var*
 Fueron las primeras en ser utilizadas y tienen ámbito de función, por lo que no pueden accederse en ámbito global las declaradas dentro de una función. El problema es que tienen la posibilidad declararse repetidamente, lo que generaba valores inesperados cuando se ejecutaba el código si la declaras otra vez dentro de un bloque y accedes a ella fuera de él.
 ```
var x = 'Peter';
{
  var x = 'Parker';
}
console.log(x); // Devuelve 'Parker'
 ``` 
También permiten lo que se conoce como _hoisting_, que pueden ser usadas antes de ser declaradas.
 ```
console.log(x); 
var x = 'Peter';
 ``` 
 Se entiende de la siguiente forma:
 ```
var x;
console.log(x); 
x = 'Peter';
 ```  

* *let*
Son de ámbito de bloque {} y añadieron la restricción de no poder ser declaradas más que una vez en dicho ámbito, aunque sí reasignadas. Nos da de esta forma un mayor control para no obtener valores sorpresa.  
No soportan inicialización en el _hoisting_.

```
let x = 'Peter';
{
  let x = 'Parker';   //Al estar en diferente ámbito, no da error.
  console.log(x);     // Devuelve 'Parker'
}
console.log(x);       // Devuelve 'Peter'
```

* *const*
Son la forma más restrictiva de declarar variables. A las características de las *let*, les añade la imposibilidad de reasignar un valor a la variable, son constantes en su valor de declaración. Este valor tiene que ser asignado al crearlas. Estas dos opciones darían fallo:
```
const x = 'Peter';
const x = 'Parker';   //Da error.
x = 'Parker';         //Da error.
console.log(x);      // Devuelve 'Parker'
```

En resumen, si la mejor práctica siempre que sea posible es la de utilizar *const* al declarar variables.  
Si necesitas reasignarlas, lo recomendable sería *let*.  
No se recomienda el uso de *var* por los problemas asociados a sus reasignaciones.


## ¿Qué es una función de flecha?
Una función flecha es una forma más concisa y compacta de declarar funciones en JavaScript. De esta forma generan un código más fácil de leer y que incluso puede verse reducido a una única línea.  
El formato clásico para realizar una expresión sería el siguiente:
```
let funcion = function(arg) {
  return codigo;
};
```
Si lo reducimos a una función flecha, quedaría de la siguiente manera:
```
let funcion = (arg) => codigo;
```
Donde funcion representa la variable a la que se le asigna un resultado, quiere decir que el _return_ está implícito para cuando la llamemos _funcion(arg);_. La propia función serían los (), con o sin argumentos, y el código iría representado después de la 'flecha' =>.    
El ejemplo mostrado es una opción simple en una sóla línea, pero también admiten el uso de llaves {} para configuraciones multi línea. Aunque deberemos incluir esta vez la palabra clave _return_.
```
let nombre = (a, b) => {  
  let fullName = `${b}, ${a}`;
  return fullName; 
};

console.log( nombre('Peter', 'Parker') ); 
```
En el caso de utilizar funciones flecha que no tengan argumentos, tendremos que seguir utlizando los paréntesis en su llamada:  
```
holaMundo = () => console.log("Hola Peter");
holaMundo();
```
En este punto, te habrás dado cuenta de que las funciones arroy son anónimas, lo que generea problemas con la depuración al no tener un nombre que buscar, y con la autorreferencia, generando incompatibilidades con la recursión.  
Finalmente, otra de las ventajas es la relativa al uso de la palabra reservada _this_. Su uso en funciones arrow no se refiere al objeto, sino al ámbito léxico superior, en otras palabras, al que heredan, y no son adecuadas para hacer referencia al mismo objeto que forman, por lo que no son la mejor opción en estas situaciones.
```
const objeto = {
  nombre: 'Peter',
  decirHola: function() {
    console.log(`Hola, soy ${this.nombre}`);
  },
  decirHolaArrow: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

objeto.decirHola();         // Output: Hola, soy Peter
objeto.decirHolaArrow();    // Output: Hola, soy undefined
```

## ¿Qué es la deconstrucción de variables?
Es una expresión en JavaScript que nos permite desempaquetar _arrays_ y objetos en diferentes variables.  
Centrémonos en los _arrays_, si tenemos un _array_ controlado, que sepamos su tamaño, por ejmplo de tres elementos, con la siguiente expresión podríamos asignar cada uno a una variable diferente:
```
const miArray = [1, 2, 3];
const [a, b, c] = miArray;
```
Ahora, si queremos hacer los mismo con un array del que no sepamos su tamaño, siempre podemos asignar una cantidad de elementos a variables concretas, y el resto del _array_ a otra variable precedida de (...).
```
const [a, b, ...rest] = [1,2,3,4,5];
```
Otra opción que tenemos es la de ignorar ciertos elementos, para ello sólo hay que dejar el elemento vacío en las variables asignadas, en vez de utilizar const [a,b,c], podemos anular el elemento del medio con [a, ,c].  
Si queremos trabajar con objetos, tembién podremos deconstruirlos. El formato es muy similar al anterior, teniendo el siguiente obejo:
```
const tom = {
  name: 'Peter',
  surname: 'Parker',
  heroe: 'Spider-man'
};
```
Haríamos su deconstrucción así:
```
const { name, surname, heroe } = tom;
```

Una de las ventajas que nos ofrece la deconstrucción, es que podemos realizar intercambio de variables sin ncesidad de usar una variable temporal extra, y evitar también problemas de asignaciones erróneas.   
```
let jugadorUno = 'Cíclope';
let jugadorDos = 'Batman';
[jugadorUno, jugadorDos] = [jugadorDos, jugadorUno];
```
Son este ejemplo, somos capaces de intercambiar los valores de dos variables en una sola línea con un simple intercambio de orden.

## ¿Qué hace el operador de extensión en JS?

## ¿Qué es la programación orientada a objetos?

## ¿Qué es una promesa en JS?

## ¿Qué hacen async y await por nosotros?



Y por último debes realizar el siguiente ejercicio práctico, y subirlo a tu repositorio en Git-Hub para revisarlo

-Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

-Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.

-Cree una función de flecha que devuelva "Hola mundo".