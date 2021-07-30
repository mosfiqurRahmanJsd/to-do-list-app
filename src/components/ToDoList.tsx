import React, { useState } from 'react';
import ToDo from './ToDo';

const ToDoList = () => {
    const [todo, setTodo] = useState(""); 
    const [todoList, setTodoList] = useState<string[]>([])
    
    const onClick = () => {
        setTodoList([...todoList, todo])
    }

    return (
        <div>
            <h1 className="text-primary bg-secondary m-2 p-2 rounded font-italic ">My To Do Lists</h1>
            <div className="form">
                <input 
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    name="title" 
                    type="text" 
                    placeholder="Title"    
                />
                <button onClick={onClick} className="btn btn-primary">Add</button>
            </div>
            <ToDo title="My Work" detail="lorem5"></ToDo>
        </div>
    );
};

export default ToDoList;