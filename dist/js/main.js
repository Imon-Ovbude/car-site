const dateTime = document.getElementById('date-time');
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();
let hours = today.getHours();
let mins = today.getMinutes();
const toTop = document.querySelector('.to-top');

// Set Minimum Date And Time Attribute and Value
function setDateAttr() {
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

// Back To Top Button
const scrollWatch = () => {
  window.addEventListener('scroll', () => {
    const scrollable = window.scrollY;

    if (scrollable < 1000) {
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

scrollWatch();
setDateAttr();
