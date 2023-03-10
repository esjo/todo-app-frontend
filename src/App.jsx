

import { useState, useEffect } from 'react'
import './App.css'
import { Todo } from './components/Todo'
import { addTodo, deleteTodo, getAllTodo, updateTodo } from './utils/handleApi';

function App() {

  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating] = useState(false);
  const [todoId,setTodoId] = useState("");

  const changeText = (e) => {
    const text = e.target.value;
    setText(text);
  }

  const updateMode = (_id,text) =>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
    console.log(text)
  }

  useEffect(() => {
    getAllTodo(setTodo);
  },[])
  return (
    <div className="App">
      <div className="container">
        <h1>To do App</h1>
        <div className="top">
          <input type="text" 
            placeholder='Add todos...'
            value={text}  
            onChange={changeText}
           />

          <div 
            className="add" 
            onClick={isUpdating ? 
              () => updateTodo(todoId,text,setTodo, setText, setIsUpdating) 
              : ()=> addTodo(text,setText,setTodo)}>
            {isUpdating ?'Update':'Add'}
          </div>
        </div>

        <div className="list">
          {
            todo.map((item) => 
              <Todo key={item._id} text={item.text} 
              updateMode={() => updateMode(item._id,item.text)}
              deleteTodo={() =>  deleteTodo(item._id,setTodo)}
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default App
