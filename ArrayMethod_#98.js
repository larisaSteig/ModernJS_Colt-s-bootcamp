const numbers =[2,3,5,4,10]

const doubles = numbers.map(function(n){
  return n*2
})

const words=["lol",'ok','hello']

const upper = words.map(function(n){
  return n.toUpperCase();
})

const numDetails = numbers.map(function(n){
  return {
    value: n,
    isEven: n%2===0
  }
})

const abbrev = words.map (function(word){
  return word.toUpperCase().split("").join('.')
})

let movies =["the Fantastic Ms.Fox", "Mr. and Mrs.Smith","Mrs.doubts", "Mr.Deeds"]

const movie = movies.find(movie =>movie.includes('Mrs')) // find a movie which has Mrs in it anywhere

const movie2 = movies.find(movie => movie.indexOf("Mrs")===0) // find a movie which start with Mrs


const oddNum= numbers.filter(n=> n%2===1)

const prices = [12,400.50,3000,99.99,35.99,9500]
const sort1 = prices.sort((a,b)=> a-b)
const sort2 = prices.sort((a,b)=> b-a)

const product = numbers.reduce((total,currentVal)=> total * currentVal)

const grades =[87,64,96,92,88,99,73,70,64]
//option one for finding a max value
const maxGrade = grades.reduce((max, currVallue)=> {
  if(currVallue > max) return currVallue;
  return max;
})

//option two for finding a max value

const maxGrade = grades.reduce((max, currVallue)=> {
  return Math.max (max, currVallue)
})


const votes =["y", "y", "n","y", "n"]
// option one for giving back an object
const results = votes.reduce((accumulator, curVal)=>{
  if (accumulator[curVal]) { accumulator[curVal] ++}
  else { accumulator[curVal] = 1}
  return accumulator
}, {})
//option two for the same
const results = votes.reduce((accumulator, curVal)=>{
  accumulator[curVal]= (accumulator[curVal]|| 0)+1;
  return accumulator
}, {})