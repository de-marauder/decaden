import React from 'react';

import classes from './Social.module.css'

const social = (props) => {

    const listStyle = props.type.split(' ')
    let style = ''
    listStyle.forEach((el) => {
        style += classes[el] + ' '
    })

    return (
        <ul className={style} style={{ top: props.top }} >
            <li><a href='https://twitter.com/DecadenTeam?s=20' ><img src="https://img.icons8.com/office/50/000000/twitter.png" alt="" /></a></li>
            <li><img src="https://img.icons8.com/office/50/000000/facebook-new.png" alt="" /></li>
            <li><img src="https://img.icons8.com/office/50/000000/youtube-play.png" alt="" /></li>
            <li><img src="https://img.icons8.com/office/50/000000/instagram-new.png" alt="" /></li>
        </ul>
    )
}

export default social;