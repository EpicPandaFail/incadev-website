new WOW().init();

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");

    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const services = document.querySelectorAll('.service');

services.forEach(service => {
    const icon = service.querySelector('i');

    service.addEventListener('mouseenter', () => {
        icon.classList.add('fa-bounce');
    });

    service.addEventListener('mouseleave', () => {
        icon.classList.remove('fa-bounce');
    });
});

const layers = document.querySelectorAll('.layer');

layers.forEach(layer => {
    const hyperlink = layer.querySelector('a');
    const icon = hyperlink.querySelector('i');

    hyperlink.addEventListener('mouseenter', () => {
        icon.classList.add('fa-beat');
    });

    hyperlink.addEventListener('mouseleave', () => {
        icon.classList.remove('fa-beat');
    });
});

const contact_left = document.querySelector('.contact-left');
const my_email = contact_left.querySelector('.my-email');
const my_phone = contact_left.querySelector('.my-phone');
const email_icon = my_email.querySelector('i');
const phone_icon = my_phone.querySelector('i');

my_email.addEventListener('mouseenter', () => {
    email_icon.classList.add('fa-flip');
});

my_email.addEventListener('mouseleave', () => {
    email_icon.classList.remove('fa-flip')
});

my_phone.addEventListener('mouseenter', () => {
    phone_icon.classList.add('fa-shake');
});

my_phone.addEventListener('mouseleave', () => {
    phone_icon.classList.remove('fa-shake')
});

var sidemenu = document.getElementById("side-menu");
var menuBtn = document.getElementsByClassName("nav-btn fa-bars")[0];
var isMenuOpen = false;

function openmenu() {
    sidemenu.style.right = "0";
    document.addEventListener("click", closeOnClickOutside);
    isMenuOpen = true;
}

function closemenu() {
    sidemenu.style.right = "-200px";
    document.removeEventListener("click", closeOnClickOutside);
    isMenuOpen = false;
}

function closeOnClickOutside(event) {
    if (isMenuOpen && event.target !== sidemenu && event.target !== menuBtn && !sidemenu.contains(event.target)) {
        closemenu();
    }
}

var menuItems = document.querySelectorAll("#side-menu li a");
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        closemenu();
    });
});