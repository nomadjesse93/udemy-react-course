import React from 'react';


function validate(props) {
    return <h1>
        {props.length >= 5 ? 'Text long enough!' : "Text is to short!"}
    </h1>
}
export default validate;