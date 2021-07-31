import React, { useState } from 'react';
import ToDo  from './ToDo';

interface ITodo {
    title: string, 
    detail : string
}

const ToDoList = () => {
    const [todo, setTodo] = useState<ITodo>({} as ITodo);
    const [todoList, setTodoList] = useState<ITodo[]>([]); 

    const onClick = () => {
        setTodoList([ ...todoList, todo])
        setTodo({
            title: "", 
            detail: ""
        })
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodo({ ...todo, [e.target.name]: e.target.value})
    console.log('Todo', todo)
    console.log('Todo List', todoList)


    return (
        <div>
            <h1>To Do List</h1>
            <div className="form">
                <input 
                    value={todo.title}
                    onChange={onChange}
                    name="title"
                    type="text" 
                    placeholder="Title"
                />
                <input 
                    value={todo.detail}
                    onChange={onChange}
                    name="detail"
                    type="text" 
                    placeholder="Details"
                />
                <button onClick={onClick} className="btn btn-primary">Add</button>
            </div>
            {
                todoList.map((todo) => <ToDo key={todo.title} title={todo.title} detail={todo.detail}></ToDo>)
            }

        </div>
    );
};

export default ToDoList;