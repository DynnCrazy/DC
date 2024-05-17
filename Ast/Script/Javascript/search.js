// Data yang akan Anda cari (contoh: daftar nama dan link)
const data = [
    { name: "Menu", link: "/index.html" },
    { name: "Skill", link: "/index.html#skill" },
    { name: "Project", link: "/index.html#project" },
    { name: "Collection", link: "/index.html#collection" },
    { name: "About Me", link: "/index.html#about" },
    { name: "Contact", link: "/index.html#contact" },
    { name: "My Film", link: "/Collection/Film/index.html" },
    { name: "YouTube", link: "/Links/youtube.html" },
    { name: "Instagram", link: "/Links/instagram.html" },
    { name: "TikTok", link: "/Links/tiktok.html" },
    { name: "Facebook", link: "/Links/facebook.html" },
    { name: "GitHub", link: "/Links/github.html" },
    { name: "Top Web", link: "#topWeb" },
    { name: "Center Web", link: "#centerWeb" },
    { name: "Buttom Web", link: "#buttomWeb" },
    { name: "Hidden Content", link: "?content=none" },
    { name: "End", link: "/easter-egg-in-here.html" }
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
