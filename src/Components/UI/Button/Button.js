import React from 'react';

import classes from './Button.module.css'

const button = (props) => {
    return (
        <button 
            className={classes[props.type]}
            onClick={props.doStuff}>
                {props.children}</button>
    )
}

export default button;