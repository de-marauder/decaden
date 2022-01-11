import { React, Component } from 'react';

import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Containers/ContactUs/ContactUs';
import Body from './Components/Body/Body';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <Navbar header />
        <Body />
        <ContactUs />
        <Navbar footer />
      </div>
    );
  }
}

export default App;