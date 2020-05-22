const xhr = new XMLHttpRequest();
const url = `https://api.github.com/users/${'mursalfk'}/repos?per_page=200`;
xhr.open('GET', url, true);
xhr.onload = function () {
    const data = JSON.parse(this.response);
    for (let i in data) {
        let ul = document.getElementById('userRepos');
        ul.classList.add('list-inline')
        let li = document.createElement('li');
        li.classList.add('list-inline-item')
        // li.classList.add('col-sm-4 my-3')
        // li.classList.add('card border-0')

        li.innerHTML = (`
            <li class="col-sm-0 card" style="margin-top:25px; padding:20px">
                <p><strong>Project:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            </li>
        `);
        ul.appendChild(li);        
    }
}
xhr.send();


