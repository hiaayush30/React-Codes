//Context API
import React, { useContext, useState } from 'react'
import { CountContext } from './context';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count,setCount}}>
            <div>
                <Counter/>
            </div>
        </CountContext.Provider>
    )
}
function Counter() {
    const {count}=useContext(CountContext);
    return (
        <>
            <div>Count:{count}</div>
            <Button />
        </>
    )
}

function Button() {
    const {setCount}= useContext(CountContext)
    function increment() {
        setCount(c=>c + 1);
    }

    function decrement() {
        setCount(c=>c - 1)
    }
    return (
        <>
            <button onClick={increment}>Increase Count</button>
            <button onClick={decrement}>Decrease Count</button>
        </>
    )
}
export default App
