$(function(){


  function getPlayerNames() {
    const player1 = prompt("What is the name of Player 1?");
    const player2 = prompt("What is the name of Player 2?");
    $(".playerOneName").text(`${player1}`).css("color", "red");
    $(".playerTwoName").text(`${player2}`).css("color", "red");
  }

  getPlayerNames();

  const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];

  const cards = [
    {
    name: "Ace",
    value: 1
    },
    {
      name: "Two",
      value: 2
    },
    {
      name:"Three",
      value: 3
    },
    {
      name:"Four",
      value: 4
    },
    {
      name: "Five",
      value: 5
    },
    {
      name:"Six",
      value: 6
    },
    {
      name: "Seven",
      value: 7
    },
    {
      name: "Eight",
      value: 8
    },
    {
      name:"Nine",
      value: 9
    },
    {
      name: "Ten",
      value: 10
    },
    {
      name: "Jack",
      value: 11
    },
    {
      name: "Queen",
      value: 12
    },
    {
      name: "King",
      value: 13
    }
  ]

  const deck = suits.map((suit) => {
    const suitedCards = cards.map((card) => {
      const newCard = {
        name: card.name,
        value: card.value,
        suit: suit 
      }
      return newCard;
    })
    return suitedCards;
  }).flat();


  function getCard() {
    return Math.floor(Math.random() * deck.length);
  }


  function flipCards() {
    const x = getCard();
    const y = getCard();
    const card1 = deck[x];
    const card2 = deck[y];
    console.log(card1);
    console.log(card2);
    if (card1 && card2) {
      compareCards(card1, card2)  
      removeFromDeck(x, y);
      $(".suit").text(card1.suit).css("color", "red");
      $(".suit2").text(card2.suit).css("color", "red");
      $(".value").text(card1.value).css("color", "red");
      $(".value2").text(card2.value).css("color", "red");
      $(".score").text(playerOneScoreUpdated).css("color", "red");
      $(".score2").text(playerTwoScoreUpdated).css("color", "red");
    } else {
      checkGameOver();
    }
  }


  function removeFromDeck(x, y) {
    deck.splice(x,1);
    deck.splice(y,1);
  }

  let playerOneScoreUpdated = 0;
  let playerTwoScoreUpdated = 0;

  function compareCards(card1, card2) {
    if (card1.value > card2.value) {
      $(".messageBox").text("Player 1 wins!!! Congratulations.")   
      playerOneScoreUpdated = playerOneScoreUpdated + 1;
    } else if (card2.value > card1.value) {
      $(".messageBox").text("Player 2 wins!!! Congratulations.") 
      playerTwoScoreUpdated = playerTwoScoreUpdated + 1;
    } else {
      alert("War!!");
      console.log(card1, card2);
      flipCards();
    }
  }


  function checkGameOver() {
    if(!deck.length){
      alert("GAME OVER! There are no more cards left in the deck.");
    }
  }


  $(".playButton").on("click", () => {
    flipCards();
  });


  $(".checkScores").on("click", () => {
    alert(`Player 1: ${playerOneScoreUpdated} \nPlayer 2: ${playerTwoScoreUpdated}`);
  })

});


//  push card values to html
// push scores to html
