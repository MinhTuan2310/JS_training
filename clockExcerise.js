function display2digits(time) {
  
  return time < 10 ? `0${time}` : time;
}


function printClock() {
  const now = new Date();
  const hours = display2digits(now.getHours());
  const minutes = display2digits(now.getMinutes());
  const seconds = display2digits(now.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
}

let intervalId = setInterval(() => {
  console.log(printClock());
  clearInterval(intervalId);
}, 1000);