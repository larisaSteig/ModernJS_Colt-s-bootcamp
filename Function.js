const { retry } = require("async")

function rollDie(){
  let roll = Math.floor(Math.random()*6+1)
  
  return `Roll is ${roll}`
}

function throwDice(num){
  for (let i=1; i <= num; i++){
    rollDie()
  }
}

// # 83 // MY VERSION # 83 in modern javaScript Bootcamp Course//
function isValidPassword(password,name){
  if ( password.length < 8 ||password.includes(name)|| /\s/.test(password)){
    return false
  }
  else {
    return true
  }
}

// COLT VERSIOM
function isValidPassword(password,name){
  if ( password.length < 8 || password.indexOf(' ') != -1||password.indexOf(name) != -1){
    return false
  }
  else {
    return true
  }

}

//# 84 // Write a function to get the average value in an array of numbers avg([0,50]) //25 _ ave([75,76,80,95,100]) = 85.2

const numberArray = [75,76,80,95,100]

function avgArray(array){
  let avg =0;
  let sum =0;
    for ( num of array){
      sum +=num
    }
    
    return avg = sum/array.length
}

// #85 Write a function called isPangram, which chekcs to see if a given senctence contains every letter of the alphabet.

let phrase = "The quick brown fox jumps over the lazy dog"
let anotherPhrase = "The quick brown fox jumps over the"
// COLTS version with includes , which is a boolean method
function isPangram(string){
  for (let char of "abcdefghijklmnopqrstuvwxyz"){
    if (!string.includes(char)){
        return false
      } 
    }
    return true
}

// COLT version
function isPangramColt(sentence){
  for (let char of "abcdefghijklmnopqrstuvwxyz"){
    if(sentence.indexOf(char)=== -1){
      return false
    }
  } 
  return true
}

// #86 Write a getCard() function which returns a random playing card object, like:
// {
//   value: "K",
//   suit: "clubs"
// }
// Pick a random value from : 1-10 J Q K A
//pick a random suit from  clubds, spades, hearts and diamonds
// return both as an object

//My solution

function getCard(){

  const cardNumber = [1,2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"]
  const suitCollection = ["club", "spade", "heart", "diamond"]
  let i = Math.floor(Math.random()*cardNumber.length)
  let z = Math.floor(Math.random()*suitCollection.length)
  console.log(z)
  return  `Value : ${cardNumber[i]} \nSuit: ${suitCollection[z]}`

}

//COLT solution is the same as mine!!!!!

