import React from 'react';
import classes from './Input.module.css';

const input = (props) => (
    <input readOnly className={classes.Input} placeholder={props.placeholder} value={props.value}></input>
)

export default input;