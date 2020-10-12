function makeDeck(){
  const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; // create an array
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const deck =[];
  for(let value of values){
    for(let suit of suits){
      deck.push({
        value,
        suit
      })
    }
  }
  return deck
}

const myDeck={
  deck: [],
  suits:["clubs", "spades", "hearts", "diamonds"],
  values:['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
  pickedCards:[],
  originalDeck(){
    // deconstruct the object so you can use THIS
    const{suits, values} = this;
    for(let value of this.values){
      for(let suit of this.suits){
        this.deck.push({
          value,
          suit
        })
      }
    }
    //return deck
  },
  drawnCard(){
    const{deck, pickedCards} = this;
    const card = this.deck.pop()
    this.pickedCards.push(card)
    return card
  },
  drawMultipleCard(num){
    //empty array to see the picked cards
   const cards =[];
   for (let i=0; i<num; i++){
     //calling the method above NUM amount of times
     cards.push(this.drawnCard())
   }
   return cards;
  },
  shuffle(){
    const {deck} = this;
    //loop over array backwards
    for(let i = deck.length-1;i>0; i--){
      // pick random index before element
      let index = Math.floor(Math.random()* (i+1));
      //swap
      [deck[i], deck[index]]=[deck[index], deck[i]];
    }
  }

}