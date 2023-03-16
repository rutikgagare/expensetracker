import React from 'react';
import './Card.css';

// we are only creating this component for aply some kind of common styling to a component i.e like card have border radius and box shadow

function Card(props) {
    // for card we should have style of card its own specific of the component
    const classes = 'card ' + props.className;
    
  return (
    // props.children is used so that card can act as a wrapper component
    <div className={classes}>{props.children}</div>
  )
}

export default Card;