const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

//Selection

const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");


//date
let futureDate = new Date(2024,4,24,11,30,0);

const year = futureDate.getFullYear();

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();

const seconds = futureDate.getSeconds;

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveAway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

//time in ms

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  //convert ms to sec, min, hours

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 100;

  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay)/oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    } return item
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  //para que no se buguee al bajar de 0

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired>sorry, this
    giveaway has expired</h4>`;
  }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

