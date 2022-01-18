import React from 'react';

import classes from './Button.module.css'

const button = (props) => {
    return (
        <button 
            type={props.type}
            className={classes[props.class]}
            onClick={props.doStuff}>
                {props.children}
            </button>
    )
}

export default button;