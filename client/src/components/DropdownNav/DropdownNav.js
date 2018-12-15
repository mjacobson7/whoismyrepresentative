import React from 'react';
import Button from '../UI/Button/Button';
import Dropdown from '../UI/Dropdown/Dropdown';
import classes from './DropdownNav.module.css';

const dropdownNav = (props) => {
    const personType = ['Representatives', 'Senators'];
    const state = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

    

    return (
        <div className={classes.DropdownNav}>
            <Dropdown options={personType} changed={props.personTypeChanged}/>
            <Dropdown options={state} changed={props.stateChanged}/>
            <Button disabled={props.buttonDisabled} clicked={props.search}/>
        </div>
    )

}

export default dropdownNav;



