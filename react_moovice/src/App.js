import React from 'react';
import Discover from './components/Discover'
import DiscoverBattle from './components/DiscoverBattle'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import MyList from './components/MyList' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">Battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular-battle</Link></li>
              <li><Link to="/MyList/">MyList</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component= {Discover}>
              <Discover />
            </Route>
            <Route exact path="/battle/" component= {DiscoverBattle}>
              <DiscoverBattle />
            </Route>
            <Route exact path="/popular/" component= {Popular}>
              <Popular />
            </Route>
            <Route exact path="/popular-battle/" component= {PopularBattle}>
              <PopularBattle />
            </Route>
            <Route exact path="/MyList/" component= {MyList}>
              <MyList />
            </Route>       
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;