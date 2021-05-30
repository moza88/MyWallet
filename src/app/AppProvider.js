import React from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage
        }
    }


    savedSettings() {
        let cryptoData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoData) {
            return {page: 'settings', firstVisit: true}
        }
    }

    setPage = page => this.setState({page})

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}