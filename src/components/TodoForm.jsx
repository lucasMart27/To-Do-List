import {useState} from 'react'

const TodoForm = () => {
  const [value, setValue]= useState(" ")
  const [categoryy, setCategory] = useState(" ")

  const handleSubmit =(e) => {
    e.preventDefault()
    if (!value || !categoryy) return;
    console.log(value, categoryy)
    //adicionar todo
    //li,par os campos
  }

  return (
    <div className='todo-form'>
    <h2>Criar tarefas:</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Digite o título' onChange={(e) => setValue(e.target.value)}/>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value=""> Selecione uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button type="submit"> Criar tarefa</button>
    </form>
    </div>
  )
}

export default TodoForm