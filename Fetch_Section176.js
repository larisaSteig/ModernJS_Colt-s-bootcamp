/**FIRST OPTION  */
/*fetch('https://swapi.dev/api/planets/3/')
.then((response) =>{
  if( !response.ok) {
    throw new Error (`Status Code Error: ${response.status}`)
  } else {
    response.json(). then((data)=>{ // response.json returns an object and in order to get data from it, you have to run a second then(data)
      console.log(data.name)
    })
  }
  
})
.catch((err) =>{
  console.log("Something is wrong")
  console.log(err)
})*/
/**END OF FIRST OPTION */

/*SECOND OPTION_Chaining fetch*/

/*fetch('https://swapi.dev/api/planets/3/')
.then((response) =>{
  if( !response.ok) 
    throw new Error (`Status Code Error: ${response.status}`)
    return response.json()
})
.then((data)=> {
  const filmUrl =data.films[0];
  return fetch  (filmUrl);
})
.then ((response)=> {
  if(!response.ok)
    throw new Error(`blah blah blah`)
  return response.json()
})
.then((data) => {
  console.log("YEHAHAHA");
  console.log(data.title)
})
.catch((err) =>{
  console.log("Something is wrong")
  console.log(err)
})*/
/*END OF SECOND OPTION*/

/*THIRD OPTION_Refactoring fetch*/

fetch('https://swapi.dev/api/planets/3/')
.then((response) =>{
  if( !response.ok) 
    throw new Error (`Status Code Error: ${response.status}`)
    return response.json()
})
.then((data)=> {
  const filmUrl =data.films[0];
  return fetch  (filmUrl);
})
.then ((response)=> {
  if(!response.ok)
    throw new Error(`blah blah blah`)
  return response.json()
})
.then((data) => {
  console.log("YEHAHAHA");
  console.log(data.title)
})
.catch((err) =>{
  console.log("Something is wrong")
  console.log(err)
})