const games = {
    // ======= MOBILE
    free_fire: {
        judul: "Free Fire",
        pengembang: "Garena",
        deskripsi: "-",
        dimainkan: "23 Maret 2018",
        waktu: "400+ Jam",
        nama: "DeadEye !? (ID: 139433496)",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    mobile_legends: {
        judul: "Mobile Legends",
        pengembang: "Moonton",
        deskripsi: "-",
        dimainkan: "2018",
        waktu: "-",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    fc_mobile: {
        judul: "FC Mobile",
        pengembang: "Electronic Arts",
        deskripsi: "-",
        dimainkan: "2023",
        waktu: "-",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    subway_surfers: {
        judul: "Subway Surfers",
        pengembang: "",
        deskripsi: "-",
        dimainkan: "-",
        waktu: "-",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    stumble_guys: {
        judul: "Stumble Guys",
        pengembang: "-",
        deskripsi: "-",
        dimainkan: "2020",
        waktu: "120+ Jam",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    pou: {
        judul: "Pou",
        pengembang: "-",
        deskripsi: "-",
        dimainkan: "-",
        waktu: "-",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    among_us: {
        judul: "Among Us",
        pengembang: "-",
        deskripsi: "Game saling fitnah",
        dimainkan: "19 Desember 2020",
        waktu: "-",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    blood_strike: {
        judul: "Blood Strike",
        pengembang: "-",
        deskripsi: "-",
        dimainkan: "2024",
        waktu: "-",
        nama: "-",
        progress: "-",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    citampi_stories: {
        judul: "Citampi Stories",
        pengembang: "Ikan Asin Production",
        deskripsi: "-",
        dimainkan: "2023",
        waktu: "-",
        nama: "-",
        progress: "95%",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    },
    // ======= PC
    // ======= CONSOLE
    // ======= WEBSITE
    doodle_champions_island: {
        judul: "Doodle Champions Island",
        pengembang: "-",
        deskripsi: "-",
        dimainkan: "2020",
        waktu: "-",
        nama: "-",
        progress: "100%",
        achivement: "-",
        rating: 10,
        link: "-",
        image: "-"
    }
};

function openGameCont() {
    document.getElementById('infoGame').style.display = 'block';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
}

function closeGameCont() {
    document.getElementById('infoGame').style.display = 'none';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'auto';
    clearGameInfo();
}

function clearGameInfo() {
    const infoDiv = document.getElementById('infoGame');
    infoDiv.querySelector('h2').textContent = 'Error...';
    infoDiv.querySelector('.p1').textContent = '';
    infoDiv.querySelector('.p2').textContent = '';
    infoDiv.querySelector('.p3').textContent = '';
    infoDiv.querySelector('.p4').textContent = '';
    infoDiv.querySelector('.p5').textContent = '';
    infoDiv.querySelector('.p6').textContent = '';
    infoDiv.querySelector('.p7').textContent = '';
    infoDiv.querySelector('.p8').textContent = '';
    infoDiv.querySelector('.alinkkk').textContent = '';
    infoDiv.querySelector('img').src = '';
}

function showGameInfo(gameId) {
    const game = games[gameId];
    const infoDiv = document.getElementById('infoGame');
    infoDiv.querySelector('h2').textContent = game.judul;

    if (game.pengembang != '-') {
        infoDiv.querySelector('.p1').textContent = 'Dikembangkan: ' + game.pengembang;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.deskripsi != '-') {
        infoDiv.querySelector('.p2').textContent = 'Deskripsi: ' + game.deskripsi;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.dimainkan != '-') {
        infoDiv.querySelector('.p3').textContent = 'Dimainkan pada: ' + game.dimainkan;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.waktu != '-') {
        infoDiv.querySelector('.p4').textContent = 'Waktu Bermain: ' + game.waktu;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }
    
    if (game.nama != '-') {
        infoDiv.querySelector('.p5').textContent = 'Nama: ' + game.nama;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.progress != '-') {
        infoDiv.querySelector('.p6').textContent = 'Progress Game: ' + game.progress;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.achivement != '-') {
        infoDiv.querySelector('.p7').textContent = 'Achivement Game: ' + game.achivement;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.rating != '-') {
        infoDiv.querySelector('.p8').textContent = 'My Rating: ' + game.rating;
    } else {
        const wkwkwkwkkwkw = 'LUCU';
    }

    if (game.link != '-') {
        infoDiv.querySelector('.alinkkk').href = game.link;
        infoDiv.querySelector('.alinkkk').textContent = 'Link';
    } else {
        infoDiv.querySelector('.alinkkk').href = "/index.html";
        infoDiv.querySelector('.alinkkk').textContent = 'Link';
    }

    if (game.image != '-') {
        infoDiv.querySelector('img').src = game.image;
    } else {
        var theimage = document.getElementById('img_' + gameId).src;
        infoDiv.querySelector('img').src = theimage;
    }
}

function getHashValue() {
    var hash = window.location.hash;

    if (hash.startsWith('#')) {
        hash = hash.substring(1);
    }

    return hash;
}

window.addEventListener('load', function() {
    var hash = getHashValue();
    
    if ( hash === '') {
        var xnxx = 'Upss...';
    } else {
        openGameCont();
        showGameInfo(hash);
    }

});
