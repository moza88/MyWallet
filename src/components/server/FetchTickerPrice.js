import axios from 'axios'

//Common Blockchain API Instance
export const api_blockchainDotCom = axios.create({
    baseURL: 'https://api.blockchain.com/v3/exchange',
    headers: {
        'accept': 'application/json'
    },
});

/*
Must pass in first cryptocurrency symbol then fiat symbol, separated by -
See API call below for example
https://api.blockchain.com/v3/exchange/tickers/BTC-USD
API Code is not necessary, this is public
 */
export const loadExchangeTicker_currpair = currPair => {
    return api_blockchainDotCom.get('/exchange/tickers/{currPair}').then(res => res.data)
}


/*
There are no parameters, this will pull all available crypto and fiat ticker pairs
See API call below for example
https://api.blockchain.com/v3/exchange/tickers
API Code is not necessary, this is public
 */
export const loadExchangeTicker_allcurrpairs = () => {
    return api_blockchainDotCom.get('/tickers/')//.then(res => res.data)
}

/*
export default {
    getData: () =>
        getBlockchainDotComInfo({
            'method': 'GET',
            'url': '/exchange/tickers/',
        }) ,
    postData: () =>
        instance({
            'method': 'POST',
            'url':'/api',
            'data': {
                'item1':'data1',
                'item2':'item2'
            }
        })
}*/
