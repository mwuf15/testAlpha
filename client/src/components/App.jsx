import React, { Component } from 'react';
import View from './View.jsx';
import Count from './Count.jsx';
import ToDoForm from './ToDoForm.jsx';
import ToDoList from './ToDoList.jsx';
import styles from './styles/app.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        clicked: false,
        toDo: [],
        done: false,
      };
this.handleClick = this.handleClick.bind(this);
this.ListClick = this.ListClick.bind(this);
this.addToDo = this.addToDo.bind(this);
this.completeTodo = this.completeTodo.bind(this);
}
handleClick () {
  console.log('clicked')
  if (this.state.clicked === false) {
    this.setState({clicked: true, count: this.state.count + 1})
  } else {
    this.setState({clicked: false, count: this.state.count - 1})
  }
}

ListClick (id) {
  let newtask = (this.state.toDo).filter(todo => todo.id !== id);
  this.setState({toDo: newtask});
}

addToDo (task) {
this.setState({toDo:this.state.toDo.concat(task)});
}

completeTodo (id) {
  let result = [];
  let completedTask = (this.state.toDo).forEach(todo => {
    if (todo.id === id) {
      todo.completed? todo.completed = false : todo.completed = true;
      result.push(todo)
    } else {
      result.push(todo)
    }
    return result
  }
    );
  this.setState({toDo: result});
}

  render() {
    let text = this.state.done ? styles.strikeThrough: styles.normal;
    return (
      <div className = {styles.main}>
        <div className = {styles.gridContainer}>
          <Count count = {this.state.count}/>
          <View click = {this.handleClick}/>
          <ToDoList todo = {this.state.toDo} click = {this.ListClick} complete = {this.completeTodo}/>
          <ToDoForm addTask = {this.addToDo}/>
        </div>
      </div>
    );
  }
}

export default App;