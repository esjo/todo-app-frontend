import axios from 'axios';

const baseUrl = "https://todo-jlf6.onrender.com"

export const getAllTodo = (setTodo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log(data);
        setTodo(data)
    })
}

export const addTodo = (text, setText, setTodo) => {
    
    if(text === ""){
        return 
    }else{
        axios.post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setTodo);
    })    
    .catch(error => console.log(error))
    }
    
    
    
}

export const updateTodo = (todoId,text, setTodo, setText, setUpdating) => {
    if(text === ""){
        return 
    }else{
        axios.post(`${baseUrl}/update`, {_id:todoId,text})
    .then((data) => {
        setText("")
        setUpdating(false)
        getAllTodo(setTodo);
    })
    .catch((error) => {
        console.log(error)
    })
    }
    
}

export const deleteTodo = (_id, setTodo) => {
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        getAllTodo(setTodo);
    })
    .catch((error) => {
        console.log(error)
    })
}