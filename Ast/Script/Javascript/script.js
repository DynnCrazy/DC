// == Test
// function toggleNavbar() {
//    var navbarLinks = document.getElementById('navbar-links');
//    navbarLinks.style.display = (navbarLinks.style.display === 'none' || navbarLinks.style.display === '') ? 'flex' : 'none';
// }
// == Masih pemula aku puh

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var body = document.body;

    if (sidebar.style.width === "200px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "200px";
    }
}

var copyright = document.getElementById('ftrcopy');
copyright.innerHTML = "Copyright 2024 | Design by Dyn Crazy"

function toggleProjectLink(id) {
    var abccccc = '1';
}

function toggleProject(divId) {
    const div = document.getElementById(divId);
    div.classList.toggle('hidden');
}

function updateClock() {
    var currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

    var dateTimeParts = currentTime.split(', ');
    var dayAbbreviation = dateTimeParts[0].split(' ')[0];
    var dateMonthYear = dateTimeParts[0].split(' ')[1];
    var time = dateTimeParts[1];

    var formattedDateTime = dayAbbreviation + ' - ' + time;

    document.getElementById('clock').innerHTML = formattedDateTime;

    setTimeout(updateClock, 1000);
}

updateClock();

console.log('Masih dalam tahap pengembangan...')