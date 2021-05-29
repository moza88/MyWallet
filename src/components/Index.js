import {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PricingDashboard from "./PricingDashboard";

/*
As you add in pages add them into this index along with the sub page they belong to

Follow the example below:
<Route path='/buy-sell' component={BuySell} />

 */
class Index extends Component {
    render() {
        return (
            <>

                <BrowserRouter basename={'/'}>
                    <div id="main-wrapper">

                        <Switch>
                            <Route path='/' exact component={PricingDashboard}/>

                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

export default Index;