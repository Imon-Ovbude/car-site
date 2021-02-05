const dateTime = document.getElementById('date-time');
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();
let hours = today.getHours();
let mins = today.getMinutes();
const toTop = document.querySelector('.to-top');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const iframe = document.querySelector('.iframe');
const formMapSection = document.querySelector('.form-map-section');

// Set Iframe Width
const setIframeWidth = () => {
  if (iframe) {
    iframe.setAttribute('width', '90%');
  }
};

// Set Minimum Date And Time Attribute and Value
const setDateAttr = () => {
  if (formMapSection) {
    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    if (mins < 10) {
      mins = '0' + mins;
    }

    today = `${year}-${month}-${day}T${hours}:${mins}`;

    dateTime.setAttribute('min', today);
    dateTime.setAttribute('value', today);
  }
};

// Back To Top Button
const scrollWatch = () => {
  window.addEventListener('scroll', () => {
    const scrollable = window.scrollY;

    if (scrollable < 90) {
      toTop.classList.add('none');
    } else {
      toTop.classList.remove('none');
      toTop.addEventListener('click', scrollToTop);
    }
  });
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

// Hamburger Menu
hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('change');
  line1.classList.toggle('change');
  line2.classList.toggle('change');
  line3.classList.toggle('change');
});

scrollWatch();
setDateAttr();
