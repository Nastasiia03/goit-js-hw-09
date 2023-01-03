import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker");
const btn = document.querySelector("button");
const days1 = document.querySelector("span[data-days]");
const hours1 = document.querySelector("span[data-hours]");
const minutes1 = document.querySelector("span[data-minutes]");
const seconds1 = document.querySelector("span[data-seconds]");
let interval = null;


btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = new Date();
    if (selectedDates[0] < date.getTime()) {
      btn.disabled = true;
      return window.alert("Please choose a date in the future");
    } else {
      btn.disabled = false;
      btn.addEventListener("click", () => {
        interval = setInterval(() => {
  const timer = selectedDates[0] - new Date();
  if (timer <= 1000) {
  clearInterval(interval);
  };
    const timer1 = convertMs(timer);
    days1.textContent = addLeadingZero(timer1.days);
    hours1.textContent = addLeadingZero(timer1.hours);
    minutes1.textContent = addLeadingZero(timer1.minutes);
    seconds1.textContent = addLeadingZero(timer1.seconds);
}, 1000);
      });
    };
  },
};
    

const fp = flatpickr(myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
};

