import React from 'react';
import styles from './styles/toDoList.css';
import ToDoEntry from './ToDoEntry.jsx'

const ToDoList = ({click,todo, complete}) => {
  return (
    <div className = {styles.toDoContainer}>
      <div>TO DO LIST:</div>
      {todo.map((item,i) =>
      <ToDoEntry todoTask = {item} key = {i} click = {click} complete = {complete}/>
      )}
    </div>
  )
}
export default ToDoList;