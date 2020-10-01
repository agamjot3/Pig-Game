var score, roundScore, activPlayer, dice;
score = [0,0];
roundScore = 0;
activPlayer = 0;
//dice = Math.floor(Math.random()*6) + 1;
//document.querySelector('#current-' + activPlayer).textContent = dice;
//var x = document.querySelector('#score-' + activPlayer).textContent;
//console.log(x);

//Hide Dice At Start

document.querySelector('.dice').style.display = 'none';

//Set Initial Values To 0

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

function newPlayer(){
    activPlayer == 0 ? activPlayer = 1 : activPlayer = 0;  
            roundScore = 0;
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none';
}



//Set Up Event Listener For Roll Button

document.querySelector('.btn-roll').addEventListener('click',function(){
    //Generate a random number 
    var dice = Math.floor(Math.random()*6) + 1;
    //Display 
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png'
     //Update the round score if the rolled number isnt '1'
    if (dice !== 1) {
        roundScore += dice;
        console.log(roundScore);
        document.querySelector('#current-' + activPlayer).textContent = roundScore;
         }
         else{
           newPlayer();
         }
         checkWinner();
});

//New Game Button

document.querySelector('.btn-new').addEventListener('click',function(){
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    roundScore = 0;
    score = [0,0];

});

//Hold Button

document.querySelector('.btn-hold').addEventListener('click',function(){
           score[activPlayer] += roundScore;
           document.querySelector('#score-' + activPlayer).textContent = score[activPlayer];
           newPlayer();
          if (score[activPlayer] >= 20) {
              document.querySelector('#name-' + activPlayer).textContent = 'Winner!';
              document.querySelector('.dice').style.display = 'none';
          } else {
            
          }
})