const header = document.querySelector('header');
const h1 = document.querySelector('h1');

let requestURL = 'https://github.com/ani-rudh/ani-rudh.github.io/blob/master/sample.json';
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