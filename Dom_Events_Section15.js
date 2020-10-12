//alert("HEE")
//***********************************************ANNOYING BUTTON EXERCISE ************************************************************/
const button = document.querySelector("button");

button.addEventListener('mouseover', function(){
  const height = Math.floor(Math.random()*window.innerHeight)
  const width = Math.floor(Math.random()*window.innerWidth)

  button.style.left = `${width}px`
  button.style.top = `${height}px`
})

// when user clicked

button.addEventListener('click',function(){
  button.innerText ="you got me"
  document.body.style.backgroundColor = 'pink'
})
/************************************************ END OF ANNOYING BUTTON EXERCISE **********************************************************/
//*********************************** ADDING DIV TP THE PAGE***************************************** */
const container = document.querySelector("#boxes")
const colors =['red', 'orange', 'blue','green', 'purple','yellow', 'violet']

const printColor = function(){
  console.log(this.style.backgroundColor)
 }

const changeColor = function(){
  const header = document.querySelector('h1')
 //container.append(header)
  header.style.color = this.style.backgroundColor
}

for( let color of colors){
      const box = document.createElement('div');
      box.style.backgroundColor = color;
      box.classList.add("box");
      //box.addEventListener('click', printColor)
      box.addEventListener('click', changeColor)
      container.append(box);
}

