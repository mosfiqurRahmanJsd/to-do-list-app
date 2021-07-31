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
    

    const handleRemove = (title: string) => {
        const newToDoList = todoList.filter(c => c.title !== title)
        setTodoList(newToDoList)
    }


    return (
        <div>
            <h1>To Do List</h1>
            <div className="form">
                <input className='m-2'
                    value={todo.title}
                    onChange={onChange}
                    name="title"
                    type="text" 
                    placeholder="Title"
                />

                <br />
                <input className='m-2'
                    value={todo.detail}
                    onChange={onChange}
                    name="detail"
                    type="text" 
                    placeholder="Details"
                />
                <br />
                <button onClick={onClick} className="btn btn-primary">Add</button>
            </div>
            {
                todoList.map((todo) => <ToDo key={todo.title} title={todo.title} detail={todo.detail} handleRemove={handleRemove}></ToDo>)
            }

        </div>
    );
};

export default ToDoList;