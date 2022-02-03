import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const axios = require("axios").default

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // get todo list from backend
    const getTodos = async () => {
      axios.get("http://localhost:8000/todos")
        .then(res => {
          setTodos(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    getTodos()
  }, [])

  const addTodo = (text) => {
    const newTodo = {id: Math.round(Math.random() * 1000), text: text}
    axios.post("http://localhost:8000/todos", newTodo)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`)
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-3">Todo List</h1>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
