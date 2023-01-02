import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker");
const btn = document.querySelector("button");
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
      };
  },
};

const fp = flatpickr(myInput, options);

