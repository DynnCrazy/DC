const movies = {
    kungfu_panda: {
        title: "Kungfu Panda",
        rating: 8.1,
        description: "Kung Fu Panda adalah sebuah film komedi aksi animasi komputer Amerika 2008 yang diproduksi oleh DreamWorks Animation. Film ini disutradarai oleh John Stevenson dan Mark Osborne dan diproduseri oleh Melissa Cobb.",
        poster: "https://i.ibb.co/Lk9SbNb/20240421-120331.png"
    },
    avatar: {
        title: "Avatar",
        rating: 7.8,
        description: "Avatar adalah film fiksi ilmiah epik Amerika 2009 yang disutradarai, diproduksi, dan ditulis oleh James Cameron. Film ini membawa penonton ke planet Pandora, di mana manusia mencoba mengeksploitasi sumber daya alamnya.",
        poster: "https://example.com/avatar_poster.jpg"
    },
    upin_ipin: {
        title: "Upin & Ipin",
        rating: 8.0,
        description: "Upin & Ipin adalah sebuah serial televisi animasi anak-anak yang diproduksi oleh Les' Copaque Production di Malaysia. Serial ini mengisahkan tentang kehidupan sehari-hari dua anak kembar bernama Upin dan Ipin.",
        poster: "https://example.com/upin_ipin_poster.jpg"
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
