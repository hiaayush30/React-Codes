//custom hook for debouncing input
import React, { useEffect, useState } from 'react'
function useDebounceInput(input,delay){
    const[debounced,setDebounced]=useState("")
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      console.log("API call sent!");
      setDebounced(input);
    },delay)
    return ()=>{
        clearTimeout(timeout);
    }
  },[input])
  return debounced
}
const App = () => {
  const[input,setInput]=useState("");
  const debouncedVal=useDebounceInput(input,500);
  return (
    <div>
      <input type='text' onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter text'></input>
      <div>Debounced value is {debouncedVal}</div>
    </div>
  )
}

export default App
