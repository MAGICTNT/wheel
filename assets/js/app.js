

    const wheel = document.querySelector(".wheel");
    const startButton = document.querySelector('.button');

    let deg = 0;

    startButton.addEventListener('click', () =>{
        startButton.style.pointerEvents = 'none';
        deg = Math.floor(5000 + Math.random() * 5000);
        wheel.style.transition = "all 10s ease-out";
        wheel.style.transform = `rotate(${deg}deg)`;

    });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });

  

let ajax = document.getElementById("ajax");
ajax.addEventListener("click", test, true);
let aleatoire;

function getRandomInt(max) {
  return Math.floor(Math.random() * 999999);
}

function test() {
  aleatoire = getRandomInt(1);
  // alert(aleatoire);
  ajax.style.backgroundColor = "#" + aleatoire;
  ajax.style.boxShadow = "7px 10px 63px 13px #" + aleatoire;
  ajax.style.color = "white";
}


