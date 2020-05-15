const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const winner = document.querySelector(".winner");
    //Start the game:
    const startGame = () => {

      const playButton = document.querySelector("button");
      const introScreen = document.querySelector(".intro");
      const playScreen = document.querySelector(".play");
      const playScreen2 = document.querySelector(".option-buttons");

      playButton.addEventListener("click", () => {
         introScreen.classList.add("fadeOut");
         playScreen.classList.add("fadeIn");
         playScreen2.classList.add("fadeIn");
      });
    };

    //Play and Match:
    const playGame = () => {

      const optionBtn = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");

      //Clear the animation styles every start time:
      hands.forEach(hand => {
        hand.addEventListener("animationend", function(){
          this.style.animation = '';
        })
      })

      //Computer hands options:
      const options = ['rock', 'paper', 'scissors'];

      //Computer choice:
      optionBtn.forEach(option => {
        option.addEventListener("click", function(){
          const randomNumber = Math.floor(Math.random() * 3); // pick a random number between 0 and 2
          const computerChoice = options[randomNumber];

          //Hands animation:
          playerHand.style.animation = "shakePlayer 2s";
          computerHand.style.animation = "shakeComputer 2s";
          //Reset the hand to rock every start time:
          playerHand.src = "./images/rock.png";
          computerHand.src = "./images/rock.png";
          winner.innerHTML = " . . . ";

          //Update hand's image:
          setTimeout(() => {
            //Compare with player:
            compareResult(this.textContent, computerChoice);
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoice}.png`;

          },2000);

        });
      });
    };

    //Update scores:
    const updateScore = () => {
      const pScore = document.querySelector(".player-score p");
      const cScore = document.querySelector(".computer-score p");
      pScore.innerHTML = playerScore;
      cScore.innerHTML = computerScore;

    }

    //Compare the player's hand and computer's hands
    const compareResult = (pHand, cHand) =>{
      //Update winner:
      if(pHand === cHand){  //tie
        winner.innerHTML = "It'a tie";
        return;
      }

      //Player: ROCK
      if(pHand === "rock"){
        if(cHand === "paper"){
          winner.innerHTML = "Computer Wins!";
          computerScore ++;
          updateScore();
          return;
        }else{
          winner.innerHTML = "Player Wins!";
          playerScore ++;
          updateScore();
          return;
        }
      }

      //Player: PAPER
      if(pHand === "paper"){
        if(cHand === "scissors"){
          winner.innerHTML = "Computer Wins!";
          computerScore ++;
          updateScore();
          return;
        }else{
          winner.innerHTML = "Player Wins!";
          playerScore ++;
          updateScore();
          return;
        }
      }

      //Player: Scissors
      if(pHand === "scissors"){
        if(cHand === "rock"){
          winner.innerHTML = "Computer Wins!";
          computerScore ++;
          updateScore();
          return;
        }else{
          winner.innerHTML = "Player Wins!";
          playerScore ++;
          updateScore();
          return;
        }
      }

    };


    startGame();
    playGame();
};
game();
