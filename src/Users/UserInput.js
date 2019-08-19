import React from 'react'

const anInput = (props) => {
    console.log(props.newUserName, props.username)
    return (
        <div>
            <input type='text' onChange={props.newUserName} value={props.username} />
        </div>

    )
        ;
}

export default anInput;