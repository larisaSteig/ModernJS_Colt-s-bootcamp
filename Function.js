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
// my version //did not work
function isPangram(string){
  let letters ="abcdefghijklmnopqrstuvwxyz"
    if (string.indexOf(letters)===-1){
      return true
    } else {
      return false
    }
}

// COLT version
function isPangramColt(sentence){
  for (let char of "abcdefghijklmnopqrstuvwxyz"){
    if(sentence.indexOf(char)=== -1){
      return false
    }
    else {
      return true
    }
  }
}