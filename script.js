const refs = {
  hrs: document.querySelector("#hrs"),
  min: document.querySelector("#min"),
  sec: document.querySelector("#sec"),
};

setInterval(() => {
  let currentDate = new Date();

  refs.hrs.innerHTML =
    (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
  refs.min.innerHTML =
    (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
  refs.sec.innerHTML =
    (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
}, 1000);
