//Wrapper Components
import React from 'react'

function Comp2({children}){
return (
    <div style={{backgroundColor:"red"}}>
        {children}
    </div>
)}
function Comp1(){
    return (
        <div>Hello there</div>
    )
}
const App = () => {
  return (
    <div>
      <Comp2><Comp1></Comp1></Comp2>
    </div>
  )
}

export default App
