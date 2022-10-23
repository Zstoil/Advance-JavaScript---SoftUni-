window.addEventListener('load', solve);

function solve() {

    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let allHits = document.getElementsByClassName('all-hits-container')[0];
    let saveContainer = document.getElementsByClassName('saved-container')[0];
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    let likes = 0;

    function add(e) {
        e.preventDefault();

        let genreValue = genre.value;
        let nameValue = name.value;
        let authorValue = author.value;
        let dateValue = date.value;

        if (!genreValue || !nameValue || !authorValue || !dateValue) {
            return;
        }

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.setAttribute("src", "./static/img/img.png");

        let genreH2 = document.createElement('h2');
        genreH2.textContent = `Genre: ${genreValue}`;

        let nameH2 = document.createElement('h2');
        nameH2.textContent = `Name: ${nameValue}`;

        let authorH2 = document.createElement('h2');
        authorH2.textContent = `Author: ${authorValue}`;

        let dateH3 = document.createElement('h3');
        dateH3.textContent = `Date: ${dateValue}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', save);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', like);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSection);

        div.appendChild(img);
        div.appendChild(genreH2);
        div.appendChild(nameH2);
        div.appendChild(authorH2);
        div.appendChild(dateH3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        allHits.appendChild(div);

        function like(e) {
            e.preventDefault();
            likeBtn.disabled = true;
            likes++;
            let divLike = document.getElementsByClassName('likes')[0];
            // document.getElementsByClassName('likes')[0].children[0].remove();
            Array.from(divLike.children).forEach(el => el.remove());

            let newP = document.createElement('p');
            newP.textContent = `Total Likes: ${likes}`;

            let img = document.createElement('img');
            img.setAttribute("src", "./static/img/like-btn.jpg");
            img.setAttribute("alt", "image-like");

            divLike.appendChild(newP);
            divLike.appendChild(img);
        }

        function save(e) {
            e.preventDefault();

            let div = document.createElement('div');
            div.classList.add('hits-info');

            let img = document.createElement('img');
            img.setAttribute("src", "./static/img/img.png");

            let genreH2 = document.createElement('h2');
            genreH2.textContent = `Genre: ${genreValue}`;

            let nameH2 = document.createElement('h2');
            nameH2.textContent = `Name: ${nameValue}`;

            let authorH2 = document.createElement('h2');
            authorH2.textContent = `Author: ${authorValue}`;

            let dateH3 = document.createElement('h3');
            dateH3.textContent = `Date: ${dateValue}`;

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteSection);


            div.appendChild(img);
            div.appendChild(genreH2);
            div.appendChild(nameH2);
            div.appendChild(authorH2);
            div.appendChild(dateH3);
            div.appendChild(deleteBtn);

            saveContainer.appendChild(div);

            e.target.parentElement.remove();

        }

        function deleteSection(e) {
            e.preventDefault();

            e.target.parentElement.remove();
        }
    }

}