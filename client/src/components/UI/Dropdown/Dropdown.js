import React from 'react';
import classes from './Dropdown.module.css';

const dropdown = (props) => {
    let options = props.options.map(option => {
        return <option key={option} value={option}>{option}</option>
    })

    return (

        <select className={classes.dropdown} onChange={props.changed}>
            <option value="">None</option>
            {options}
        </select>
    )



}

export default dropdown;