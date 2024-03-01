import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Fashion from '../components/Fashion';
import Bars from '../components/Bars';
import Other from '../components/Other';
import Footer from '../components/Footer';

export default function PortfolioContainer() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Fashion" component={Fashion} />
                    <Route exact path="/Bars" component={Bars} />
                    <Route exact path="/Other" component={Other} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}