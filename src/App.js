import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PricingDashboard from './components/pages/PricingDashboard'
import Index from './components/pages/Index'
import Header from "./components/Header";

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
