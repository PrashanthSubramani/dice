window.onload = function(e){
  let playerRandomId = Math.floor(Math.random() * 2) + 1;
  playerPlayNow(playerRandomId);

}

let playerName = document.getElementById('playerName');

function playerPlayNow(id){
    let player1Btn = document.getElementById('player-1-roll');
    let player2Btn = document.getElementById('player-2-roll');

    if(id === 1){
        player2Btn.disabled = true;
        player2Btn.classList.remove("active_btn");
        player1Btn.classList.add("active_btn");
        playerName.innerHTML = "Player 1 To Play";
    }else{
        player1Btn.disabled=true;
        player1Btn.classList.remove("active_btn");
        player2Btn.classList.add("active_btn");
        playerName.innerHTML = "Player 2 To Play";
    }
}

function playerPlayNext(playerId){
    let player1Btn = document.getElementById('player-1-roll');
    let player2Btn = document.getElementById('player-2-roll');
    if(playerId === 1){
        player1Btn.disabled=true;
        player1Btn.classList.remove("active_btn");
        player2Btn.classList.add("active_btn");
        player2Btn.disabled=false;
        playerName.innerHTML = "Player 2 To Play";
    }else{
        player2Btn.disabled = true;
        player2Btn.classList.remove("active_btn");
        player1Btn.classList.add("active_btn");
        player1Btn.disabled=false;
        playerName.innerHTML = "Player 1 To Play";
    }
}

let player1Score = 0;
let player2Score = 0;

function playerRoll(playerId){

    let score =  Math.floor(Math.random() * 6) + 1;

    let player1ScoreCard = document.getElementById('scoreCardPlayer1');
    let player2ScoreCard = document.getElementById('scoreCardPlayer2');

    showDiceValue(score);

    if(playerId == 1){
        player1Score += score;
        player1ScoreCard.innerHTML = player1Score;

        if(player1Score == 30 || player1Score >30){
            alert("Player 1 win!");
            window.location.reload();
        }else{
            playerPlayNext(playerId);
        }

    } else {
        player2Score += score;
        player2ScoreCard.innerHTML = player2Score;
        if(player2Score == 30 || player2Score >30){
            alert("Player 2 win!");
            window.location.reload();
        }else{
            playerPlayNext(playerId);
        }
    }

}

function showDiceValue(value){
    let showDiceValue = document.getElementById('diceImage');
    if(value == 1){
        showDiceValue.src = "assets/images/1.JPG";
    }else if(value == 2){
        showDiceValue.src = "assets/images/2.JPG";
    }else if(value ==3){
        showDiceValue.src = "assets/images/3.JPG";
    }else if(value ==4){
        showDiceValue.src = "assets/images/4.JPG";
    }else if(value == 5){
        showDiceValue.src = "assets/images/5.JPG";
    }else if(value == 6){
        showDiceValue.src = "assets/images/6.JPG";
    }
}


