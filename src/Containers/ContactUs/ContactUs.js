import {React, Component} from 'react';

import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';

import bgImg from '../../images/shubham-dhage-T9rKvI3N0NM-unsplash.jpg'
import emailIcon from '../../images/email-mail-pngrepo-com.png'
import classes from './ContactUs.module.css'


class ContactUs extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    }

    inputUpdate = (event, id) => {
        console.log(id)
        let newStateObj = {...this.state}
        newStateObj[id] = event.target.value
        console.log(newStateObj)
        this.setState({
            ...newStateObj
        })
    }

    submitHandler = () => {
        alert("Your mail has been successfully subimtted!\nThank you!!!")
    }

    render() {
        let name;
        let type;
        let placeholder;

        let input = Object.keys(this.state).map((id) => {

            switch (id) {
                case ('name'):
                    name = id;
                    type='text';
                    placeholder='Name';
                    break
                case ('subject'):
                    name = id;
                    type='text';
                    placeholder='Subject ';
                    break
                case ('email'):
                    name = id;
                    type='email';
                    placeholder='E-mail';
                    break
                case ('phone'):
                    name = id;
                    type='tel';
                    placeholder='Phone';
                    break
                case ('message'):
                    name = id;
                    type='textarea';
                    placeholder='Message';
                    break
                default:
                    name=''
                    type='text'
                    placeholder=''
            }

            return <Input key={id} 
                name={name} 
                placeholder={placeholder} 
                type={type}
                value={this.state[name]}
                update={(event) => this.inputUpdate(event, id)} />
        })

        return (
            <div id='3' className={classes.Contact}>
                <div >
                <img className={classes.BgImg} src={bgImg} alt=""/>
                    <h1>- Contact DECADEN -</h1>
                    <p>Any inquiries? Fill the form and we'll get back to you shortly</p>
                    <h4>
                        <span>
                            <img src={emailIcon} alt="email-icon" />
                        </span>
                        decaden@gmail.com
                    </h4>
                    <form className={classes.Form} action="">
                        {input}
                        <Button doStuff={() => this.submitHandler()} type={'Submit'} >SUBMIT</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs;