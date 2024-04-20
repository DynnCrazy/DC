// Data yang akan Anda cari (contoh: daftar nama dan link)
const data = [
    { name: "Top", link: "index.html#topWeb" },
    { name: "Skill", link: "index.html#skill" },
    { name: "Project", link: "index.html#project" },
    { name: "Contact", link: "index.html#contact" },
    { name: "YouTube", link: "https://www.youtube.com/@DynCrazy" }
];

// Fungsi untuk melakukan pencarian
function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = '';

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
