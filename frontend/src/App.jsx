import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  fetch ("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos)
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App
