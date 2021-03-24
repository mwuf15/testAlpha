import React from 'react';
import styles from './styles/count.css';

const Count = (props) => {
  return (
    <div className = {styles.countContainer}>
      {props.count}
    </div>
  )
}
export default Count;