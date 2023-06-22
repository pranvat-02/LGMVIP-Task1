import React from "react";
import {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {

    const [todos, setTodos] = useState([]);

    // State Array which holds all TODOS
    const addTask = task => {
        if (!task.text) {
            return
        }
      //  const newTodos = { task, ...todos };

        // is same as const oldTask= todos;
        //            todos.push{task};
        setTodos((t)=>[...t,task]);
        console.log(todos);
    }

    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id);
        setTodos(updatedTasks);
      };

    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = true;
            }
            return todo;
        })

        setTodos(updatedTasks)
    }

    return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>
}
export default TodoList;