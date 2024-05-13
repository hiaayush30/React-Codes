//conditional Rendering and mapping
import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([{
    title: "DSA",
    desc: "7 to 9"
  }, {
    title: "Dev",
    desc: "9 to 11"
  }]);

  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => { setClicked(c => c = !c) }}>Click Me</button>

      {/* {clicked ? <div>button was clicked</div>:<div>button was not clicked</div>} */}
      {/* but if i dont want anything to render if button is not clicked */}
      {clicked && <div>button was clicked</div>}

      {todos.map((todo) => {
        return <Todo key={todo.title} todo={todo} />   
        // title as key is not recommended
      })}
    </div>
  )
}
function Todo({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <h5>{todo.desc}</h5>
    </div>
  )
}
export default App
