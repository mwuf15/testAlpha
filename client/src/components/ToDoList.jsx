import React from 'react';
import styles from './styles/toDoList.css';

const ToDoList = (props) => {
  return (
    <div className = {styles.toDoContainer}>
      <div>TO DO LIST:</div>
      {props.todo.map((item,i) =>
      <li>{item} <button>done</button></li>
      )}

    </div>
  )
}
export default ToDoList;