import React from 'react';
import styles from './styles/todolist.css';

class ToDoForm extends React.Component {
    state = {
      completed: false,
      toDo: '',
      id: ''
    }

  handleChange = (e) => {
    let ranID = Math.floor(Math.random()* 10000)
    this.setState({toDo: e.target.value, id:ranID});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    e.target.inputTask.value ='';
  }


  render() {
    return(
      <div className = {styles.form}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id='inputTask' name="todo" placeholder="Add a To Do" onChange = {this.handleChange}></input>
          <input type="submit" value="ADD"></input>
        </form>
      </div>
    )
  }
}


export default ToDoForm;