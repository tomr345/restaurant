function generateHomepage() {
    const content = document.getElementById('content');
    content.appendChild(generateHeader());
    content.appendChild(generateNav());
    content.appendChild(generateIntro());
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

function generateIntro() {
    const main = document.createElement('div');
    main.classList.add('main');

    const intro = document.createElement('div');
    intro.classList.add('intro');

    const message1 = document.createElement('p');
    message1.setAttribute('id', 'intro-message');
    message1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci dapibus ultrices in. Et ultrices neque ornare aenean euismod. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Amet purus gravida quis blandit turpis cursus in. Dui nunc mattis enim ut tellus.'

    const message2 = document.createElement('p');
    message2.setAttribute('id', 'intro-message2');
    message2.innerText = 'Odio morbi quis commodo odio aenean. Vitae sapien pellentesque habitant morbi. Nibh venenatis cras sed felis eget velit. Donec ac odio tempor orci dapibus. Egestas pretium aenean pharetra magna. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Viverra aliquet eget sit amet tellus cras. Pellentesque eu tincidunt tortor aliquam. Convallis posuere morbi leo urna molestie at elementum eu. Turpis egestas pretium aenean pharetra.'

    intro.appendChild(message1);
    intro.appendChild(message2);
    main.appendChild(intro);

    return main;
}

export default generateHomepage;
