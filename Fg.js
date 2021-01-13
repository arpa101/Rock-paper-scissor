confirm("Pick one");
function rpsGame(yourChoice) {
    
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice)
    results=decideWinner(humanChoice,botChoice);
    console.log(results);
   Message =finalMessage(results);
   console.log(Message);
   rpsFrontEnd(yourChoice.id,botChoice, Message);
   confirm("In this game Blue one is you and the red one is computer ");
}


function randToRpsInt() {
    return Math.floor(Math.random()*3);
}
function numberToChoice(number) {
    return ['rock' , 'paper' , 'scissors'] [number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase= {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors': 0.5, 'rock': 0},
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore= rpsDatabase[computerChoice][yourChoice];
 return [yourScore,computerScore];
    
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore==0) {
        return{'message':"You Lost! &#128531", 'color':'red'};
    }
    else if(yourScore==0.5) {
        return{'message':"You tied! &#128528", 'color':'yellow'};
    }
    if(yourScore==1) {
        return {'message': "You Won! &#128525", 'color':'green'};
    }
    }

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
      var imagesDatabase= {
        'rock': document.getElementById('rock').src ,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src 
        
      }
       document.getElementById('rock').remove() ;
       document.getElementById('paper').remove();
      document.getElementById('scissors').remove(); 

var humanDiv = document.createElement('div'); 
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');
     
     humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] + "'height=200 weight=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"; 
     messageDiv.innerHTML="<h1 style= 'color: " +finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
     botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] +"' height=200 weight=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";

     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
     document.getElementById('flex-box-rps-div').appendChild(botDiv);
     
     
}

function fun () {
    const initialState =`
     <img id="rock" src="https://preview.redd.it/362pn0urnjs51.jpg?auto=webp&s=bf4eab67565d6e0cfc9121431f42ee4ceb583208" height= "200" width="200" alt="" onclick="rpsGame(this)">
     <img id="paper" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Coloured%2C_textured_craft_card.jpg/220px-Coloured%2C_textured_craft_card.jpg" height= "200" width="200" alt="" onclick="rpsGame(this)">
     <img id="scissors" src="https://i.ytimg.com/vi/m4IH-6P0MpY/maxresdefault.jpg" height= "200" width="200" alt="" onclick="rpsGame(this)" />`;


    document.getElementById("flex-box-rps-div").innerHTML = initialState;
}
