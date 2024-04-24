const movies = {
    kungfu_panda: {
        title: "Kungfu Panda",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    kungfu_panda_2: {
        title: "Kungfu Panda 2",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    kungfu_panda_3: {
        title: "Kungfu Panda 3",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    avatar: {
        title: "Avatar",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/51L5qXj/20240421-120211.png"
    },
    mr_bean_holiday: {
        title: "Mr Bean Holiday",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    dilan_1990: {
        title: "Dilan 1990",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    dilan_1991: {
        title: "Dilan 1991",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    milea_suara_dari_dilan: {
        title: "Milea Suara Dari Dilan",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    upin_ipin_keris_st: {
        title: "Upin & Ipin",
        rating: 0.0,
        description: "Description in here...",
        poster: "https://i.ibb.co/dLwbQpv/20240421-120239.png"
    }
};

function openFilmCont() {
    var searchDiv = document.getElementById('infoFilm');
    searchDiv.style.display = 'block';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
}

function closeFilmCont() {
    var searchDiv = document.getElementById('infoFilm');
    searchDiv.style.display = 'none';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'auto';
}

function showMovieInfo(movieId) {
    const movie = movies[movieId];
    const infoDiv = document.getElementById('infoFilm');
    infoDiv.querySelector('h2').textContent = movie.title;
    infoDiv.querySelector('h5').textContent = `My Rating: ${movie.rating}`;
    infoDiv.querySelector('p').textContent = movie.description;
    infoDiv.querySelector('img').src = movie.poster;
}
