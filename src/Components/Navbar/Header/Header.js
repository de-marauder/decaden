import {React, Component} from 'react';

import logo1 from '../../../images/LOGO alone.png';
import logo2 from '../../../images/logo text 2(white).png';
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
                    {/* <li><Link to='/'>Home</Link></li><hr/>
                    <li><Link to='/about'>About</Link></li><hr/>
                    <li><Link to='/contact'>Contact Us</Link></li> */}
                    <li><a href='#1'>Home</a></li><hr/>
                    <li><a href='#2'>About</a></li><hr/>
                    <li><a href='#3'>Contact Us</a></li>
                </ul>
            </nav>
        ) : null

        return (
            <header>
                <div className={classes.Container}>
                    <img className={classes.Logo1} src = {logo1} alt="" />
                    <img className={classes.Logo2} src = {logo2} alt="" />
                    {menu}
                    <nav className={classes.List}>
                        <ul>
                            <li><a href={'#1'}>Home</a></li>
                            <li><a href={'#2'}>About</a></li>
                            <li><a href={'#3'}>Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                {navItems}
            </header>
            
        )
    }
}
export default header;