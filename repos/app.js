const xhr = new XMLHttpRequest();
const url = `https://api.github.com/users/${'mursalfk'}/repos?per_page=200`;
xhr.open('GET', url, true);
xhr.onload = function () {
    const data = JSON.parse(this.response);
    for (let i in data) {
        let ul = document.getElementById('userRepos');
        let li = document.createElement('li');
        li.classList.add('list-group-item')

        li.innerHTML = (`
            <p><strong>ID:</strong> ${data[i].id}</p>
            <p><strong>Repo:</strong> ${data[i].name}</p>
            <p><strong>Description:</strong> ${data[i].description}</p>
            <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            <p><strong>Created at:</strong> <a href="${data[i].created_at}">${data[i].created_at}</a></p>

        `);
        ul.appendChild(li);        
    }
}
xhr.send();