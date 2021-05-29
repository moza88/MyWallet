import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PricingDashboard from './components/PricingDashboard'
import Index from './components/Index'

//Load Properties File
//require('dotenv').config()

class App extends Component {
  compontentDidMount() {

  }

  render() {
    return (
        <div className="App">
            <Index />

        </div>
    )
  }
}
export default App;
