let text = "Hola amigos";
console.log(text.length);
console.log(text.slice(4));
console.log(text.split(' '));
console.log(text.repeat(3));

console.log(0 | Math.random() * 100);

/* function cargarDatosDesdeServidor(callback) {
    // Simular una solicitud de red que toma tiempo
    setTimeout(function() {
      const datos = { nombre: "John", edad: 30 };
      callback(datos); // Llamamos al callback con los datos
    }, 2000); // Simulamos una demora de 2 segundos
  }
  
  function procesarDatos(datos) {
    console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`);
  }
  
  cargarDatosDesdeServidor(procesarDatos);
   
 */ 

  function multiplicarNumero(numero) {
    return new Promise((resolve, reject) => {
        // Simular una operacion asincrona
        setTimeout(function () {
            const datos = { numero, resultado: numero * 2 };
            if (numero <= 10){
                resolve(datos); // Llamamos al callback con los datos
            }else{
                reject("El numero debe ser menor a 10");
            }
        }, 2000); // Simulamos una demora de 2 segundos
    });
}
function mostrarDatos(datos) {
    console.log(`Numero: ${datos.numero}, Resultado: ${datos.resultado}`);
}

/* multiplicarNumero(5)
    .then(resolve => { 
        mostrarDatos(resolve);
        return multiplicarNumero(11); //Esto genera otra nueva promesa 
    })
    .then(resolve => {
        mostrarDatos(resolve);
        return multiplicarNumero(1); //Esto genera otra nueva promesa 
    })
    .then(resolve => {
        mostrarDatos(resolve);
        console.log('La promesa termino :D')
    })
    .catch(error => console.error(error)); */

function usinAsyncFunction(){
    async function asyncFunction (){
        console.log("Inicio de la funcion asincrona")
        try {
            const res=await multiplicarNumero(5)
            console.log(res);
            return res;

        } catch (error) {
            console.error(error);
        }
        console.log("Final de la funcion asincrona")
    }
    asyncFunction();
}
let resultado = usinAsyncFunction();
console.log(resultado);