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
        if (this.state.activeItem >= itemArray.length - 1) {
            this.setState({ activeItem: 0 })
        } else {
            this.setState({ activeItem: this.state.activeItem + 1 })
        }
    }

    bwdButtonHandler = () => {
        if (this.state.activeItem <= 0) {
            this.setState({ activeItem: itemArray.length - 1 })
        } else {
            this.setState({ activeItem: this.state.activeItem - 1 })
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
            return (`${((id+1)*15)}% {transform: translateX(${-100 * (id)}vw)}`)
        })

        const keyFrames = keyframes`{${keyframeItems.join(' ')}}`

        const animation = css`${keyFrames} 20s steps(1, end) infinite`
        
        const Style = styled.div`
            animation: ${animation};
        `
            const items = (
            <div className={classes.Carousel}>
                <Style className={classes.Container} >
                    {carouselArray}
                </Style>
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