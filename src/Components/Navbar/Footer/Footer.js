import React from 'react'

import Social from '../../UI/SocialLinks/Social'
import classes from './footer.module.css'

const footer = () => {
    return (
        <footer className={classes.Footer}> 
            <p>copyright decaden.com</p>
            <Social type={'Horizontal'}/>
            <p>By De-Marauder</p>
        </footer>
    )
}

export default footer;