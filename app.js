const myButton = document.querySelector(".myButton");
const myForm= document.querySelector(".demo");

myButton.addEventListener('click', () => {
    if (myForm.style.display === 'block') {
        myForm.style.display = 'none';
    } else {
        myForm.style.display = 'block';
    }
});

const form = document.querySelector(".demo");
const myClose = document.querySelector(".close1");

myClose.addEventListener('click', () => {
    if (form.style.display === 'block') {
        form.style.display = 'none';
    }
}); 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
    if (navLinks.style.transform === 'scaleX(1)') {
        navLinks.style.transform = 'scaleX(0)';
    } else {
        navLinks.style.transform = 'scaleX(1)';
    }
});