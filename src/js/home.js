  // Async Await

 (async function load() {
   // Await
   async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    if(data.data.movie_count > 0 ){
      return data;
      // Termina funcion
    }
    // Continua codigo
    throw new Error('No se encontró ningun resultado');

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
     try {
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_API}limit=1&query_term=${data.get('name')}`);
     //  debugger
      const HTMLString = featuringTemplate(pelis[0]);
      $featurignContainer.innerHTML = HTMLString;
     }catch(error) {
      // debugger
      // error consola
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active');
     }

   })

  // $form.addEventListener('submit' , (event) => {
  //   event.preventDefault(); // Sirve para mirar el cambio o envio de informacion.


  // })

  //  let terrorList;
  //   fetch('https://yts.am/api/v2/list_movies.json?genre=terror')
  //     .then(function (data) {
  //       console.log('Terrorlist: ', data);
  //       terrorList = data;
  //     })
  // console.log(actionList, dramaList, animationList);

  function videoItemTemplate( movie, category )
  {
    return (`
              <div class="primaryPlaylistItem" data-id="${movie.id}"  data-category=${category}>
                <div class="primaryPlaylistItem-image" >
                
                  <img src="${movie.medium_cover_image}">
                </div>
                <h4 class="primaryPlaylistItem-title">
                  ${movie.title}
                </h4>
             </div>`
      )
      // <p>${movie.id}</p>
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
    // actionList. (Este es el parametro que se manda en list)
    // if($container.children[0] !== null){
    //   $container.children[0].remove();
    // }
    $container.children[0].remove();
    list.forEach((movie) => {
      //  debugger
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', (event) => {
        // movieElement.classList.add('fadeIn');
        event.srcElement.classList.add('fadeIn');
      })
      addEventClick(movieElement);
      // console.log(HTMLString);
    });
  };
  // .home (Selector)
  //  $('home') Tag html llamado home
  // const $home = $('.home  .list #item'); // Se le asign los $ en la variable para saber que es un selector.
  
  // GetListsMovies
  
  const {data: { movies: actionList }} = await getData(`${BASE_API}genre=action`);
  const $actionContainer = document.querySelector('#action'); 
  renderMovieList(actionList, $actionContainer, 'action');
  
  const {data: { movies: dramaList }} = await getData(`${BASE_API}genre=drama`);
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');
  
  const {data: { movies: animationList }} = await getData(`${BASE_API}genre=animation`);
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');
  //Container API





  //MODAL
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  // document.querySelector('#modal img'); BUsqueda por documento
  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

  function findById(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10))
  }
  function findMovie(id, category){
    switch (category) {
      case 'action' : {
        return findById(actionList, id);
      }
      case 'drama' : {
        return findById(dramaList, id);
      }
      default: {
        return findById(animationList, id);
      }
    }
    // actionList.find((movie) => {
    //   // debugger
    //   // return movie.id === parseInt(id, 10)
    // })
  }
function showModal($element) {
  $overlay.classList.add('active');
  $modal.style.animation = 'modalIn .8s forwards';
  // $element.querySelector('p').textContent
  // $0.getAttribute('data-id')
  // $0.dataset
  const id = $element.dataset.id;
  const category = $element.dataset.category;
  const data = findMovie(id, category);
  
  $modalTitle.textContent = data.title;
  $modalImage.setAttribute('src', data.medium_cover_image);
  $modalDescription.textContent = data.description_full;
  debugger
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