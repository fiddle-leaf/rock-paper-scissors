/*
ROCK PAPER SCISSORS Pseudocode
    1. create a function to play against computer with computerPlay()
    2. create a function that plays a single around of RPS with two parameters: playerSelection and computerSelection
        i. parameters are case-insensitive
        ii. use prompt() to get input from user
    3. return a string that declares winner
        i. return the results of the function call, not console.log() them
    4. create a function game() that iterates 5 round of RPS that keeps score and reports winner or loser at the end
        i. use console.log() to display results of each round and winner at the end
*/

// console.log("Hello world!")

// function for overal gameplay (5x)
function game () {
    let userScore = 0, computerScore = 0; 

    for (let i = 0; i < 5; i++) {

        //input from user and computer
        let playerSelection = window.prompt(`Let's Play! 
        Rock, Paper, Scissors?`);
        let computerSelection, winner, user = 0, computer = 0;

        computerPlay = () => 
        computerSelection = Math.floor(Math.random() * 3) + 1;

        computerPlay();

        function playRound(_playerSelection, _computerSelection) {
            /* check values of input
            console.log(computerSelection, playerSelection);*/

            //create condition for switch
            let results = `${playerSelection.toLowerCase()}${computerSelection}`;

            /* check value of condition
            console.log(results);*/
            
            switch(results) {
                //rock = 1, paper = 2, scissors = 3
                case "rock1":
                case "paper2":
                case "scissors3":
                    winner = "It's a tie!";
                    break;
                case "rock2": {
                    winner = "You lose! Paper beats rock!";
                    ++computer; 
                    break;
                }
                case "rock3": {
                    winner = "You win! Rock beats scissors!";
                    ++user;
                    break;
                }
                case "paper1": {
                    winner = "You win! Paper beats rock!";
                    ++user;
                    break;
                }
                case "paper3": {
                    winner = "You lose! Scissor beats paper!";
                    ++computer;
                    break;
                }
                case "scissors1": {
                    winner = "You lose! Rock beats scissors!";
                    ++computer;
                    break;
                }
                case "scissors2": {
                    winner = "You win! Scissors beats paper!";
                    ++user;
                    break;
                }
                default:
                    console.log("Error has occured.");
            }

            return winner;

            }

            playRound();

            console.log(winner);

            // keep score with switch
            if (user == 1) {
                ++userScore;
            } else if (computer == 1) {
                ++computerScore;
            } 
                
            }

            // print scoreboard
            console.log(`Score: 
            user - ${userScore}
            computer - ${computerScore}`);

            // who won?
            (userScore > computerScore) ? 
            console.log("User won! Nice job!!") : 
            (userScore < computerScore) ? 
            console.log("Computer won, sadly.") : 
            (userScore == computerScore) ? 
            console.log("It's a tie!") : 
            (userScore == 0 && computerScore == 0) ?
            console.log("No score available") : console.log("Error!");
        
        } 

    game();