// this is a constructor function 
alert("Sdsds")
function Color(r,g,b){
  this.r = r;
  this.g = g;
  this.b = b  
}

Color(24,244,139);

// The NEW operator!

// A. Create a blank Javascript object
// B. Link this obj to another obj
// C. Passes the newly created obj from step 1 as the this context
// D. Returns this if the function does not return its own object

Color.prototype.rgb = function() {
  const {r,g,b} = this;
  return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function (){
  const {r, g,b} = this;
  return '#' +((1<<24)+ (r<<16)+(g<<8)+b).toString(16).slice(1);
}
Color.prototype.rgba  = function(a=1){
  const{r,g,b} = this;
  return `rgb(${r}, ${g}, ${b}, ${a})`
}

const color1 = new Color(255, 34, 54 )
color1.hex();

const color2 = new Color(34, 255,45)
color2.hex();

//CLASS idea

class ColorFuture {
  constructor(r,g,b, name){
    this.r = r,
    this.g = g,
    this.b = b,
    this.name = name
  }
  greet(){
    console.log(`Hello from ${this.name} `)
  }
  innerRGB(){
    const {r,g,b} = this;
    return `${r}, ${g}, ${b}`
  }
  rgba(a=1){
    return `rgba(${this.innerRGB()}, ${a})`
  }
}

const red = new ColorFuture(255,45,65, 'tom')

class Pet {
  constructor(name, age){
    this.name= name,
    this.age = age
  }
  eat(){
    console.log(`${this.name} is eating!`)
  }
}

class Cat extends Pet{
  meow(){
    return 'MEOWWW'
  }
}

class Dog extends Pet{
 
  bark(){
    return 'WOOF'
  }
}