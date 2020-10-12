const input = document.querySelector("#username");

/*input.addEventListener('keydown',function(e){
  console.log("key down")
})

input.addEventListener('keyup',function(e){
  console.log("key up")
})*/

input.addEventListener('keypress',function(e){
  console.log("key press")
})

const addItemInput= document.querySelector("#addItem")
const items = document.querySelector("#items")

addItemInput.addEventListener("keypress", function(e){
  if(e.key === 'Enter'){
    // add new item to the list 
    //this.value  = means the entry in the box before Enter was clicked
    const newItemText = this.value;
    // creating a new list element
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    items.append(newItem);
    this.value = " ";
  }
})

