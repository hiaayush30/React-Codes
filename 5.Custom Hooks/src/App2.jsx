//data fetching custom hook//similar to swr library or react query
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

// function useTodos() {
//     const [todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         axios.get("https://sum-server.100xdevs.com/todos")
//             .then(res => {
//                 setTodos(res.data.todos);
//             })
//         setLoading(false)
//     }, [])
//     return { todos, loading }
// }

//adding a timer(setInterval) repoll the backend every n seconds
function useTodos(time) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
       const interval= setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos")
                .then(res => {
                    setTodos(res.data.todos);
                })
        }, time * 1000)
        //run atleast once before the seconds delay
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos);
            })
        setLoading(false)
        return ()=>{
            clearInterval(interval);
            console.log("interval cleared!")
        }
    }, [time])
    return { todos, loading }
}

function App() {

    //   const [todos, setTodos] = useState([])

    //   useEffect(() => {
    //     axios.get("https://sum-server.100xdevs.com/todos")
    //       .then(res => {
    //         setTodos(res.data.todos);
    //       })
    //   }, [])

    const { todos, loading } = useTodos(3);

    return (
        <>
            {loading && <div>loading...</div>}
            {todos.map(todo => <Track todo={todo} />)}
        </>
    )
}

function Track({ todo }) {
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

export default App