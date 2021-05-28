import axios from 'axios'

//Common Blockchain API Instance
const getBlockchainDotComInfo = axios.create({
    baseURL: 'https://api.blockchain.com/v3',
    headers: {
        'accept': 'application/json'
    },
});

export default getBlockchainDotComInfo;

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
