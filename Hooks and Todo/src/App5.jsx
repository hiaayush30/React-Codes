//Fetching data through an api and displaying it
import React, { useEffect, useState } from 'react'

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(async (res) => {
      let data = await res.json();
      setList((list)=>{return [...list,...data]})
    })
  }, [])

  return (
    <div>
      {list.map((element) => {
        return <Createlist key={element.id} e={element} />
      })}
    </div>
  )
}
function Createlist({e}) {
  return (
    <div>
      <h2>{e.id}</h2>
      <h4>{e.title}</h4>
      <h5>{e.body}</h5>
    </div>
  )
}
export default App
