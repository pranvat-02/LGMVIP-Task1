import { React  } from "react";
import{RiCloseCircleLine} from 'react-icons/ri'
import { TiTick } from "react-icons/ti";

export default function Todo({todos,completeTask, removeTask}){

    if (!Array.isArray(todos)) {
        return null; 
      }

return todos.map((todo,index) => (
    <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
    <div className="todo-text">{todo.text}</div>
    <div classnName="icons" key= {todo.id}>
    <TiTick className={todo.isComplete ? 'hide': 'tick'} onClick={()=> { completeTask(todo.id) }}></TiTick>
    <RiCloseCircleLine className="cross"  onClick= {() => {removeTask(todo.id) }}></RiCloseCircleLine>
    </div>
    </div>
))  
}