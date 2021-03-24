import React from 'react';
import styles from './styles/view.css';

const View = (props) => {
  return (
    <div className = {styles.viewContainer}>
      <button className = {styles.likeButton} onClick={props.click}>Like</button>
    </div>
  )
}
export default View;