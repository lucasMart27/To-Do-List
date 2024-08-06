/* eslint-disable react/jsx-key */
import { useState } from 'react'

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistemas",
      category:"Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a acdemia",
      category:"Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category:"Estudos",
      isCompleted: false,
    },
  ])
  

  return (
    <div className="app">
      <h1>Listas de Tarefas</h1>
      <div className="todo-list"></div>
      {todos.map((todo) =>(
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
          <button>Completar</button>
          <button>x</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
