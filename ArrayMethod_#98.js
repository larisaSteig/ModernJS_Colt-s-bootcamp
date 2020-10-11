const numbers =[20,21,23,24,25]

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