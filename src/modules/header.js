import logo from '../pictures/logo.png';

const header = document.createElement('nav');
header.classList.add('navbar');

header.innerHTML = `
<img class='logo' src="${logo}">
<h1 class='title'>Weather Application</h1>

`

export {header}