import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';


const navbar = (props) => {
    return(
            <div>
                {props.header ? <Header /> : null}
                {props.footer ? <Footer />: null}
            </div>
        )
}


export default navbar;