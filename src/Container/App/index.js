import React from 'react';
import logo from '../../logo.svg';
import s from './App.module.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
function App() {
  return (
    <Router>
      <div className={s.App}>
        <header className={s['App-header']}>
          <img src={logo} className={s['App-logo']} alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" render={() => <h3>topics</h3>} />
            <Route render={() => <h3>404</h3>} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
