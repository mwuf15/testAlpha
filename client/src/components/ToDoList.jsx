import React from 'react';
import styles from './styles/toDoList.css';

const ToDoList = ({click,todo,text}) => {
  return (
    <div className = {styles.toDoContainer}>
      <div>TO DO LIST:</div>
      {todo.map((item,i) =>
      <li className = {text}>{item} <button onClick = {click}>done</button></li>
      )}

    </div>
  )
}
export default ToDoList;