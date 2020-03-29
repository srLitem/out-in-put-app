import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="Output">
            <p>Paragraph 1 - {props.username}</p>
            <p>Paragraph 2</p>
        </div>
    );
}

export default UserOutput;