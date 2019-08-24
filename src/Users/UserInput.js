import React from 'react'

const anInput = (props) => {
    return (
        <div>
            <input type='text' onChange={props.newUserName} />
        </div>

    )
        ;
}

export default anInput;