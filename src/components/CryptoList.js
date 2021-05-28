import React from "react";
import { useState, useEffect } from "react";
import CryptoCard from "./CryptoCards";

export default function CryptoList() {
    const [tickers, setTickers] = useState([]);

    useEffect(() => {
        fetch("https://api.blockchain.com/v3/exchange/tickers")
            .then((resp) => resp.json())
            .then((resp) => setTickers(resp));

        const interval = setInterval(() => {
            fetch("https://api.blockchain.com/v3/exchange/tickers")
                .then((resp) => resp.json())
                .then((resp) => setTickers(resp));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const renderCards = () => {
        return tickers
            .filter((ticker) => {
                return (
                    ticker.symbol.includes("-USD") && !ticker.symbol.includes("-USDT")
                );
            })
            .map((ticker) => {
                return <CryptoCard ticker={ticker} key={ticker.symbol} />;
            });
    };

    return <div className="crypto-list">{renderCards()}</div>;
}