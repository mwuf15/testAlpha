import React from 'react';
import styles from './styles/toDoList.css';

class ToDoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toDo: '',
    }

  }

  handleChange() {

  }

  handleSubmit(e) {
    e.preventDefault();

  }


  render() {
    return(
      <div className = {styles.form}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" placeholder="Add a To Do" ></input>
          <input type="submit" value="ADD"></input>
        </form>
      </div>
    )
  }
}


export default ToDoForm;