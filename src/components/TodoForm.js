import React, {useState} from 'react';

export default function TodoForm(props) {
    const [input, setInput] = useState('');
var i=1;
    const handleChange= e =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id:i,
            text:input,
            isComplete:false
        })
        setInput('');
        i++;
    }

    return( 
    <form className="todo-form">

        <input type="text" placeholder='Add a task' onChange={handleChange} className="todo-input" value={input} name="text"/>
        <button type="submit" onClick={handleSubmit} classname='todo-submit-btn'>ADD TASK</button>
</form>
    );
}