const dateTime = document.getElementById('date-time');
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();
let hours = today.getHours();
let mins = today.getMinutes();

// Set Minimum Date And Time Attribute and Value
function setDateAttr() {
  if (month < 10) {
    month = '0' + month;
  }

  if (day < 10) {
    day = '0' + day;
  }

  today = `${year}-${month}-${day}T${hours}:${mins}`;

  dateTime.setAttribute('min', today);
  dateTime.setAttribute('value', today);
}

setDateAttr();
