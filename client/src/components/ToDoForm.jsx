import React from 'react';
import styles from './styles/toDoList.css';

class ToDoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      completed: false,
      toDo: '',
      id: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    let ranID = Math.floor(Math.random()* 10000)
    this.setState({toDo: e.target.value, id:ranID});
  }

  handleSubmit (e) {
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