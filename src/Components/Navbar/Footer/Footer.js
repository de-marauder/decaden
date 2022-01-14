import React from 'react'

import Social from '../../UI/SocialLinks/Social'
import img from '../../../images/logo text 1.png'
import classes from './footer.module.css'

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <img className={classes.Logo} src={img} alt='' />
            <p>copyright decaden.com</p>
            <Social type={'Horizontal'} />
        </footer>
    )
}

export default footer;