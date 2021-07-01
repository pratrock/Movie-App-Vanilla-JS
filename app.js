const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    let form= document.getElementById('form');
    let input= document.getElementById('search');
    let main= document.getElementById('main');
    fetchMovies(apiUrl);
    async function fetchMovies(url){
        const response= await fetch(url)
        const movies= await response.json();
        console.log('response',movies)
        movies.results.forEach(element => {
            const movieContainer= document.createElement('div');
            const image= document.createElement('img');
            const text= document.createElement('h2');
            text.innerHTML=`${element.title}`;
            image.src = IMGPATH + element.poster_path;
            movieContainer.appendChild(image);
            movieContainer.appendChild(text);
            main.appendChild(movieContainer);
            
        });
    }

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        main.innerHTML='';
        const serarchValue=input.value;
        if(serarchValue){
            fetchMovies(SEARCHAPI+serarchValue)
            input.value='';
        }
    });