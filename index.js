const header = document.querySelector('header');
const h1 = document.querySelector('h1');

let requestURL = 'https://github.com/ani-rudh/ani-rudh.github.io/blob/master/sample.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function()
{
    const config = request.response;
    h1.textContent = config;
}
// h1.textContent = 'Welcome to Ani\'s page!';