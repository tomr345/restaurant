import generateHomepage from './home';
import generateMenu from './menu';

generateHomepage();
initialiseListeners();

function refresh() {
    const content = document.getElementById('content');
    content.replaceChildren();
}

function homepage() {
    refresh();
    generateHomepage();
    initialiseListeners();

}

function menu() {
    refresh();
    generateMenu();
    initialiseListeners();
}

function initialiseListeners() {
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', homepage);
    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click', menu);
}