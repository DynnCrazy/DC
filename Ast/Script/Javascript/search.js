// Data yang akan Anda cari (contoh: daftar nama dan link)
const data = [
    // Main
    { name: "Menu", link: "/index.html", keyword: "menu utama index" },
    { name: "Skill", link: "/index.html#skill", keyword: "my skill kemampuan saya" },
    { name: "Project", link: "/index.html#project", keyword: "my project projek saya" },
    { name: "Collection", link: "/index.html#collection", keyword: "my collection koleksi saya" },
    { name: "About Me", link: "/index.html#about", keyword: "about me tentang saya" },
    { name: "Contact", link: "/index.html#contact", keyword: "contact me kontak saya email wa no" },
    //  Blog
    { name: "Blog", link: "/Blog/index.html#", keyword: "my blog saya" },
    // My Film List
    { name: "My Film List", link: "/Collection/Film/index.html", keyword: "my film list movie kartun animasi anime daftar tonton saya" },
    // My Game List
    { name: "My Game List", link: "/Collection/Game/index.html", keyword: "my game list daftar permainan saya" },
    { name: "Free Fire", link: "/Collection/Game/index.html#free_fire", keyword: "game free fire burik hd 8bit garena ff epep bocil" },
    { name: "Mobile Legends : Bang Bang", link: "/Collection/Game/index.html#mobile_legends", keyword: "ml game mobile legends : bang bang mati suri mpl moba analog moonton" },
    { name: "FC Mobile", link: "/Collection/Game/index.html#fc_mobile", keyword: "game fc mobile sepak bola fifa messi ronaldo soccer ea electronic arts" },
    { name: "Subway Surfers", link: "/Collection/Game/index.html#subway_surfers", keyword: "game subway surfers" },
    { name: "Stumble Guys", link: "/Collection/Game/index.html#stumble_guys", keyword: "game stumble guys fall guys" },
    { name: "Pou", link: "/Collection/Game/index.html#pou", keyword: "game pou tai" },
    { name: "Among Us", link: "/Collection/Game/index.html#among_us", keyword: "game among us sus fitnah super imposter" },
    { name: "Blood Strike", link: "/Collection/Game/index.html#blood_strike", keyword: "game blood strike" },
    { name: "Citampi Stories", link: "/Collection/Game/index.html#citampi_stories", keyword: "game citampi stories story indonesia lokal ikan asin production" },

    { name: "Grand Theft Auto: San Andreas", link: "/Collection/Game/index.html#gta_sa", keyword: "game grand theft auto : san andreas gta sa rockstar games" },

    { name: "Doodle Champions Island", link: "/Collection/Game/index.html#doodle_champions_island", keyword: "game doodle champions island" },
    // Social Media
    { name: "YouTube", link: "/Links/youtube.html", keyword: "yt youtube saya dyn crazy official resmi" },
    { name: "Instagram", link: "/Links/instagram.html", keyword: "ig instagram saya dyn crazy official resmi" },
    { name: "TikTok", link: "/Links/tiktok.html", keyword: "tt tik tok tiktok saya dyn crazy official resmi" },
    { name: "Facebook", link: "/Links/facebook.html", keyword: "fb facebook saya dyn crazy official resmi" },
    { name: "GitHub", link: "/Links/github.html", keyword: "gh github saya dyn crazy official resmi" },
    // Web Structure
    { name: "Top Web", link: "#topWeb", keyword: "top web atas" },
    { name: "Center Web", link: "#centerWeb", keyword: "center web tengah" },
    { name: "Buttom Web", link: "#buttomWeb", keyword: "buttom web bawah" },
    // Function
    { name: "Hidden Content", link: "?content=none", keyword: "sembunyikan konten hidden content function heker" },
    { name: "Hello World!", link: "javascript:alert('Hello World!');", keyword: "hello world" },
    // End
    { name: "End", link: "/easter-egg-in-here.html", keyword: "123456789" }
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
    const results = data.filter(item => item.keyword.toLowerCase().includes(input)); // const results = data.filter(item => item.name.toLowerCase().includes(input));

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
const placeholders = ['Contact', 'Siapa Dyn Crazy ?', 'YouTube', 'Grand Theft Auto: San Andreas', 'Cara cepat miskin bagi pemula', 'Film List', 'TikTok', 'Game burik no 1 di dunia', 'Tips & trick jadi pengangguran', 'Skill', 'Kenapa cowok selalu salah ?', 'Cara membedakan kang bakso dengan intel!', 'Ketikan sesuatu disini!', 'Project', 'Mobile Legends: Bang Bang', 'Tutorial jadi badut untuk cewek! 100% work!', 'Kenapa upin & ipin tidak naik kelas ?', 'Blog', 'Easter Egg', 'Ronaldo Vs Messi', 'Among Us', 'Heboh! Prilly Latuconsina makan pakai tangan!', '#FREEPALESTINE', 'Bahasa pemograman Python', 'Duluan ayam apa telur ?', 'Ah ah ah', 'Indonesia merdeka tahun 1945', 'Berapa jumlah provinsi di Indonesia ?', 'So.. bakso..', 'Instagram', 'Bocil epep meresahkan dunia!'];
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
