/*axios.get("https://swapi.dev/api/filmdfgs/2/").then((res)=>{
  console.log(res.data)
})
.catch((err)=>{
  console.log("no luck")
})*/

axios.get("https://swapi.dev/api/films/2/")
.then(({data})=>{
  console.log(data.title)
  return axios.get(data.next)
})
.then(({data})=>{
  console.log(data.title)
})

.catch((err)=>{
  console.log("no luck")
})