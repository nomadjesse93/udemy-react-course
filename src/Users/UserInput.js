import React from 'react'

const anInput = (props) => {
    return (
        <div>
            <input type='text' onChange={props.newUserName} value={props.username} />
        </div>

    )
        ;
}

export default anInput;