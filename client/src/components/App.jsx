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
        toDo: ['study','cook','walk outside'],
        done: false,
      };
this.handleClick = this.handleClick.bind(this)
this.ListClick = this.ListClick.bind(this)

}
handleClick () {
  console.log('clicked')
  if (this.state.clicked === false) {
    this.setState({clicked: true, count: this.state.count + 1})
  } else {
    this.setState({clicked: false, count: this.state.count - 1})
  }
    }

ListClick () {
  // this.state.done ? this.setState({done:false}) : this.setState({done:true})
  // this.setState({done: true})
  console.log('clicked')
};
  render() {
    let text = this.state.done ? styles.strikeThrough: styles.normal;
    return (
      <div className = {styles.main}>
        <div className = {styles.gridContainer}>
          <Count count = {this.state.count}/>
          <View click = {this.handleClick}/>
          <ToDoList todo = {this.state.toDo} click = {this.ListClick} text = {text}/>
          <ToDoForm/>
        </div>
      </div>
    );
  }
}

export default App;