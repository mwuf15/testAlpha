import React from 'react';
import styles from './styles/todolist.css';

const ToDoEntry = ({todoTask,click, complete}) => {
let toDoClass = todoTask.completed? styles.strikeThrough : styles.list;
  return (
    <div className = {styles.toDoEntry}>
      <li className = {toDoClass} onClick={()=> complete(todoTask.id)} >{todoTask.toDo} </li>
      <br></br>
      <button className = {styles.button} onClick = {()=> click(todoTask.id)}>delete</button>
    </div>
  )
}
export default ToDoEntry;