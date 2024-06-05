// Data yang akan Anda cari (contoh: daftar nama dan link)
const data = [
    // Main
    { name: "Menu", link: "/index.html", klik: '-' },
    { name: "Skill", link: "/index.html#skill", klik: '-' },
    { name: "Project", link: "/index.html#project", klik: '-' },
    { name: "Collection", link: "/index.html#collection", klik: '-' },
    { name: "About Me", link: "/index.html#about", klik: '-' },
    { name: "Contact", link: "/index.html#contact", klik: '-' },
    // My Film List
    { name: "My Film List", link: "/Collection/Film/index.html", klik: '-' },
    // My Game List
    { name: "My Game List", link: "/Collection/Game/index.html", klik: '-' },
    { name: "Free Fire", link: "/Collection/Game/index.html#free_fire", klik: '-' },
    { name: "Mobile Legends", link: "/Collection/Game/index.html#mobile_legends", klik: '-' },
    { name: "FC Mobile", link: "/Collection/Game/index.html#fc_mobile", klik: '-' },
    { name: "Subway Surfers", link: "/Collection/Game/index.html#subway_surfers", klik: '-' },
    { name: "Stumble Guys", link: "/Collection/Game/index.html#stumble_guys", klik: '-' },
    { name: "Pou", link: "/Collection/Game/index.html#pou", klik: '-' },
    { name: "Among Us", link: "/Collection/Game/index.html#among_us", klik: '-' },
    { name: "Blood Strike", link: "/Collection/Game/index.html#blood_strike", klik: '-' },
    { name: "Citampi Stories", link: "/Collection/Game/index.html#citampi_stories", klik: '-' },

    { name: "Grand Theft Auto: San Andreas", link: "/Collection/Game/index.html#gta_sa", klik: '-' },

    { name: "Doodle Champions Island", link: "/Collection/Game/index.html#doodle_champions_island", klik: '-' },
    // Social Media
    { name: "YouTube", link: "/Links/youtube.html", klik: '-' },
    { name: "Instagram", link: "/Links/instagram.html", klik: '-' },
    { name: "TikTok", link: "/Links/tiktok.html", klik: '-' },
    { name: "Facebook", link: "/Links/facebook.html", klik: '-' },
    { name: "GitHub", link: "/Links/github.html", klik: '-' },
    // Web Structure
    { name: "Top Web", link: "#topWeb", klik: '-' },
    { name: "Center Web", link: "#centerWeb", klik: '-' },
    { name: "Buttom Web", link: "#buttomWeb", klik: '-' },
    // Function
    { name: "Hidden Content", link: "?content=none", klik: '-' },
    { name: "Hello World!", link: "javascript:alert('Hello World!');", klik: '-' },
    // End
    { name: "End", link: "/easter-egg-in-here.html", klik: '-' }
];

// Gak ada gunanya
function hitungFolder(url) {
    url = url.replace(/(^\w+:|^)\/\//, '');
    var jumlahFolder = (url.match(/\//g) || []).length;
    return jumlahFolder;
}

var url = window.location.href;
var folder = hitungFolder(url);
console.log("Folder saat ini:", folder);

// Fungsi untuk melakukan pencarian
function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = '';

    if (input === '') {
        document.getElementById('searchResults').style.display = 'none';
    } else {
        document.getElementById('searchResults').style.display = 'block';
    }

    // Filter data sesuai dengan input
    const results = data.filter(item => item.name.toLowerCase().includes(input));

    // Tampilkan hasil pencarian
    results.forEach(result => {
        const p = document.createElement("p"); // "li"
        const a = document.createElement("a");
        a.href = result.link;
        a.textContent = result.name;
        a.onclick = () => {
            closeSearchCont();
            toggleSidebar();
        };
        p.appendChild(a);
        searchResults.appendChild(p);
    });
}

// Panggil fungsi search saat input berubah
document.getElementById("searchInput").addEventListener("input", search);

// Placeholder
const inputField = document.getElementById('searchInput');
const placeholders = ['Contact', 'Siapa Dyn Crazy ?', 'YouTube', 'Grand Theft Auto: San Andreas', 'Cara cepat miskin bagi pemula', 'Film List', 'TikTok', 'Game burik no 1 di dunia', 'Tips & trick jadi pengangguran', 'Skill', 'Kenapa cowok selalu salah ?', 'Cara membedakan kang bakso dengan intel!', 'Video viral terbaru! link mediafire!', 'Project', 'Mobile Legends: Bang Bang', 'Tutorial jadi badut untuk cewek! 100% work!', 'Kenapa upin & ipin tidak naik kelas ?', 'Blog', 'Easter Egg', 'Ronaldo Vs Messi', 'Among Us', 'Heboh! Prilly Latuconsina makan pakai tangan!', '#FREEPALESTINE', 'Bahasa pemograman Python', 'Duluan ayam apa telur ?', 'Ah ah ah', 'Indonesia merdeka tahun 1945', 'Berapa jumlah provinsi di Indonesia ?', 'So.. bakso..', 'Instagram', 'Kenapa cewek jepang `mantap` ?', 'Bocil epep meresahkan dunia!'];
let currentIndex = 0;
let placeholderInterval;

function changePlaceholder() {
  currentIndex = (currentIndex + 1) % placeholders.length;
  inputField.placeholder = placeholders[currentIndex];
}

function startPlaceholderRotation() {
  placeholderInterval = setInterval(changePlaceholder, 2000);
}

function stopPlaceholderRotation() {
  clearInterval(placeholderInterval);
}

// Start rotation when the page loads
startPlaceholderRotation();

// Stop rotation when user starts typing
inputField.addEventListener('input', stopPlaceholderRotation);

valuesearch = document.getElementById('searchInput').value;

if (valuesearch == '') {
    startPlaceholderRotation();
}
