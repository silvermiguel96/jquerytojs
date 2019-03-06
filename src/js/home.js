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


// 
// getUser
//   .then(function() {
//     console.log('Todo esta bien en la promesa')
//   })
//   .catch(function() {
//     console.log('Todo Mal')
//   })
// Promise.race Carrera de promesas
// Promise.all([
//   getUser,
//   getUserTime,
// ])
//   .then(function(message) {
//     console.log(message);
//   })
//   .catch(function(message) {
//     console.log(message);
//   })
// JQUERY

  // $.ajax('https://randomuser.me/api/', {
  //   method: 'GET',
  //   success: function(data) {
  //     console.log(data)
  //   },
  //   error: function(error) {
  //     console.log(error)
  //   }
  // })
// XMLHttpRequest

// Javascript

// fetch('https://randomuser.me/api/')
//   .then( function(response) {
//     // console.log(response)
//     return response.json()
//   })
//   .then(function (user) {
//     // console.log('user', user);
//     console.log('user', user.results[0].name.first)
//   })
//   .catch(function(error) {
//     console.log(error)
//   })

// Api StarWard
// fetch('https://swapi.co/api/people')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(user) {
//     console.log('Person', user.results[1].name)
//   })
//   .catch( function(error) {
//     console.log(error)
//     console.error
//   })
// Api StartWard funcion Flecha
// fetch('https://swapi.co/api/people')
//   .then( response  => response.json())
//   .then( user => console.log('Star', user.results[2].name))
//   .catch(error => console.log(error));


  // Async Await

 (async function load() {
   // Await
   async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
   }

   const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
   const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama');
   const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  //  let terrorList;
  //   fetch('https://yts.am/api/v2/list_movies.json?genre=terror')
  //     .then(function (data) {
  //       console.log('Terrorlist: ', data);
  //       terrorList = data;
  //     })

   console.log(actionList, dramaList, animationList);
 })()