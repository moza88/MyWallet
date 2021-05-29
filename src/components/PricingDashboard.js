
import React, {Component} from "react";
import Header from './Header';
import { useState, useEffect } from "react";
import {loadExchangeTicker_allcurrpairs} from "./FetchTickerPrice";
import {Button, Card, CardActions, CardContent, CardHeader, Typography, Grid} from "@material-ui/core";
import FiatComboBox from "./FiatComboBox";
import CryptoComboBox from "./CryptoComboBox";

require('dotenv').config()

function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}

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
        loadExchangeTicker_allcurrpairs()
            .then(res => {
                const data = res.data
                console.log("Here is data")
                console.log(data)

                const cryptos = data.map(c =>
                    <Grid item xs={12} sm={6} md={3}>

                        <Card>
                            <CardHeader
                                title={c.symbol}/>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Price Last 24hrs: {round(c.price_24h, 2)}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Price Last Traded: {round(c.last_trade_price, 2)}
                                </Typography>
                                <Button size="small" color="primary">Buy</Button>
                                <Button size="small" color="primary">Sell</Button>
                            </CardContent>

                        </Card>
                    </Grid>

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
                <div align="center">
                    <h2>Add your currency pairs</h2>

                    <div className="addCurrencyPairs" align="center">
                        <FiatComboBox/>
                        <CryptoComboBox/>
                        <Button variant="outlined" color="secondary">Add</Button>
                    </div>

                    <br/><br/><br/><br/><br/>

                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {this.state.cryptos}
                    </Grid>
                </div>

            </div>

        );
    }

}