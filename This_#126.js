const annoyer = {
  phrases: ['heo', 'lol', 'blah'],
  pickPhrase(){
    const{phrases} = this;
    const index = Math.floor(Math.random()*phrases.length);
    return phrases[index]
  },
  start(){
    this.timedId=setInterval(()=> {
       console.log ( this.pickPhrase())
      },3000)
  },
  stop(){
    clearInterval(this.timedId);
    console.log("it is over")
  }
}