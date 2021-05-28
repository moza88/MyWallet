
import React, {Component} from "react";
import Header from './Header';
import { useState, useEffect } from "react";
import CryptoCard from "./CryptoCards";
import FetchTickerPrice from "./FetchTickerPrice";

require('dotenv').config()

export default class PricingDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ticker: []
        };
    }

    getTickerData() {
        /*
curl -X GET "https://api.blockchain.com/v3/exchange/tickers/BTC-USD" -H  "accept: application/json"
{"symbol":"BTC-USD","price_24h":37376.4,"volume_24h":279.33007441,"last_trade_price":38178.0}
 */
        FetchTickerPrice
            .get('/exchange/tickers/')
            .then(res => {
                const data = res.data
                console.log("Here is data")
                console.log(data)

                const cryptos = data.map(c =>
                    <div>
                        <p>{c.symbol}</p>
                        <p>{c.price_24h}</p>
                        <p>{c.last_trade_price}</p>

                    </div>
                )
                this.setState({
                    cryptos
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getTickerData()
    }

    render() {
        return (
            <div>
                <Header />
                <br/><br/><br/><br/><br/>
                <div>
                    {this.state.cryptos}
                </div>

            </div>

        );
    }

}