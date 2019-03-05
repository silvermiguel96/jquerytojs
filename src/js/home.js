console.log('Hola mundo!');

// const varibles que no cambian en el tiempo (constantes)
// let variables que luego podemos cambiar
// var método anterior para definir variables
const noCambia = "Miguealangel";
let cambia = "Rendon";
// Funciones son piezas de codigo que podemos cambiar
function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}
 cambiaNombreFlecha =  (nuevoNombre) => {
  cambia = nuevoNombre
}
// const getUser = new Promise(function(todoBien, todoMal) {
//   // LLamar a un api
//   // Set
//   setTimeout(function() {
//     // Esperar 4 seggundo
//     // todoBien();
//     todoMal('Salido Todo Mal')
//   }, 3000);
// });
// const getUserTime = new Promise(function(todoBien, todoMal) {
//   // LLamar a un api
//   // Set
//   setTimeout( function() {
//     // Esperar 4 seggundo
//     // todoBien();
//     todoMal('Todo esta mal')
//   }, 5000);
// });


const getUser = new Promise(function(todoBien, todoMal) {
  // LLamar a un api
  // Set
  setTimeout(function() {
    // Esperar 4 seggundo
    // todoBien();
    todoBien('Bien promesa de 3')
  }, 3000);
});
const getUserTime = new Promise(function(todoBien, todoMal) {
  // LLamar a un api
  // Set
  setTimeout( function() {
    // Esperar 4 seggundo
    // todoBien();
    todoBien('Bien promesa de 5')
  }, 5000);
});
// getUser
//   .then(function() {
//     console.log('Todo esta bien en la promesa')
//   })
//   .catch(function() {
//     console.log('Todo Mal')
//   })
// Promise.race Carrera de promesas
Promise.all([
  getUser,
  getUserTime,
])
  .then(function(message) {
    console.log(message);
  })
  .catch(function(message) {
    console.log(message);
  })