import React, { useState } from 'react';
import { TodoFormStyle } from './TodoFormStyle';

const TodoForm = (props) => {
    const [todoForm, setTodoForm] = useState('');

    const handleSubmit = e => {

        const data = new Date()
        const dataNow = data.toLocaleTimeString('pt-BR');

        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: todoForm,
            date: dataNow
        });

        setTodoForm('');
    };

    const handleChange = e => {
        setTodoForm(e.target.value);
    };
    
    return(
        <>
            <TodoFormStyle>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={todoForm} onChange={handleChange} />
                    <button>Send</button>
                </form>
            </TodoFormStyle>
        </>
    );
};

export default TodoForm;
