/*async function getSomething(){
  try {
    const res = await axios.get("https://swapi.dev/api/filmss/2/")
    console.log(res.data)
  }catch(err){
    console.log(err)
  }

}*/
//Sequentual process: one is done, then the second one will go ,and then the third
/*async function getPokemon(){
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}
getPokemon();*/



//Parallel process: 
async function getPokemon(){
  const prom1 =axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 =axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 =axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  const results = await Promise.all([prom1,prom2,prom3]);
  //console.log(results)
 printNames(results)
}

function printNames(results){
  for(let pokemon of results){
    console.log(pokemon.data.name)
  }
}
getPokemon();