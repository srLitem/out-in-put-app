import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="Input">
            <input type="text" onChange={props.change} value={props.username}></input>
        </div>
    );
}

export default userInput;