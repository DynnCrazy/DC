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



const textToType = "WELCOME!";
let index = 0;
const typingTextElement = document.getElementById('typing-text');

function typeText() {
    typingTextElement.textContent = textToType.slice(0, index);

    index++;

    if (index > textToType.length) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(typeText, 100);

function toggleProjectLink(id) {
    var abccccc = '1';
}

function toggleProject(divId) {
    const div = document.getElementById(divId);
    div.classList.toggle('hidden');
}

console.log('Masih dalam tahap pengembangan...')