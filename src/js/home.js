  // Async Await

 (async function load() {
   // Await
   async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
   }
   // FORM
   const $form = document.getElementById('form');
   const $home = document.getElementById('home');
   const $featurignContainer = document.getElementById('featuring');

   function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute]);
    }
   }

   const BASE_API = 'https://yts.am/api/v2/list_movies.json?';

   function featuringTemplate(peli) {
     return (
       `
       <div class="featuring">
       <div class="featuring-image">
         <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
       </div>
       <div class="featuring-content">
         <p class="featuring-title">Pelicula encontrada</p>
         <p class="featuring-album">${peli.title}</p>
       </div>
     </div>
       `
     )
   }
   $form.addEventListener('submit', async (event) => {
     event.preventDefault();
     $home.classList.add('search-active');
     const $loader = document.createElement('img');
     setAttributes($loader, {
       src: 'src/images/loader.gif',
       height: 50 ,
       width: 50,
     })
     $featurignContainer.append($loader);

     const data =  new FormData($form);
     const {
       data: {
         movies: pelis
       }
     } = await getData(`${BASE_API}limit=1&query_term=${data.get('name')}`);
    //  debugger
     const HTMLString = featuringTemplate(pelis[0]);
     $featurignContainer.innerHTML = HTMLString;
   })

  // $form.addEventListener('submit' , (event) => {
  //   event.preventDefault(); // Sirve para mirar el cambio o envio de informacion.


  // })
   const actionList = await getData(`${BASE_API}genre=action`);
   const dramaList = await getData(`${BASE_API}genre=drama`);
   const animationList = await getData(`${BASE_API}genre=animation`);
  //  let terrorList;
  //   fetch('https://yts.am/api/v2/list_movies.json?genre=terror')
  //     .then(function (data) {
  //       console.log('Terrorlist: ', data);
  //       terrorList = data;
  //     })
  // console.log(actionList, dramaList, animationList);

  function videoItemTemplate( movie, category )
  {
    return (`<div class="primaryPlaylistItem" data-id="${movie.id}"  data-category="${category}">
                <div class="primaryPlaylistItem-image" >
                  <img src="${movie.medium_cover_image}">
                </div>
                <h4 class="primaryPlaylistItem-title">
                  ${movie.title}
                </h4>
             </div>`
      )
    }
  // console.log(videoItemTemplate(src, title));
  
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument(); // Funcion de html
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      showModal($element)
    })
  }
  // function addEventClick($element) {
  //   $element.addEventListener('click', () => {
  //     alert('Click');
  //   })
  //   // $('div').on('click', function())
  // }
  function renderMovieList(list, $container , category) {
    // actionList.data.movies. (Este es el parametro que se manda en list)
    // if($container.children[0] !== null){
    //   $container.children[0].remove();
    // }
    $container.children[0].remove();
    list.forEach((movie) => {
      //  debugger
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      addEventClick(movieElement);
      // console.log(HTMLString);
    });
  };// 
  // .home (Selector)
  //  $('home') Tag html llamado home
  // const $home = $('.home  .list #item'); // Se le asign los $ en la variable para saber que es un selector.
  
  // GetListsMovies
  
  const $actionContainer = document.querySelector('#action'); 
  renderMovieList(actionList.data.movies, $actionContainer, 'action');
 
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer, 'drama');

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer, 'animation');
  //Container API





  //MODAL
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  // document.querySelector('#modal img'); BUsqueda por documento
  const $modalTitle = $modal.querySelector('img');
  const $modalImage = $modal.querySelector('h1');
  const $modalDescription = $modal.querySelector('p');
  
function showModal($element) {
  $overlay.classList.add('active');
  $modal.style.animation = 'modalIn .8s forwards';
  const id = $element.dataset.id;
  const category = $element.dataset.category;
}
  $hideModal.addEventListener('click', hideModal);
function hideModal() {
  $overlay.classList.remove('active');
  $modal.style.animation = 'modalOut .8s forwards';

}
  //  '<div class="primaryPlaylistItem">' +
  //   '<div class="primaryPlaylistItem-image">' +
  //     '<img src='+ImageSrc+'>' +
  //   '</div>' +
  //   '<h4 class="primaryPlaylistItem-title">' +
  //     Titulo de la peli
  //   </h4>
  //  </div>'




 })()