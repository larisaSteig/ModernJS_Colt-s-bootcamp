function multiply(x,y){
  if( typeof y ==='undefined')
    y=1
  return x*y
}

function multiplyTwo(x,y){
  y= typeof y ==="undefined" ?1:y
  return x*y
}

function multiplyThree(x,y=1){
  return x*y
}

const num = [2,4,6,8,99]

Math.max(...num)

const animals =['cat', 'dog','pig', 'cattle']

const bird=['owl', 'crown', 'butterfly']

const color =['red','green','yellow']

const animalBird =[...animals, ...bird]

let string="aabcbdbacb"

const arr = [...string];

const maybe = arr.reduce((total, currVal)=>{
if(total[currVal]){
  total[currVal] ++
} else {
  total[currVal] = 1
}

return total
}, {})

//REST
function sum2(...nums){
  return nums.reduce((total, val) =>total+val)
}

const multiply = (...nums)=>( nums.reduce((total,val) => total*val))



function fullName(first, last,...titles){
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}
