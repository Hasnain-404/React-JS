import React from 'react'

const Button = (props) => {
    return (
        <>
            <div>Count : {props.count}</div>
            <button onClick={props.fxn}>{props.txt}</button>
        </>
    )
}

export default Button