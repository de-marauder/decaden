import { React, Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

import classes from './Carousel.module.css';
import Img1 from '../../../images/logo text 4.png';
import Img2 from '../../../images/pexels-rodnae-productions-8369829.jpg';
import Img3 from '../../../images/pexels-worldspectrum-844124.jpg';
import Img4 from '../../../images/pexels-alesia-kozik-6772024.jpg';
import Img5 from '../../../images/pexels-alesia-kozik-6772103.jpg';

const itemArray = [Img1, Img2, Img3, Img4, Img5]

class Carousel extends Component {

    state = {
        activeItem: 0,
    }

    fwdButtonHandler = () => {
        // console.log("Going fwd", this.state.activeItem)
        if (this.state.activeItem >= itemArray.length - 1) {
            // console.log(`resetting active item to ${itemArray.length - 1}`)
            // this.setState({ activeItem: itemArray.length - 1, fwdDisabled: true })
            this.setState({ activeItem: 0 })
        } else {
            // this.setState({ activeItem: this.state.activeItem + 1, bwdDisabled: false })
            this.setState({ activeItem: this.state.activeItem + 1 })
            // console.log("setting active item")
        }
    }

    bwdButtonHandler = () => {
        // console.log(`Going bwd to ${this.state.activeItem - 1}`)
        if (this.state.activeItem <= 0) {
            // console.log("resetting active item to 0")
            // this.setState({ activeItem: 0, bwdDisabled: true })
            this.setState({ activeItem: itemArray.length - 1 })
        } else {
            // this.setState({ activeItem: this.state.activeItem - 1, fwdDisabled: false })
            this.setState({ activeItem: this.state.activeItem - 1 })
            // console.log("setting active item")
        }
    }

    loop = () => {
        this.interval = setInterval(() => {
            this.fwdButtonHandler()
        }, 4000)
    }

    loopDisable = () => {
        clearInterval(this.interval)
    }

    btnDisableSetup = () => {
        if (this.state.activeItem > 0 && this.state.activeItem < itemArray.length - 1) {
            this.setState({
                fwdDisabled: false,
                bwdDisabled: false
            })
        } else if (this.state.activeItem === 0) {
            this.setState({ bwdDisabled: true })
        } else if (this.state.activeItem === itemArray.length - 1) {
            this.setState({ fwdDisabled: true })
        }
    }

    // componentDidMount() {
    //     // console.log("[componentDidMount]")
    //     // this.loop()
    //     // this.btnDisableSetup()
    // }

    render() {
        const carouselArray = itemArray.map((el, id) => {
            return (
                <div key={id}
                    style={{ width: "100vw" }}
                    className={classes.Item}>
                    <img className={classes.BgImg} src={el} alt='1' />
                </div>
            )
        })

        const keyframeItems = carouselArray.map((el, id) => {
            // return (`${(((id+1)/(carouselArray.length)))*100-10}% {transform: translateX(${-100 * (id)}vw)}`)
            return (`${((id+1)*15)}% {transform: translateX(${-100 * (id)}vw)}`)
        })
        // console.log(keyframeItems.join(" "))

        const keyFrames = keyframes`{${keyframeItems.join(' ')}}`

        // console.log(keyFrames)


        const animation = css`${keyFrames} 20s steps(1, end) infinite`
        
        // console.log(style)
        const Style = styled.div`
            animation: ${animation};
#        `
        const items = (
            <div className={classes.Carousel}
            // onClick={() =>  this.loopDisable() }
                // onMouseEnter={() => {  }}
                // onMouseLeave={() => { this.loop() }} 
            >
                <Style
                    className={classes.Container}
                    // style={style}{ transform: `translateX(${-100 * (this.state.activeItem)}vw)` }}
                    >
                    {carouselArray}
                    {/* {style} */}
                </Style>
                {/* <div className={classes.Button}> */}
                {/* <button
                    onClick={() => { this.bwdButtonHandler() }}
                    disabled={this.state.bwdDisabled}
                    className={classes.Button + " " + classes.bwd}>&lt;</button>
                <button
                    onClick={() => { this.fwdButtonHandler() }}
                    disabled={this.state.fwdDisabled}
                    className={classes.Button + ' ' + classes.fwd}>&gt;</button> */}
                {/* </div> */}
            </div>
        )
        

        return (
            <div>
                {items}
            </div>
        )
    }
}

export default Carousel;