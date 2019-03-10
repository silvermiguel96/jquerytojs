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
  // console.log(actionList, dramaList, animationList);

  function videoItemTemplate( movie )
  {
    return (`<div class="primaryPlaylistItem">
                <div class="primaryPlaylistItem-image">
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
  
  function renderMovieList(list, $container) {
    // actionList.data.movies. (Este es el parametro que se manda en list)
    // if($container.children[0] !== null){
    //   $container.children[0].remove();
    // }
    $container.children[0].remove();
    list.forEach((movie) => {
      //  debugger
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      // console.log(HTMLString);
    });
  };// 
  // .home (Selector)
  //  $('home') Tag html llamado home
  // const $home = $('.home  .list #item'); // Se le asign los $ en la variable para saber que es un selector.
  
  // GetListsMovies
  
  const $actionContainer = document.querySelector('#action'); 
  renderMovieList(actionList.data.movies, $actionContainer);
 
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList.data.movies, $dramaContainer);

  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList.data.movies, $animationContainer);
  //Container API


  // FORM
  const $featurignContainer = document.getElementById('featuring');
  const $form = document.getElementById('form');
  const $home = document.getElementById('home')

  //MODAL
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  // document.querySelector('#modal img'); BUsqueda por documento
  const $modalTitle = $modal.querySelector('img');
  const $modalImage = $modal.querySelector('h1');
  const $modalDescription = $modal.querySelector('p');
  

  //  '<div class="primaryPlaylistItem">' +
  //   '<div class="primaryPlaylistItem-image">' +
  //     '<img src='+ImageSrc+'>' +
  //   '</div>' +
  //   '<h4 class="primaryPlaylistItem-title">' +
  //     Titulo de la peli
  //   </h4>
  //  </div>'




 })()