class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks){
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete
    }
    //METHOD ONE to work with THIS
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    //METHOD TWO
    //this.startButton.addEventListener('click', this.start.bind(this));
  }
  //METHOD ONE
  // you have to rewrite it in arrow function way to make it look 
  // so THIS will be reference to the constructor not windows
  start = () => {
    if(this.onStart){
      this.onStart(this.timeRemaining); // this.timeRemaining on start will tell total time from the beggining
    }
    this.tick();
    this.interval = setInterval(this.tick, 50);
  }

  pause =()=>{
    clearInterval(this.interval)
  }

  // this.timeRemaining is actually calling for the timeRemaining method but without () because of GET word before hand. JS will automaticall invoke it
  // for setter...time is = to this.timeRemaining 
  tick =()=>{
    if(this.timeRemaining <= 0) {
      this.pause;
      if (this.onComplete){
        this.onComplete();
      }
    } else {
       //const timeRemaining = this.timeRemaining;
      this.timeRemaining/**this is the setter */ = this.timeRemaining /*this is a getter */- 0.05;
      if(this.onTick){
        this.onTick(this.timeRemaining)
      }
    }
  }

  get timeRemaining(){
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time){
    this.durationInput.value = time.toFixed(2); //toFixed will show 2 numbers after the comma
  }

 

  
  //METHOD TWO
  /*start() {
    this.important();
  }*/

  /* important() {
     console.log("IMPOTANT!")
   }*/
}