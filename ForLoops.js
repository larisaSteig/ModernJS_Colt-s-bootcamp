const placeholder = document.querySelector(".sum")

const numbers = [[1,3,5,],[6,8,10],[12,15,16]];

// for (let row of numbers){
//   let sum = 0;
//   for ( let num of row){
//     sum +=num
//   }
//   console.log (`${row} sumed to ${sum}`)
// }

const words1 =["mail", 'milk', 'bath', 'black'];
const words2 =['box', 'shake', 'tub', 'berry'];

// for( let i = 0; i < words1.length; i++){
//  console.log(words1[i], words2[i])
// }

const Movie ={
  Alien : 9.9,
  Arrival : 10,
  Amelie : 5.5
}
// let sum = 0;

// for ( rating of Object.values(Movie)){
//    sum += rating
// }

// console.log(rating)
// console.log(sum)

// for ( movie of Object.keys(Movie)){
//   console.log(movie, Movie[movie])
// }
// for ( movie of Object.values(Movie)){
//   console.log(movie, Movie[movie])
// } DOES NOT WORK AS IT IS A VALUE NOT A KEY

for (movie in Movie){
  console.log(movie)
  console.log(Movie[movie])
}