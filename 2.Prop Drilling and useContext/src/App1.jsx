//without useContext
//example of Prop Drilling
import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount}/>
    </div>
  )
}
function Counter({count,setCount}){
  return(
    <>
  <div>Count:{count}</div>
  <Button count={count} setCount={setCount}/>
  </>
  )
}

function Button({count,setCount}){
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1)
  }
  return(
    <>
    <button onClick={increment}>Increase Count</button>
    <button onClick={decrement}>Decrease Count</button>
    </>
  )
}
export default App
