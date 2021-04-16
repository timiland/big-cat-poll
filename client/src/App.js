import React from 'react';
import AppNavbar from './components/AppNavbar';
import PollContainer from './components/PollContainer';
import Info from './components/Info';
import Banner from './components/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Banner />
        <Switch>
          <Route path="/" exact component={PollContainer} />
          <Route path="/Info" exact component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
