//Toggle Theme on button using useEffect useRef and conditional Rendering
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [light, setLight] = useState(true);
  const btnRef = useRef();

  useEffect(() => {
    if (light == true) {
      btnRef.current.style.backgroundColor = "white";
      btnRef.current.style.color = "black";
      document.getElementById("body").style.backgroundColor = "white";
    }
    else {
      btnRef.current.style.backgroundColor = "red";
      btnRef.current.style.color = "white";
      document.getElementById("body").style.backgroundColor = "black";
    }
  }, [light])

  return (
    <div>
      <button ref={btnRef} onClick={() => {
        setLight(c => c = !c);
        applyTheme();
      }}>{light ? "Go Dark" : "Go Light"}</button>
    </div>
  )
}
export default App
