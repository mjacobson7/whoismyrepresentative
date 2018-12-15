import React from 'react';
import classes from './RepsList.module.css';


const repsList = (props) => {
    let personType;
    if (props.personType && props.repsList.length > 0) {
        personType = props.personType.charAt(0).toUpperCase() + props.personType.slice(1);
    }

    const repsList = props.repsList.map(rep => {
        return (
            <tr onClick={() => props.selectRep(rep)} className={classes.tableRow} key={rep.phone}>
                <td>{rep.name}</td>
                <td>{rep.party}</td>
            </tr>
        )
    })


    return (
        <div className={classes.RepsList}>
            <h1 className={classes.title}>List / <span className={classes.personType}>{personType}</span></h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Party</th>
                    </tr>
                    {repsList}
                </tbody>

            </table>
        </div>
    )


}

export default repsList;