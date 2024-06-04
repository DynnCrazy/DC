document.addEventListener("DOMContentLoaded", function() {
    var divs = document.querySelectorAll(".news-the-blog div");

    // Ubah NodeList menjadi array untuk memudahkan pengolahan
    var divArray = Array.from(divs);

    // Sortir array berdasarkan ID dalam urutan menurun
    divArray.sort(function(a, b) {
        return parseInt(b.id.replace("myblog", "")) - parseInt(a.id.replace("myblog", ""));
    });

    // Ubah display menjadi block untuk lima div dengan ID tertinggi
    for (var i = 0; i < 5; i++) {
        if (divArray[i]) {
            divArray[i].style.display = "block";
        }
    }

    // Mendefinisikan variabel contentBlog
    var contentBlogtll = [];
    var contentBlogftr = [];
    var contentBlogimg = [];
    var contentBlog = [];

    for (var i = 0; i < 5; i++) {
        contentBlogtll[i] = 'ttl-' + divArray[i].id;
        contentBlogftr[i] = 'ftr-' + divArray[i].id;
        contentBlogimg[i] = 'img-' + divArray[i].id;
        contentBlog[i] = 'the' + divArray[i].id;
    }

    let alldata;

    fetch('/Ast/Script/Json/my-blog.json')
        .then(response => response.json())
        .then(data => {
            alldata = data;
            jsonData = alldata;

            for (var i = 0; i < 5; i++) {
                var titleBlog = data[contentBlog[i]].title;
                var imageBlog = data[contentBlog[i]].image;
                var authorBlog = data[contentBlog[i]].author;
                var createdBlog = data[contentBlog[i]].created;

                var footerBlog = authorBlog + ' - ' + createdBlog;

                document.getElementById(contentBlogtll[i]).innerHTML = titleBlog;
                document.getElementById(contentBlogftr[i]).innerHTML = footerBlog;
                document.getElementById(contentBlogimg[i]).src = imageBlog;
            }

            // Membuat elemen sebanyak jumlah objek dalam JSON dan menambahkannya ke dalam container
            const container = document.getElementById('container');
            Object.values(jsonData).forEach(blog => {
                const blogDiv = document.createElement('div');
                blogDiv.className = 'blog-post';
                blogDiv.innerHTML = `
                    <div class="content-the-blog">
                    <a href="${blog.url}" style="text-decoration: none;">
                    <div class="cont-blog-1">
                    <center>
                    <img src="${blog.image}" alt="Thumbnail">
                    <h3 class="title-blog">${blog.title}</h3>
                    <h6 class="footer-blog">${blog.author} - ${blog.created}</h6>
                    <center>
                    </div>
                    </a>
                    <div>
                `;
                container.appendChild(blogDiv);
            });

            const blogCount = Object.keys(jsonData).length;
            console.log(`Jumlah objek dalam JSON: ${blogCount}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    function goToBlog(links) {
        window.location.href = alldata[links].url;
    }

    window.goToBlog = goToBlog;  // Assign to window so it can be called globally
});

function toIndexBlog() {
    window.location.href = "/Blog/Index.html";
}