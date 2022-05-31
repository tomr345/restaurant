function generateMenu() {
    const content = document.getElementById('content');
    // content.appendChild(generateHeader());
    // content.appendChild(generateNav());
    content.append(generateHeader(), generateNav(), createMenuSection());
}

function generateHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restauranto';
    return header;
}

function generateNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    nav.appendChild(createNavTab('tab', 'home', 'Home'));
    nav.appendChild(createNavTab('tab', 'menu', 'Menu'));
    nav.appendChild(createNavTab('tab', 'contact', 'Contact'));

    return nav;
}

function createNavTab(class1, class2, text) {
    const tab = document.createElement('div');
    tab.classList.add(class1, class2);
    tab.innerText = text;
    return tab;
}

function createMenuSection(){
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    const option1 = document.createElement('div');
    const option2 = document.createElement('div');
    const option3 = document.createElement('div');
    const option4 = document.createElement('div');
    option1.classList.add('option');
    option1.innerText = 'Pizza';
    option2.classList.add('option');
    option2.innerText = 'Burger';
    option3.classList.add('option');
    option3.innerText = 'Pasta';
    option4.classList.add('option');
    option4.innerText = 'Salad';
    menu.append(option1, option2, option3, option4);
    return menu;
}

export default generateMenu;