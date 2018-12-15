import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button className={props.disabled ? classes.disabled :classes.button} onClick={props.clicked}>Search</button>
)

export default button;