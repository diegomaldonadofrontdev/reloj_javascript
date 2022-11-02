let clock = document.querySelector("#display");

let mostrarclock = function () {
  let myClock = new Date();
  let hora = myClock.getHours();
  let minuto = myClock.getMinutes();
  let segundo = myClock.getSeconds();
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }

  clock.textContent = hora + ":" + minuto + ":" + segundo;
};

setInterval(mostrarclock, 1000);
