import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PricingDashboard from './components/PricingDashboard'
import CryptoList from "./components/CryptoList";

//Load Properties File
//require('dotenv').config()

class App extends Component {
  compontentDidMount() {

  }

  render() {
    return (
        <Router>
          <Route exact={true} path='/' render={() => (
              <div className="App">
                <PricingDashboard/>
              </div>
          )}/>

            <Route exact={true} path='/dashboard' render={() => (
                <div className="App">
                    <CryptoList/>
                </div>
            )}/>

        </Router>
    )
  }
}
export default App;
