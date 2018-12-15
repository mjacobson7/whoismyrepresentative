import React from 'react';
import classes from './RepInfo.module.css';
import Input from '../UI/Input/Input';

const repInfo = (props) => (
    <div>
        <h1 className={classes.title}>Info</h1>

        <div className={classes.form}>
            <Input placeholder="First Name" value={props.rep ? props.rep.name.split(' ').slice(0, -1).join(' ') : ''} />
            <Input placeholder="Last Name" value={props.rep ? props.rep.name.split(' ').slice(-1).join(' ') : ''} />
            <Input placeholder="District" value={props.rep ? props.rep.district : ''} />
            <Input placeholder="Phone" value={props.rep ? props.rep.phone : ''} />
            <Input placeholder="Office" value={props.rep ? props.rep.office : ''} />
        </div>
    </div>
)

export default repInfo;