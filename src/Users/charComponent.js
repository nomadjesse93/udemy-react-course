import React from 'react'
const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    color: "white",
    backgroundColor: "black"
};
const CharComp = (props) => {
    return <div style={style} className='letters' onClick={props.clicked} >{props.letter}</div>
};

export default CharComp;