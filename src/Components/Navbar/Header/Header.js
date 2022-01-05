import {React, Component} from 'react';

import logo from '../../../images/Main-Logo.jpg';
import classes from './Header.module.css';

class header extends Component {

    state = {
        dropDown: false,
        close: false
    }

    toggleDropDownHandler = () => {
        this.setState({
            dropDown: !this.state.dropDown,
            close: !this.state.close
        })
    }

    render () {
        let navItems;
        let close;
        let menu;

        if (this.state.close) {
            close = (
                <p onClick={this.toggleDropDownHandler} 
                    className={classes.Close}>X</p>
                    )
        } else {
            menu = (
                <div 
                    className= {classes.Menu}
                    onClick={this.toggleDropDownHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )
        }
        
        navItems = this.state.dropDown ? (
            <nav className={classes.Dropdown}>
                {close}
                <ul>
                    <li><a href="#">Home</a></li><hr/>
                    <li><a href="#">About</a></li><hr/>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        ) : null

        return (
            <header>
                <div className={classes.Container}>
                    <img src = {logo} width='180vw' alt="" />
                    {menu}
                    <nav className={classes.List}>
                        <ul>
                            <li><a href={'#'}>Home</a></li>
                            <li><a href={'#'}>About</a></li>
                            <li><a href={'#'}>Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                {navItems}
            </header>
            
        )
    }
}
export default header;