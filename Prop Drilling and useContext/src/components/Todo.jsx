import React, { Suspense, useEffect, useState } from 'react'
import axios from "axios";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setInterval(async () => {
            const response = await axios.get("https://sum-server.100xdevs.com/todos");
            setTodos(response.data.todos);
        }, 3000)
        axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
            setTodos(response.data.todos);
        });
    }, [])
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <>
                        <h2>{todo.title}</h2>
                        <h4>{todo.description}</h4>
                    </>
                )
            })}
        </div>
    )
}

export default Todo
