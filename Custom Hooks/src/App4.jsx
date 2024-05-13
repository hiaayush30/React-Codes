//onMouseMove custom hook
import React, { useEffect, useState } from 'react'
  function useMouseMove(){
    function moveHandler(e){
        setMouseCoordinates({x: e.clientX, y: e.clientY})
      }

    const [mouseCoordinates,setMouseCoordinates]=useState({ x: 0, y: 0 });
    useEffect(()=>{
        window.addEventListener("mousemove",moveHandler)
        return ()=>{
            window.removeEventListener("mousemove",moveHandler);
        }
    },[])
    return mouseCoordinates;
  }
const App = () => {
    const mouseCoordinates=useMouseMove();
  return (
    <div>
      the mouse position is {mouseCoordinates.x} and {mouseCoordinates.y} !
    </div>
  )
}

export default App
