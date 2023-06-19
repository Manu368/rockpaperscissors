const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const resul = document.getElementById("results");

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      player.src = "./" + option.innerHTML + "Player.png";

      const choice = ["stone", "paper", "scissors"];
      let arrayNo = Math.floor(Math.random() * 3);
      let computerChoice = choice[arrayNo];
      computer.src = "./" + computerChoice + "Computer.png";

      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (option.innerHTML === "stone") {
        if (computerChoice === "paper")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "scissors")
          playerPoints.innerHTML = pPoints + 1;
      } else if (option.innerHTML === "paper") {
        if (computerChoice === "scissors")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "stone")
          playerPoints.innerHTML = pPoints + 1;
      } else {
        if (computerChoice === "stone")
          computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "paper")
          playerPoints.innerHTML = pPoints + 1;
      }
    }, 900);
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var inputState = document.getElementById('inputState');
  var button = document.querySelector('.button03');

  inputState.addEventListener('change', function() {
    var selectedOption = inputState.options[inputState.selectedIndex].text;
    var amount = selectedOption.split(': ')[1];
    button.textContent = 'Your Binding Amount: ' + amount;
  });
});


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout: 2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});