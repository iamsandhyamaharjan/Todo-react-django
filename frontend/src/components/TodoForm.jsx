import React, { useState } from 'react'
import axios from 'axios'

const TodoForm = ({setTodos,fetchData}) => {

const [newTodo, setNewTodo]=useState({
  'body':''
})

const handleChange = (e) =>{
  setNewTodo(prev =>({
    ...prev,
    'body':e.target.value
  }))
}
const posTodo = async()=>{
  try{
    await axios.post("http://127.0.0.1:8000/api/todo/",newTodo)
setNewTodo({'body':''})
    fetchData()
  }catch(error)
  {
    console.log(error)
  }
}
  return (
    <div>
          <input type="text" placeholder='Add Todo' className='input input-bordered input-info w-full max-w-xs' onChange={handleChange} value={newTodo.body}
          onKeyDown={(e) =>{
            if(e.key === 'Enter'){
              posTodo()
            }
          }}
          />
          <button className='btn btn-primary ml-2' onClick={posTodo}>Add Task</button>
          </div>
  )
}

export default TodoForm