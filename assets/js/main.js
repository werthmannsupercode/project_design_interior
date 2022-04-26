let ism = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let sideMenu = document.getElementById('side_menu');

function getValues() {
    console.log(ism.value);
    console.log(email.value);
    console.log(message.value);
    ism.value = '';
    email.value = '';
    message.value = '';
}

function slideIn() {
    sideMenu.style.right = 0;
    sideMenu.style.left = '50%';
}

function slideOut() {
    sideMenu.style.left = '100%';
    sideMenu.style.right = '-100%';
}