//let string="aabcbdbacb"


//write a getCard() function which returns a random playing card object, like :
//{ value:"K"
//suit:"clubs"}
//Pick a random value from 2-3-4-A
//pick a random suit from: clubs, spades, hearts, diamonds
//Return both in object

/**** FIRST ATTEMPT***** */

/*function getCard(){
 const value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; // create an array
 const idx = Math.floor(Math.random() *value.length);
 const val= value[idx];  

const suit = ["clubs", "spades", "hearts", "diamonds"];
const suitInd=Math.floor(Math.random()*suit.length)
const suite = suit[suitInd]

return {suit: suite, value: val}

}

getCard();*/
/********END OF THE FIRST ATTEMPT */

/**** SECOND ATTEMPT***** */

function pick(arr){
  const ind= Math.floor(Math.random()*arr.length)
  return arr[ind];
}

function getCard(){
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; // create an array
const suits = ["clubs", "spades", "hearts", "diamonds"];


return {suit: pick(suits), value: pick(values)}

}