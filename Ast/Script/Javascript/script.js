const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

    // Check if user has previously selected a theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Function to toggle between dark and light mode
    function toggleMode() {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
                
             var darkandlight = document.getElementById("logolandd");
            darkandlight.innerHTML = '<i class="fa fa-moon-o"></i>';

        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
              
            var darkandlight = document.getElementById("logolandd");
            darkandlight.innerHTML = '<i class="fa fa-sun-o"></i>';
        }
    }

// Event listener for theme toggle button
toggleButton.addEventListener('click', toggleMode);

function xoggleMode() {
    alert("Segera!");
}

function openSearchCont() {
    var searchDiv = document.getElementById('searchDiv');
    searchDiv.style.display = 'block';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
}

function closeSearchCont() {
    var searchDiv = document.getElementById('searchDiv');
    searchDiv.style.display = 'none';
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'auto';
}

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

console.log('Masih dalam tahap pengembangan...'); 