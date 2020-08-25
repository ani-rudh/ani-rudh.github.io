const header = document.querySelector('header');
const h1 = document.querySelector('h1');

let requestURL = 'https://gist.githubusercontent.com/ani-rudh/a43a80dff72c3535aa92cc2efcc9e03b/raw/99b3ab64be1a5ff3b4110c197b1f3fc4a42419c8/sample.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function()
{
    const configtext = request.response;
    const config = JSON.parse(configtext);

    h1.textContent = configtext;
}

// h1.textContent = 'Welcome to Ani\'s page!';