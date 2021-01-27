import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';
import { TodoStyle } from './TodoStyle';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div key={index}>
            <TodoStyle>
                <button>
                    <TiEdit size={20} onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon' />
                    
                    <RiCloseCircleLine size={20} onClick={() => removeTodo(todo.id)}
                    className='delete-icon' />
                </button>
                <div key={todo.id}>{todo.text}
                    <div className='data'>{todo.date}</div>
                    
                </div>
        
            </TodoStyle>
        </div>    
    ));
}

export default Todo;