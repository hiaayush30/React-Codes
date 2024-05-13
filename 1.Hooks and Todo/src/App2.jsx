//useEffect and use cases useRef
import React, { useState, useRef, useEffect } from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    //useRef for persisting values for variables
    // const a=useRef(0);
    // useEffect(()=>{
    //     console.log("I run every time button is clicked")
    //     console.log(`the value of a now is ${a.current}`);
    //     a.current++;
    // },[count])

    //useRef instead of DOM Manipulation
    const myref = useRef()
    useEffect(() => {
        myref.current.style.backgroundColor = "red";
    }, [])
    return (
        <div>
            <Navbar/>
            <button ref={myref} onClick={() => { setCount(c => c + 1) }}>Count:{count}</button>
        </div>
    )
}
function Navbar() {
    useEffect(() => {
        console.log("Navbar component was mounted!")
        return function () {
            //cleanup function in useEffect
            console.log("Navbar component was unmounted!")
        }
    }, [])
    return (
        <div>
            This is the Navbar
        </div>
    )
}
export default App

