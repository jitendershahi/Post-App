import React from 'react';

import {Link} from 'react-router-dom';

const Userlist = (props) => {
    return (
        <tr style={{height:"4em"}}>
            <td>{props.id}</td>
            <td><Link to={"/users/" + props.id}> {props.name}</Link></td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.company.name}</td>
            <td>{props.address.city}</td>
        </tr>
    );
};

export default Userlist;