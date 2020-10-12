const role ="host";
const person ="Adam Silk";
const role2 ='waitress';
const person2 ="James Cameron"

//old way of adding into the object

const team={}
team[role] = person;
team[role2] = person2;


//new way of adding into the object, computed properties
const team ={
  [role]: person,
  [role2]: person2
}
//old way no computed properties
function addProp(obj,k,v){
  const copy ={...obj}
  copy[k] = v;
  return copy
}

const res = addProp(team,'happy','yes')

// rewrite using computed properties

const addProperties=(obj, k,v) => { 
  return {...obj, [k]:v}
}


const addPropertiesImpl=(obj, k,v) =>({...obj, [k]:v})

// methods

const math ={
  add: function(x,y){
    return x+y
  },
  multiply: function(x,y){
    return x*y
  }
}